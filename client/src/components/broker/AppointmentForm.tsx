import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Turnstile } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Loader2, CheckCircle } from "lucide-react";

const MARKET_SEGMENTS = [
  { id: "trucking", label: "Trucking (long-haul, local, specialized, fleet)" },
  { id: "sports", label: "Sports insurance" },
  { id: "travel", label: "Travel insurance" },
  { id: "entertainment", label: "Entertainment insurance" },
];

const PREMIUM_VOLUMES = [
  { value: "under-500k", label: "Under $500K" },
  { value: "500k-2m", label: "$500K - $2M" },
  { value: "2m-5m", label: "$2M - $5M" },
  { value: "5m-10m", label: "$5M - $10M" },
  { value: "over-10m", label: "Over $10M" },
];

const formSchema = z.object({
  // Broker Information
  fullName: z.string().min(1, "Full name is required"),
  agencyName: z.string().min(1, "Agency name is required"),
  email: z.string().email("Please enter a valid email").optional().or(z.literal("")),
  phone: z.string().optional().or(z.literal("")),
  
  // Market Focus
  marketSegments: z.array(z.string()).min(1, "Please select at least one market segment"),
  otherSegment: z.string().optional(),
  
  // Business Potential
  premiumVolume: z.enum(["under-500k", "500k-2m", "2m-5m", "5m-10m", "over-10m"], {
    required_error: "Please select your estimated premium volume",
  }),
  
  // Partnership Goals
  partnershipGoals: z.string().min(1, "Please tell us your partnership goals"),
  
  // Anti-bot fields
  website: z.string().optional(),
  formLoadedAt: z.number().optional(),
  turnstileToken: z.string().min(1, "Please complete the captcha verification"),
});

type FormData = z.infer<typeof formSchema>;

