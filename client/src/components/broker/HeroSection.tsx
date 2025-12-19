import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";

interface HeroSectionProps {
  onExploreProgramsClick: () => void;
  onGetAppointedClick?: () => void;
}

export function HeroSection({
  onExploreProgramsClick,
  onGetAppointedClick,
}: HeroSectionProps) {
  const [scrollY, setScrollY] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  const videoUrl = null;

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      data-testid="section-hero"
    >
      {videoUrl ? (
        <motion.div className="absolute inset-0" style={{ y: scrollY * 0.3 }}>
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            poster={heroImage}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 via-[#1B2A41]/85 to-[#0A1628]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </motion.div>
      ) : (
        <motion.div
          className="absolute inset-0 bg-cover bg-center scale-105 animate-subtle-zoom"
          style={{
            backgroundImage: `url(${heroImage})`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#0A1628]/90 via-[#1B2A41]/85 to-[#0A1628]/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
        </motion.div>
      )}

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slower" />
      </div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <motion.div
          className="max-w-4xl text-center mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            data-testid="text-hero-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            Build and Scale{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary animate-gradient">
              Specialty Programs
            </span>{" "}
            with Matterhorn
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-4 max-w-3xl mx-auto font-medium"
            data-testid="text-hero-subhead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            AI-Powered Insurance Program Design
          </motion.p>
          <motion.p
            className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed"
            data-testid="text-hero-description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            We partner with brokers to design, launch, and manage specialty
            programs—powered by AI and guided by experienced underwriters.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            <Button
              size="lg"
              className="text-base px-8 py-6 bg-primary hover:bg-primary/90"
              onClick={onGetAppointedClick}
              data-testid="button-get-appointed-hero"
            >
              Get Appointed
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onExploreProgramsClick}
              className="text-base px-8 py-6 bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-explore-programs"
            >
              Explore Programs
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
