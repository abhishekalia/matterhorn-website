import { useEffect, useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Shield,
  User,
  Zap,
  MapPin,
  DollarSign,
  Star,
  AlertTriangle,
  BarChart3,
  CheckCircle,
  Phone,
  MessageCircle,
  Users,
  Truck,
  FileCheck,
  Navigation,
  X,
} from "lucide-react";
import { SiAppstore, SiGoogleplay } from "react-icons/si";
import phoneMapImage from "@assets/dark_mode_map_interface_preview_1764699767282.png";
import fleetMapImage from "@assets/dark_mode_map_interface_preview_1764701162560.png";
import pilotCarImage from "@assets/professional_pilot_car_vehicle_1764701392430.png";

export default function RideSharePage() {
  const [showSignup, setShowSignup] = useState(false);
  const [accountType, setAccountType] = useState<"driver" | "carrier">("driver");
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const [experienceConfirmed, setExperienceConfirmed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.classList.add("pilot-theme");
    
    return () => {
      document.body.classList.remove("pilot-theme");
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const operationSteps = [
    {
      icon: User,
      title: "Create Profile",
      description: "Upload license, insurance, and certs.",
    },
    {
      icon: Zap,
      title: "Connect Instantly",
      description: "Carriers post loads. Pilots accept instantly.",
    },
    {
      icon: MapPin,
      title: "Track Real-Time",
      description: "Google Maps integration with full route visibility.",
    },
    {
      icon: DollarSign,
      title: "Get Paid",
      description: "Digital invoicing and instant approval.",
    },
  ];

  const ratingFeatures = [
    {
      icon: Star,
      title: "5-Star Rating System",
      description: "Rate pilots on Communication, Safety Awareness, Professionalism, and Route Knowledge.",
    },
    {
      icon: AlertTriangle,
      title: "Red Flag Monitoring",
      description: "Automated compliance reviews triggered by low ratings or safety incidents.",
    },
    {
      icon: BarChart3,
      title: "Performance Dashboards",
      description: "Monthly scorecards visible to carriers to ensure top-tier service.",
    },
  ];

  const carrierFeatures = [
    "Verified and vetted pilot drivers (Green/Yellow/Red status)",
    "Insurance requirements automatically validated",
    "Real-time route management & tracking",
    "Digital documentation & automated invoicing",
  ];

  return (
    <div className="pilot-theme min-h-screen bg-[#080808] text-white">
      {/* Sign Up Page Overlay */}
      <AnimatePresence>
        {showSignup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#080808] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowSignup(false)}
              className="absolute top-6 right-6 p-2 text-[#99A1AF] hover:text-white transition-colors z-10"
              data-testid="button-close-signup"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="min-h-screen grid lg:grid-cols-2">
              {/* Left Side - Branding */}
              <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0">
                <div className="max-w-md">
                  {/* Logo */}
                  <div className="flex items-center gap-2 mb-12">
                    <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                      <Shield className="w-5 h-5 text-black fill-black" />
                    </div>
                    <span className="text-xl font-semibold tracking-tight">PILOT</span>
                  </div>

                  {/* Headline */}
                  <h1 className="text-4xl lg:text-5xl font-medium leading-tight mb-10">
                    Drive More. Earn More. Get Paid Faster.
                  </h1>

                  {/* Feature List */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#155DFC]" />
                      <span className="text-[#99A1AF]">Instant load matching</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#155DFC]" />
                      <span className="text-[#99A1AF]">Guaranteed payments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-[#155DFC]" />
                      <span className="text-[#99A1AF]">Digital invoicing</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="flex flex-col justify-center px-8 lg:px-16 py-16 lg:py-0 lg:border-l border-white/10">
                <div className="max-w-md w-full mx-auto">
                  <h2 className="text-2xl font-medium mb-2">Create an account</h2>
                  <p className="text-[#99A1AF] mb-8">Get started with Pilot today</p>

                  {/* Account Type Tabs */}
                  <div className="flex gap-2 mb-8">
                    <button
                      onClick={() => setAccountType("driver")}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg border transition-all ${
                        accountType === "driver"
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-[#99A1AF] border-white/20 hover:border-white/40"
                      }`}
                      data-testid="tab-pilot-driver"
                    >
                      <User className="w-4 h-4" />
                      <span className="text-sm font-medium">Pilot Driver</span>
                    </button>
                    <button
                      onClick={() => setAccountType("carrier")}
                      className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-lg border transition-all ${
                        accountType === "carrier"
                          ? "bg-white text-black border-white"
                          : "bg-transparent text-[#99A1AF] border-white/20 hover:border-white/40"
                      }`}
                      data-testid="tab-motor-carrier"
                    >
                      <Truck className="w-4 h-4" />
                      <span className="text-sm font-medium">Motor Carrier</span>
                    </button>
                  </div>

                  {/* Form */}
                  <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowSignup(false); }}>
                    {/* Name Fields */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-sm text-white">First Name</Label>
                        <Input 
                          placeholder="" 
                          className="bg-transparent border-white/20 text-white placeholder:text-[#99A1AF] focus:border-white"
                          data-testid="input-first-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm text-white">Last Name</Label>
                        <Input 
                          placeholder="" 
                          className="bg-transparent border-white/20 text-white placeholder:text-[#99A1AF] focus:border-white"
                          data-testid="input-last-name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label className="text-sm text-white">Email</Label>
                      <Input 
                        type="email" 
                        placeholder="name@example.com" 
                        className="bg-transparent border-white/20 text-white placeholder:text-[#555] focus:border-white"
                        data-testid="input-email"
                      />
                    </div>

                    {/* Password */}
                    <div className="space-y-2">
                      <Label className="text-sm text-white">Password</Label>
                      <Input 
                        type="password" 
                        placeholder="" 
                        className="bg-transparent border-white/20 text-white placeholder:text-[#99A1AF] focus:border-white"
                        data-testid="input-password"
                      />
                    </div>

                    {/* Driver Qualifications - Only show for drivers */}
                    {accountType === "driver" && (
                      <div className="space-y-4">
                        <p className="text-xs uppercase tracking-widest text-[#99A1AF]">Driver Qualifications</p>
                        
                        {/* Vehicle Type */}
                        <div className="space-y-2">
                          <Label className="text-sm text-white">Primary Vehicle Type</Label>
                          <Select>
                            <SelectTrigger className="bg-transparent border-white/20 text-white focus:border-white">
                              <SelectValue placeholder="Select vehicle type" />
                            </SelectTrigger>
                            <SelectContent className="bg-[#1a1a1a] border-white/20">
                              <SelectItem value="pole-car">Pole Car</SelectItem>
                              <SelectItem value="bucket-truck">Bucket Truck</SelectItem>
                              <SelectItem value="height-pole">Height Pole Vehicle</SelectItem>
                              <SelectItem value="escort-vehicle">Standard Escort Vehicle</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Checkboxes */}
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Checkbox 
                              id="age-confirm"
                              checked={ageConfirmed}
                              onCheckedChange={(checked) => setAgeConfirmed(checked as boolean)}
                              className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-black"
                              data-testid="checkbox-age"
                            />
                            <label htmlFor="age-confirm" className="text-sm text-[#99A1AF]">
                              I confirm I am 23 years or older
                            </label>
                          </div>
                          <div className="flex items-center gap-3">
                            <Checkbox 
                              id="experience-confirm"
                              checked={experienceConfirmed}
                              onCheckedChange={(checked) => setExperienceConfirmed(checked as boolean)}
                              className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-black"
                              data-testid="checkbox-experience"
                            />
                            <label htmlFor="experience-confirm" className="text-sm text-[#99A1AF]">
                              I have 2+ years of pilot car experience
                            </label>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button 
                      type="submit"
                      className="w-full bg-white hover:bg-white/90 text-black font-medium py-3"
                      data-testid="button-create-account"
                    >
                      Create Account
                    </Button>

                    {/* Login Link */}
                    <p className="text-center text-sm text-[#99A1AF]">
                      Already have an account?{" "}
                      <button type="button" className="text-white font-medium hover:underline">
                        Log in
                      </button>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#080808]/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" data-testid="link-home-rideshare">
              <div className="flex items-center gap-2 cursor-pointer">
                <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                  <Shield className="w-5 h-5 text-black fill-black" />
                </div>
                <span className="text-xl font-semibold tracking-tight">PILOT</span>
              </div>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("carriers")}
                className="text-sm text-[#99A1AF] hover:text-white transition-colors"
                data-testid="nav-for-carriers"
              >
                For Carriers
              </button>
              <button 
                onClick={() => scrollToSection("drivers")}
                className="text-sm text-[#99A1AF] hover:text-white transition-colors"
                data-testid="nav-for-drivers"
              >
                For Drivers
              </button>
              <button 
                onClick={() => scrollToSection("rating")}
                className="text-sm text-[#99A1AF] hover:text-white transition-colors"
                data-testid="nav-safety"
              >
                Safety
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <button
                className="text-sm text-[#99A1AF] hover:text-white transition-colors hidden md:block"
                data-testid="button-login"
              >
                Log in
              </button>
              <Button 
                onClick={() => setShowSignup(true)}
                className="bg-white hover:bg-white/90 text-black rounded-lg px-5"
                data-testid="button-signup"
              >
                Sign up
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="mb-8">
                <span className="inline-block px-4 py-2 border border-white/20 text-xs uppercase tracking-widest text-white/80">
                  The Future of Pilot Operations
                </span>
              </motion.div>
              
              <motion.h1 
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-medium mb-8 leading-[1.1] tracking-tight"
               
                data-testid="heading-hero-rideshare"
              >
                Move Oversize Loads{" "}
                <span className="text-[#99A1AF]">With</span>{" "}
                Confidence.
              </motion.h1>

              <motion.p 
                variants={fadeInUp}
                className="text-lg md:text-xl text-[#99A1AF] mb-10 leading-relaxed max-w-lg"
                data-testid="description-hero-rideshare"
              >
                Connect instantly with certified Pilot Car Drivers. Real-time tracking, instant booking, and seamless compliance documentation.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-10">
                <Button 
                  onClick={() => { setAccountType("carrier"); setShowSignup(true); }}
                  className="bg-white hover:bg-white/90 text-black font-medium rounded-full px-8 py-3 text-base border-0"
                  data-testid="button-post-load"
                >
                  Post a Load
                </Button>
                <Button 
                  onClick={() => { setAccountType("driver"); setShowSignup(true); }}
                  variant="outline"
                  className="bg-transparent border border-white/40 hover:bg-white/10 text-white font-medium rounded-full px-8 py-3 text-base"
                  data-testid="button-become-driver"
                >
                  Become a Driver
                </Button>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-3">
                <div className="flex -space-x-1">
                  <div className="w-3 h-3 rounded-full bg-[#155DFC]" />
                  <div className="w-3 h-3 rounded-full bg-[#155DFC]/60" />
                  <div className="w-3 h-3 rounded-full bg-[#155DFC]/30" />
                </div>
                <span className="text-sm text-[#99A1AF]">Trusted by 500+ Motor Carriers</span>
              </motion.div>
            </motion.div>

            {/* Phone Mockup with Interactive Hover */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative hidden lg:block"
            >
              <div className="relative group cursor-pointer" style={{ perspective: '1000px' }}>
                {/* Glow effect on hover */}
                <div className="absolute -inset-8 bg-gradient-to-r from-[#155DFC]/30 via-[#155DFC]/20 to-transparent blur-3xl opacity-30 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute -inset-16 bg-[#155DFC]/15 blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Phone with tilt effect */}
                <motion.div 
                  className="relative transition-all duration-500 ease-out"
                  whileHover={{ 
                    rotateY: 6, 
                    rotateX: -3, 
                    scale: 1.03,
                    transition: { duration: 0.4 }
                  }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Phone Frame */}
                  <div className="relative w-[300px] transition-shadow duration-500 group-hover:drop-shadow-[0_35px_60px_rgba(21,93,252,0.4)]">
                    {/* Phone outer shell */}
                    <div className="relative bg-gradient-to-b from-[#2a2a2a] via-[#1f1f1f] to-[#1a1a1a] rounded-[3rem] p-[3px] shadow-[0_0_0_1px_rgba(255,255,255,0.1),0_25px_50px_-12px_rgba(0,0,0,0.8)]">
                      {/* Phone inner bezel */}
                      <div className="relative bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] rounded-[2.8rem] p-2">
                        {/* Side buttons - Volume */}
                        <div className="absolute -left-[3px] top-28 w-[3px] h-8 bg-gradient-to-r from-[#2a2a2a] to-[#1f1f1f] rounded-l-sm" />
                        <div className="absolute -left-[3px] top-40 w-[3px] h-8 bg-gradient-to-r from-[#2a2a2a] to-[#1f1f1f] rounded-l-sm" />
                        {/* Side button - Power */}
                        <div className="absolute -right-[3px] top-32 w-[3px] h-12 bg-gradient-to-l from-[#2a2a2a] to-[#1f1f1f] rounded-r-sm" />
                        
                        {/* Screen container */}
                        <div className="relative bg-black rounded-[2.4rem] overflow-hidden">
                          {/* Dynamic Island / Notch */}
                          <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-full z-20 flex items-center justify-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#1a1a1a] ring-1 ring-[#333]" />
                            <div className="w-3 h-3 rounded-full bg-[#0a0a0a] ring-1 ring-[#222]" />
                          </div>
                          
                          {/* Screen content - Map Image */}
                          <div className="relative aspect-[9/19.5]">
                            <img 
                              src={phoneMapImage} 
                              alt="Pilot App Interface showing live load tracking" 
                              className="absolute inset-0 w-full h-full object-cover object-center"
                              data-testid="img-phone-mockup"
                            />
                            
                            {/* Load info card overlay */}
                            <div className="absolute bottom-6 left-4 right-4 bg-[#1a1a1a]/95 backdrop-blur-sm rounded-2xl p-4 border border-white/10">
                              <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 rounded-full bg-[#155DFC] flex items-center justify-center">
                                  <Truck className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                  <p className="text-white font-semibold text-sm">Load #4829</p>
                                  <p className="text-[#99A1AF] text-xs">Approaching Drop-off</p>
                                </div>
                              </div>
                              <div className="h-1 bg-white/10 rounded-full mb-3">
                                <div className="h-full w-3/4 bg-[#155DFC] rounded-full" />
                              </div>
                              <div className="flex justify-between text-xs text-[#99A1AF]">
                                <span>Houston, TX</span>
                                <span>12 min ETA</span>
                              </div>
                            </div>
                          </div>
                          
                          {/* Home indicator */}
                          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-28 h-1 bg-white/30 rounded-full" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Streamlined Operations Section */}
      <section id="operations" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.p variants={fadeInUp} className="text-[#155DFC] text-sm uppercase tracking-widest mb-4">
              Streamlined Operations
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-medium mb-6"
             
            >
              The fragmented pilot car industry,<br />
              <span className="text-[#99A1AF]">finally unified.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#99A1AF]">
              One platform for carriers, pilots, and admins.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {operationSteps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-6">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-medium mb-3">{step.title}</h3>
                <p className="text-[#99A1AF] text-sm">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quality Assurance / Rating Section */}
      <section id="rating" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Rating Card Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#155DFC] to-[#155DFC]/70 flex items-center justify-center">
                    <Truck className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-[#99A1AF]">Driver Rating</p>
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className={`w-5 h-5 ${star <= 4 ? 'text-yellow-400 fill-yellow-400' : 'text-yellow-400'}`} />
                      ))}
                      <span className="ml-2 font-bold">4.9</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-5">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#99A1AF]">Communication</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-[#155DFC] to-[#155DFC]/70" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#99A1AF]">Safety Awareness</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-full w-[95%] rounded-full bg-gradient-to-r from-green-400 to-emerald-400" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-[#99A1AF]">Professionalism</span>
                      <span className="text-sm font-medium">100%</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-full w-full rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rating Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-[#155DFC] text-sm uppercase tracking-widest mb-4">
                Quality Assurance
              </motion.p>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-medium mb-6"
               
              >
                Trust, <span className="text-[#99A1AF]">Verified.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-[#99A1AF] mb-10">
                We've built a comprehensive rating system to ensure professional conduct and safety on every mile.
              </motion.p>

              <motion.div variants={staggerContainer} className="space-y-8">
                {ratingFeatures.map((feature, index) => (
                  <motion.div key={index} variants={fadeInUp} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-[#155DFC]" />
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">{feature.title}</h4>
                      <p className="text-[#99A1AF] text-sm">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* For Motor Carriers Section */}
      <section id="carriers" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-[#155DFC] text-sm uppercase tracking-widest mb-4">
                For Motor Carriers
              </motion.p>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-medium mb-8"
               
              >
                Built for Safety <span className="text-[#99A1AF]">& Speed.</span>
              </motion.h2>

              <motion.ul variants={staggerContainer} className="space-y-5 mb-10">
                {carrierFeatures.map((feature, index) => (
                  <motion.li key={index} variants={fadeInUp} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#155DFC] flex-shrink-0 mt-0.5" />
                    <span className="text-[#99A1AF]">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={fadeInUp}>
                <Button 
                  onClick={() => { setAccountType("carrier"); setShowSignup(true); }}
                  className="bg-[#155DFC] hover:bg-[#155DFC]/90 text-white rounded-full px-8 py-3 text-base"
                  data-testid="button-post-first-load"
                >
                  Post Your First Load
                </Button>
              </motion.div>
            </motion.div>

            {/* Fleet Dashboard Preview */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#111] rounded-2xl overflow-hidden border border-white/10">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-white/10">
                  <h4 className="font-medium">Live Fleet View</h4>
                  <span className="flex items-center gap-2 text-xs text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Live
                  </span>
                </div>

                {/* Map Image */}
                <div className="relative">
                  <img 
                    src={fleetMapImage} 
                    alt="Live fleet tracking map showing active routes" 
                    className="w-full h-auto"
                    data-testid="img-fleet-map"
                  />
                  
                  {/* Stats Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 bg-[#0a0a0a]/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <p className="text-2xl font-bold text-[#155DFC]">24</p>
                        <p className="text-xs text-[#99A1AF]">Active Loads</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold text-green-400">98%</p>
                        <p className="text-xs text-[#99A1AF]">On-Time</p>
                      </div>
                      <div className="text-center">
                        <p className="text-2xl font-bold">$0</p>
                        <p className="text-xs text-[#99A1AF]">Pending</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fleet Management Section */}
      <section id="fleet" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.p variants={fadeInUp} className="text-[#155DFC] text-sm uppercase tracking-widest mb-4">
              Unified Fleet Control
            </motion.p>
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-medium mb-6"
             
            >
              Manage Your <span className="text-[#99A1AF]">Entire Fleet</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#99A1AF] max-w-3xl mx-auto">
              Whether you're a Motor Carrier managing loads or a Pilot Operator managing vehicles, our dashboard puts you in control.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-br from-[#155DFC]/20 to-[#155DFC]/5 p-8 rounded-2xl border border-[#155DFC]/20 h-full">
                <div className="w-14 h-14 rounded-xl bg-[#155DFC]/30 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-[#155DFC]" />
                </div>
                <h3 className="text-2xl font-medium mb-4">For Carriers</h3>
                <p className="text-[#99A1AF]">
                  Manage multiple active loads, track total spend, and auto-assign pilots based on proximity.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-500/5 p-8 rounded-2xl border border-purple-500/20 h-full">
                <div className="w-14 h-14 rounded-xl bg-purple-500/30 flex items-center justify-center mb-6">
                  <Truck className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-2xl font-medium mb-4">For Pilot Fleets</h3>
                <p className="text-[#99A1AF]">
                  Dispatch your drivers, track vehicle locations, and manage consolidated invoicing for your entire team.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* For Pilot Drivers Section */}
      <section id="drivers" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Driver Profile Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-[#111] rounded-2xl border border-white/10 overflow-hidden max-w-md group cursor-pointer transition-all duration-500 hover:shadow-[0_0_60px_rgba(255,165,0,0.3)] hover:border-orange-500/30">
                {/* Pilot Car Image */}
                <div className="relative overflow-hidden">
                  {/* Glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                  <img 
                    src={pilotCarImage} 
                    alt="Professional pilot car with oversize load sign" 
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    data-testid="img-pilot-car"
                  />
                </div>
                
                {/* Driver Profile Info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#155DFC] to-[#155DFC]/70 flex items-center justify-center">
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">Michael R.</p>
                      <p className="text-sm text-[#99A1AF]">Certified Pole Car Operator</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <span className="font-bold">4.9</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0a0a0a] rounded-lg p-4 text-center">
                      <Zap className="w-5 h-5 text-[#155DFC] mx-auto mb-2" />
                      <p className="text-sm font-medium">Instant Booking</p>
                      <p className="text-xs text-[#99A1AF]">No more phone tag.</p>
                    </div>
                    <div className="bg-[#0a0a0a] rounded-lg p-4 text-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mx-auto mb-2" />
                      <p className="text-sm font-medium">Verified Status</p>
                      <p className="text-xs text-[#99A1AF]">Showcase your certs.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Driver Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="order-1 lg:order-2"
            >
              <motion.p variants={fadeInUp} className="text-[#155DFC] text-sm uppercase tracking-widest mb-4">
                For Pilot Drivers
              </motion.p>
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-medium mb-6"
               
              >
                More Loads.<br />
                <span className="text-[#99A1AF]">Guaranteed Payment.</span>
              </motion.h2>
              <motion.p variants={fadeInUp} className="text-lg text-[#99A1AF] mb-10">
                Stop chasing invoices and waiting for calls. Set your availability and get matched with loads instantly.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Button 
                  onClick={() => { setAccountType("driver"); setShowSignup(true); }}
                  className="bg-[#155DFC] hover:bg-[#155DFC]/90 text-white rounded-full px-8 py-3 text-base"
                  data-testid="button-start-driving"
                >
                  Start Driving
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section id="getting-started" className="py-32 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-20"
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-medium mb-6"
             
            >
              Start Hauling in <span className="text-[#99A1AF]">Minutes.</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#99A1AF] max-w-3xl mx-auto">
              Download the Pilot app to access real-time loads, tracking, and automated payments.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-12 mb-20"
          >
            {[
              { step: "1", title: "Create Profile", description: "Upload license & insurance.", icon: User },
              { step: "2", title: "Get Verified", description: "We check certs in 24h.", icon: FileCheck },
              { step: "3", title: "Go Drive", description: "Accept loads instantly.", icon: Truck },
            ].map((item, index) => (
              <motion.div key={index} variants={fadeInUp} className="text-center">
                <div className="w-16 h-16 rounded-full bg-[#155DFC] flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold">{item.step}</span>
                </div>
                <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                <p className="text-[#99A1AF]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* App Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="bg-white text-black px-6 py-4 rounded-xl cursor-pointer hover:bg-white/90 transition-colors flex items-center gap-3">
              <SiAppstore className="w-8 h-8" />
              <div>
                <p className="text-xs text-gray-600">Download on the</p>
                <p className="font-bold">App Store</p>
              </div>
            </div>
            <div className="bg-white text-black px-6 py-4 rounded-xl cursor-pointer hover:bg-white/90 transition-colors flex items-center gap-3">
              <SiGoogleplay className="w-8 h-8" />
              <div>
                <p className="text-xs text-gray-600">Get it on</p>
                <p className="font-bold">Google Play</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-32 border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-2 border border-white/20 text-xs uppercase tracking-widest text-white/80 mb-6">
              24/7 Support
            </motion.div>
            <motion.h2 
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-medium mb-6"
             
            >
              Need help getting <span className="text-[#99A1AF]">set up?</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-lg text-[#99A1AF] mb-12">
              Our team is ready to help you integrate your fleet or answer compliance questions.
            </motion.p>

            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                onClick={() => setShowSignup(true)}
                className="bg-[#155DFC] hover:bg-[#155DFC]/90 text-white rounded-full px-8 py-3 text-base"
                data-testid="button-contact-sales"
              >
                <Phone className="mr-2 w-5 h-5" />
                Contact Sales
              </Button>
              <Button 
                variant="outline"
                className="bg-transparent border border-white/20 hover:bg-white/10 text-white rounded-full px-8 py-3 text-base"
                data-testid="button-chat-support"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                Chat with Support
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                <Shield className="w-5 h-5 text-black fill-black" />
              </div>
              <span className="text-xl font-semibold tracking-tight">PILOT</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-[#99A1AF]">
              <a href="mailto:support@matterhornprotects.com" className="hover:text-white transition-colors">
                support@matterhornprotects.com
              </a>
              <span>|</span>
              <a href="tel:1-844-600-0611" className="hover:text-white transition-colors">
                1-844-600-0611
              </a>
            </div>

            <p className="text-sm text-[#99A1AF]/60">
              © 2025 Pilot. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