export function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formLoadedAt] = useState(() => Date.now());
  const [showOtherInput, setShowOtherInput] = useState(false);
  const { toast } = useToast();

  // Get the Turnstile site key from environment
  const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY || "1x00000000000000000000AA"; // Test key fallback

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      agencyName: "",
      email: "",
      phone: "",
      marketSegments: [],
      otherSegment: "",
      premiumVolume: undefined,
      partnershipGoals: "",
      website: "",
      formLoadedAt: undefined,
      turnstileToken: "",
    },
  });

  // Set form loaded timestamp when component mounts
  useEffect(() => {
    form.setValue("formLoadedAt", formLoadedAt);
  }, [formLoadedAt, form]);

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      const response = await apiRequest("POST", "/api/broker-application", data);
      const result = await response.json();
      if (result.success) {
        setIsSuccess(true);
        toast({
          title: "Application submitted!",
          description: "We'll review your application and get back to you soon.",
        });
        form.reset();
      }
    } catch (error) {
      let errorMessage = "Please try again later.";
      if (error instanceof Error) {
        // Try to parse JSON error from the error message (format: "status: json")
        const match = error.message.match(/^\d+:\s*(.+)$/);
        if (match) {
          try {
            const parsed = JSON.parse(match[1]);
            errorMessage = parsed.error || match[1];
          } catch {
            errorMessage = match[1];
          }
        } else {
          errorMessage = error.message;
        }
      }
      toast({
        title: "Failed to submit application",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
        <p className="text-white/70 mb-6">
          Your application has been submitted. We'll review it and be in touch soon.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
          Submit Another Application
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        {/* Broker Information Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
            Broker Information
          </h3>
          
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Full Name of Primary Broker Contact *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="John Smith" 
                    {...field} 
                    data-testid="input-full-name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="agencyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Brokerage/Agency Name *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="ABC Insurance Agency" 
                    {...field} 
                    data-testid="input-agency-name" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50" 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email (optional)</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="john@example.com" 
                      {...field} 
                      data-testid="input-email" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Phone (optional)</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="(555) 123-4567" 
                      {...field} 
                      data-testid="input-phone" 
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/50" 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Market Focus Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
            Market Focus
          </h3>
          <p className="text-white/70 text-sm">Which segments do you currently serve? (Select all that apply)</p>
          
          <FormField
            control={form.control}
            name="marketSegments"
            render={() => (
              <FormItem>
                <div className="space-y-3">
                  {MARKET_SEGMENTS.map((segment) => (
                    <FormField
                      key={segment.id}
                      control={form.control}
                      name="marketSegments"
                      render={({ field }) => {
                        return (
                          <FormItem
                            key={segment.id}
                            className="flex flex-row items-start space-x-3 space-y-0"
                          >
                            <FormControl>
                              <Checkbox
                                checked={field.value?.includes(segment.id)}
                                onCheckedChange={(checked) => {
                                  return checked
                                    ? field.onChange([...field.value, segment.id])
                                    : field.onChange(
                                        field.value?.filter(
                                          (value) => value !== segment.id
                                        )
                                      );
                                }}
                                className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                                data-testid={`checkbox-segment-${segment.id}`}
                              />
                            </FormControl>
                            <FormLabel className="text-white font-normal cursor-pointer">
                              {segment.label}
                            </FormLabel>
                          </FormItem>
                        );
                      }}
                    />
                  ))}
                  
                  {/* Other option */}
                  <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                      <Checkbox
                        checked={showOtherInput}
                        onCheckedChange={(checked) => {
                          setShowOtherInput(!!checked);
                          if (!checked) {
                            form.setValue("otherSegment", "");
                            const currentSegments = form.getValues("marketSegments");
                            form.setValue("marketSegments", currentSegments.filter(s => s !== "other"));
                          } else {
                            const currentSegments = form.getValues("marketSegments");
                            form.setValue("marketSegments", [...currentSegments, "other"]);
                          }
                        }}
                        className="border-white/30 data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                        data-testid="checkbox-segment-other"
                      />
                    </FormControl>
                    <FormLabel className="text-white font-normal cursor-pointer">
                      Other
                    </FormLabel>
                  </FormItem>
                  
                  {showOtherInput && (
                    <FormField
                      control={form.control}
                      name="otherSegment"
                      render={({ field }) => (
                        <FormItem className="ml-7">
                          <FormControl>
                            <Input 
                              placeholder="Please specify..." 
                              {...field} 
                              data-testid="input-other-segment" 
                              className="bg-white/10 border-white/20 text-white placeholder:text-white/50" 
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  )}
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Business Potential Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
            Business Potential
          </h3>
          <p className="text-white/70 text-sm">Estimated annual premium volume across all segments?</p>
          
          <FormField
            control={form.control}
            name="premiumVolume"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    value={field.value}
                    className="flex flex-wrap gap-3"
                  >
                    {PREMIUM_VOLUMES.map((volume) => (
                      <div key={volume.value} className="flex items-center">
                        <RadioGroupItem 
                          value={volume.value} 
                          id={`volume-${volume.value}`} 
                          className="peer sr-only" 
                          data-testid={`radio-volume-${volume.value}`}
                        />
                        <label 
                          htmlFor={`volume-${volume.value}`}
                          className="px-4 py-2 rounded-lg border border-white/20 text-white/80 cursor-pointer transition-all
                            peer-data-[state=checked]:bg-primary peer-data-[state=checked]:border-primary peer-data-[state=checked]:text-white
                            hover:bg-white/10"
                        >
                          {volume.label}
                        </label>
                      </div>
                    ))}
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Partnership Goals Section */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white border-b border-white/20 pb-2">
            Partnership Goals
          </h3>
          
          <FormField
            control={form.control}
            name="partnershipGoals"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">What's your primary goal in partnering with Matterhorn? *</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your goals and how we can help grow your business..."
                    className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
                    {...field}
                    data-testid="textarea-partnership-goals"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Turnstile Captcha */}
        <div className="flex justify-center">
          <FormField
            control={form.control}
            name="turnstileToken"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Turnstile
                    siteKey={turnstileSiteKey}
                    onSuccess={(token: string) => field.onChange(token)}
                    onError={() => {
                      field.onChange("");
                      toast({
                        title: "Captcha error",
                        description: "Please try again.",
                        variant: "destructive",
                      });
                    }}
                    onExpire={() => field.onChange("")}
                    options={{ theme: "dark" }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Honeypot field - hidden from users */}
        <div className="absolute opacity-0 pointer-events-none" aria-hidden="true" style={{ position: 'absolute', left: '-9999px' }}>
          <FormField
            control={form.control}
            name="website"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Website</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Your website" 
                    tabIndex={-1}
                    autoComplete="off"
                    {...field} 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          className="w-full bg-primary hover:bg-primary/90"
          disabled={isSubmitting}
          data-testid="button-submit-application"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </Form>
  );
}
