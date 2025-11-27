import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";

interface HeroSectionProps {
  onGetAppointedClick: () => void;
  onExploreProgramsClick: () => void;
}

export function HeroSection({
  onGetAppointedClick,
  onExploreProgramsClick,
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
      videoRef.current.playbackRate = 0.75; // Slow, cinematic motion
    }
  }, []);

  // TODO: Replace with actual Matterhorn video URL from Pexels or Videvo
  // Download a stunning 4K Matterhorn video from:
  // - https://www.pexels.com/search/videos/matterhorn%20mountain/
  // - https://www.videvo.net/stock-video-footage/matterhorn/
  // Save it to client/public/videos/matterhorn.mp4 and uncomment the video section below
  const videoUrl = null; // Replace with: '/videos/matterhorn.mp4' once video is added

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
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />
        </motion.div>
      ) : (
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${heroImage})`,
            y: scrollY * 0.5,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        </motion.div>
      )}

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-16">
        <motion.div
          className="max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <motion.h1
            className="text-5xl md:text-7xl font-serif font-semibold mb-6 leading-tight"
            data-testid="text-hero-headline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            Build and Scale Specialty Programs with Matterhorn Insurance Group.
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl"
            data-testid="text-hero-subhead"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              ease: [0.22, 0.61, 0.36, 1],
            }}
          >
            We partner with brokers to design, launch, and manage specialty
            programs—powered by AI and guided by experienced underwriters.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
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
              onClick={onGetAppointedClick}
              className="text-lg px-8"
              data-testid="button-get-appointed-hero"
            >
              Get Appointed
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onExploreProgramsClick}
              className="text-lg px-8 bg-background/20 backdrop-blur-sm border-primary/20"
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
