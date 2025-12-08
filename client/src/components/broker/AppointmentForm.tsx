import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const formSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  isBroker: z.enum(["yes", "no"], {
    required_error: "Please select if you are a broker",
  }),
  phone: z.string().min(1, "Phone number is required"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(1, "Message is required"),
  // Honeypot field - invisible to users, bots will fill it
  website: z.string().optional(),
  // Timestamp when form loaded
  formLoadedAt: z.number().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function AppointmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formLoadedAt] = useState(() => Date.now());
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      isBroker: undefined,
      phone: "",
      email: "",
      message: "",
      website: "",
      formLoadedAt: undefined,
    },
  });

  // Set form loaded timestamp when component mounts
  useEffect(() => {
    form.setValue("formLoadedAt", formLoadedAt);
  }, [formLoadedAt, form]);

  async function onSubmit(data: FormData) {
    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", data);
      setIsSuccess(true);
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
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
          Your message has been sent. We'll be in touch soon.
        </p>
        <Button onClick={() => setIsSuccess(false)} variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">First Name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} data-testid="input-first-name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-white">Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} data-testid="input-last-name" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="isBroker"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Are you a broker?</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="broker-yes" data-testid="radio-broker-yes" className="border-white/30 text-primary" />
                    <label htmlFor="broker-yes" className="cursor-pointer text-white">Yes</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="broker-no" data-testid="radio-broker-no" className="border-white/30 text-primary" />
                    <label htmlFor="broker-no" className="cursor-pointer text-white">No</label>
                  </div>
                </RadioGroup>
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
              <FormLabel className="text-white">Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="(555) 123-4567" {...field} data-testid="input-phone" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Email Address</FormLabel>
              <FormControl>
                <Input type="email" placeholder="john@example.com" {...field} data-testid="input-email" className="bg-white/10 border-white/20 text-white placeholder:text-white/50" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-white">Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your business and how we can help..."
                  className="min-h-[120px] bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  {...field}
                  data-testid="textarea-message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

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
          data-testid="button-submit"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            "Submit Application"
          )}
        </Button>
      </form>
    </Form>
  );
}
