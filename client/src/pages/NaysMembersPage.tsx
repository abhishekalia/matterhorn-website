import { Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import matterhornLogo from "@assets/logo.png";
import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";

function NaysLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-baseline">
        <span className="text-5xl font-black tracking-tight">
          <span className="text-red-600">N</span>
          <span className="text-blue-800">A</span>
          <span className="text-red-600">Y</span>
          <span className="text-blue-800">S</span>
        </span>
      </div>
      <div className="text-xs font-bold text-blue-900 tracking-wide mt-1">
        National Alliance
        <br />
        for Youth Sports
      </div>
    </div>
  );
}

export default function NaysMembersPage() {
  const youtubeVideoId = "IBqpHEtemjI";
  const requestCertificateLink = "https://wkf.ms/3LYcy8w";
  const supportTeamLink = "https://forms.monday.com/forms/a8cd341fc4c812d102e2436af4678965?r=use1";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Mountain Background */}
      <section 
        className="relative min-h-[70vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.3), rgba(255,255,255,0.1)), url(${matterhornHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left side - Logo and Phone */}
            <div className="flex flex-col items-start gap-6">
              <img 
                src={matterhornLogo} 
                alt="Matterhorn Insurance Group" 
                className="h-24 object-contain"
                data-testid="img-matterhorn-logo"
              />
              <a 
                href="tel:1-844-600-0611" 
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-600 rounded-full text-gray-700 hover:bg-white/10 transition-colors"
                data-testid="link-phone"
              >
                <Phone className="w-4 h-4" />
                1-844-600-0611
              </a>
            </div>

            {/* Right side - Title */}
            <div className="text-right">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-600">
                NAYS Sports
                <br />
                Protection Program
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                NAYS + MTRHRN, Protecting Together
              </h2>
              <p className="text-gray-600 mb-4">
                Matterhorn and NAYS have partnered to deliver a best-in-class Sports Protection Program designed specifically for NAYS members. League Directors, Coaches, Participants, and Events, benefit from our curated insurance solutions that offer comprehensive, affordable coverage backed by top-rated markets.
              </p>
              <p className="text-gray-600 mb-4">
                We can provide a quick quote or a custom-built policy, we're here to help you protect your people and your programs.
              </p>
              <p className="text-gray-900 font-medium mb-6">
                Apply through the Quick Quote buttons or connect with our team to build the right solution for your organization.
              </p>
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-3 border-gray-900 text-gray-900 hover:bg-gray-100"
                onClick={() => window.open('https://matterhornprotects.com/youth-sports', '_blank')}
                data-testid="button-sports-quick-quote"
              >
                Sports Quick Quote
              </Button>
            </div>
            <div className="flex-shrink-0 bg-white p-6 rounded-lg">
              <NaysLogo className="w-64" />
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section 
        className="py-16 text-white"
        style={{
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        }}
      >
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How we help</h2>
          <p className="text-white/80 mb-12 max-w-4xl">
            Built for League Directors, Coaches, and Event Organizers, the NAYS Sports Protection Program offers tailored coverage for the real risks of youth sports—injuries, liability, property, and cancellations. Simple, flexible, and backed by trusted markets, it's protection that fits your season and your team.
          </p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Roles */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">League Directors</h3>
                <p className="text-primary text-sm mb-3">For League Directors: Protect Your Organization from Day One</p>
                <p className="text-white/70 text-sm">
                  As a League Director, you're responsible for more than just the schedule—you're managing the safety and liability of your entire organization. That includes coverage for your participants, coaches, volunteers, facilities, and events. The NAYS Sports Protection Program is built to make that easy.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Coaches</h3>
                <p className="text-primary text-sm mb-3">For Coaches: Stay Focused on the Game, We'll Handle the Coverage</p>
                <p className="text-white/70 text-sm">
                  As a coach, you're guiding players on and off the field—and that comes with responsibility. The NAYS Sports Protection Program helps you stay protected with coverage for participant injury, personal liability, and more. Whether you're volunteering or coaching full-time, having the right insurance in place protects both you and your team.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">Event Organizers</h3>
                <p className="text-primary text-sm mb-3">For Event Organizers: Coverage That Keeps You in Play</p>
                <p className="text-white/70 text-sm">
                  Running tournaments, camps, or special events? You need protection that covers unexpected injuries, cancellations, and liability—without slowing down your planning. The NAYS Sports Protection Program offers tailored event coverage built for the fast-paced world of youth sports.
                </p>
              </div>
            </div>

            {/* Right Column - Video and Quote */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">John Engh, NAYS</h3>
                <p className="text-white/80 mb-4">Executive Director</p>
              </div>
              
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title="NAYS and Matterhorn Partnership"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                  data-testid="video-nays-partnership"
                />
              </div>

              <p className="text-white/70 text-sm italic">
                "We are excited to partner with Matterhorn Insurance Group to bring our members an exclusive opportunity for enhanced protection. Through our educational programs, members and their organizations can now benefit even more from the hard work and extra steps they've taken to ensure their programs are as safe as possible".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Here for You Section */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Here for you</h2>
              <p className="text-white/70 mb-8">
                As a NAYS member, you receive exclusive access to a suite of insurance benefits designed to support and protect your organization. This includes excess liability coverage, instant Certificates of Insurance (COIs) for facilities and partners, and 24/7 access to our Member Services Line for any coverage or insurance-related questions. You'll also gain full access to the NAYS Sports Protection Program, offering tailored coverage for leagues, coaches, events, and participants—all backed by trusted A-rated carriers and supported by our expert team.
              </p>

              <h3 className="text-xl font-bold mb-4">Membership Benefits</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  Instant COIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  24/7 Member Services Line
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  Access to Exclusive National Insurance Program
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  Excess Liability Coverage
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-white rounded-full" />
                  Risk Management Resource
                </li>
              </ul>
            </div>

            {/* Right Column - Resources */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="bg-white p-4 rounded-lg mb-4">
                <NaysLogo className="w-48" />
              </div>

              <h3 className="text-xl font-bold">Resources</h3>
              
              <div className="w-full max-w-md space-y-3">
                <a 
                  href={requestCertificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  data-testid="link-request-coi"
                >
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full py-3 bg-white text-gray-900 hover:bg-gray-100 border-0"
                  >
                    Request COI Certificate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                
                <a 
                  href="#"
                  className="block"
                  data-testid="link-member-benefits"
                >
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full py-3 bg-white text-gray-900 hover:bg-gray-100 border-0"
                  >
                    Access Member Benefits Document
                  </Button>
                </a>
                
                <a 
                  href={supportTeamLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  data-testid="link-support-team"
                >
                  <Button 
                    variant="outline" 
                    className="w-full rounded-full py-3 bg-white text-gray-900 hover:bg-gray-100 border-0"
                  >
                    Connect with MTRHRN Support Team
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-black border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Matterhorn Insurance Group. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
