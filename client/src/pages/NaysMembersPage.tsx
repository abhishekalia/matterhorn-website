import { Phone, ExternalLink, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import matterhornHero from "@assets/generated_images/Matterhorn_mountains_hero_background_315f6fa4.png";
import naysLogoImage from "@assets/images_1769203361692.png";

function MatterhornLogo({ className = "", dark = false }: { className?: string; dark?: boolean }) {
  const textColor = dark ? "text-white" : "text-gray-900";
  const subtextColor = dark ? "text-white/80" : "text-gray-600";
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Mountain className={`w-12 h-12 ${textColor}`} />
      <div>
        <div className={`text-xl font-bold tracking-wide ${textColor}`}>MATTERHORN</div>
        <div className={`text-xs tracking-widest ${subtextColor}`}>INSURANCE GROUP</div>
        <div className={`text-[8px] tracking-wider ${subtextColor}`}>OUR VIEW OF THE MARKET IS FROM THE TOP</div>
      </div>
    </div>
  );
}

function NaysLogo({ className = "" }: { className?: string }) {
  return (
    <img 
      src={naysLogoImage} 
      alt="NAYS - National Alliance for Youth Sports" 
      className={`object-contain ${className}`}
    />
  );
}

function StadiumIcon() {
  return (
    <svg className="w-12 h-12 text-white/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M3 21h18M4 21V10a1 1 0 011-1h14a1 1 0 011 1v11M8 9V6a1 1 0 011-1h6a1 1 0 011 1v3M6 13h12M6 17h12" />
    </svg>
  );
}

export default function NaysMembersPage() {
  const youtubeVideoId = "IBqpHEtemjI";
  const requestCertificateLink = "https://wkf.ms/3LYcy8w";
  const supportTeamLink = "https://forms.monday.com/forms/a8cd341fc4c812d102e2436af4678965?r=use1";
  const quickQuoteLink = "https://forms.monday.com/forms/5b2ccbcf2ba683b39e74fbb15d649258?r=use1";
  const memberBenefitsLink = "/NAYS_Membership_Benefits_2025.pdf";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section with Mountain Background */}
      <section 
        className="relative min-h-[80vh] flex items-center overflow-hidden"
        style={{
          backgroundImage: `url(${matterhornHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
        }}
      >
        {/* Dark gradient overlay for professional look */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/70 to-transparent" />
        
        <div className="container mx-auto px-6 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            {/* Left side - Logo and phone */}
            <div className="flex flex-col items-start gap-8">
              <MatterhornLogo dark={true} data-testid="img-matterhorn-logo" />
              <a 
                href="tel:1-844-600-0611" 
                className="inline-flex items-center gap-3 px-6 py-3 bg-slate-800/80 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-slate-700/80 transition-all shadow-lg"
                data-testid="link-phone"
              >
                <Phone className="w-5 h-5" />
                1-844-600-0611
              </a>
            </div>
            
            {/* Right side - Main title */}
            <div className="text-left lg:text-right max-w-xl">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extralight text-white tracking-tight leading-tight">
                NAYS Sports
                <br />
                <span className="font-light">Protection Program</span>
              </h1>
              <div className="mt-6 h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500 lg:ml-auto" />
            </div>
          </div>
        </div>
        
        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Partnership Section - NAYS + MTRHRN */}
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
                onClick={() => window.open(quickQuoteLink, '_blank')}
                data-testid="button-sports-quick-quote"
              >
                Sports Quick Quote
              </Button>
            </div>
            <div className="flex-shrink-0 bg-white p-6 rounded-lg shadow-sm border">
              <NaysLogo className="w-48 h-auto" />
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
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Here for you</h2>
              <p className="text-white/70 mb-8">
                As a NAYS member, you receive exclusive access to a suite of insurance benefits designed to support and protect your organization. This includes excess liability coverage, instant Certificates of Insurance (COIs) for facilities and partners, and 24/7 access to our Member Services Line for any coverage or insurance-related questions. You'll also gain full access to the NAYS Sports Protection Program, offering tailored coverage for leagues, coaches, events, and participants—all backed by trusted A-rated carriers and supported by our expert team.
              </p>
              <h3 className="text-xl font-bold mb-4">Membership Benefits</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full" />Instant COIs</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full" />24/7 Member Services Line</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full" />Access to Exclusive National Insurance Program</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full" />Excess Liability Coverage</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white rounded-full" />Risk Management Resource</li>
              </ul>
            </div>
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="bg-white p-4 rounded-lg mb-4">
                <NaysLogo className="w-48 h-auto" />
              </div>
              <h3 className="text-xl font-bold">Resources</h3>
              <div className="w-full max-w-md space-y-3">
                <a href={requestCertificateLink} target="_blank" rel="noopener noreferrer" className="block" data-testid="link-request-coi">
                  <Button variant="outline" className="w-full rounded-full py-3 bg-white text-gray-900 hover:bg-gray-100 border-0">
                    Request COI Certificate
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href={memberBenefitsLink} target="_blank" rel="noopener noreferrer" className="block" data-testid="link-member-benefits">
                  <Button variant="outline" className="w-full rounded-full py-3 bg-white text-gray-900 hover:bg-gray-100 border-0">
                    Access Member Benefits Document
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
                <a href={supportTeamLink} target="_blank" rel="noopener noreferrer" className="block" data-testid="link-support-team">
                  <Button variant="outline" className="w-full rounded-full py-3 bg-white text-gray-900 hover:bg-gray-100 border-0">
                    Connect with MTRHRN Support Team
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coverage Section */}
      <section className="py-16 bg-[#0a0a0f] text-white">
        <div className="container mx-auto px-6">
          <div className="flex items-start gap-6 mb-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-2">Coverage</h2>
              <StadiumIcon />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white/90 mb-3">Full Access for NAYS Members</h3>
              <p className="text-white/70 mb-2">
                As a NAYS member, you get access to our full product portfolio—backed by deep market relationships and experienced underwriters who know youth sports. Start your quote by uploading your current declaration pages and loss runs. Our system will handle the rest, matching you with the right coverage quickly and efficiently.
              </p>
              <p className="text-white/70 font-medium">Less friction. Better coverage. Best Value.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            <div>
              <h4 className="text-lg font-bold mb-4">Segments</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Pro Sports</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Amateur Sports</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Youth Sports</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Collegiate Sports</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />E-sports</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Adventure Sports</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Motorsports</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Covered</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Players/Participants/Racers</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Professionals</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Spectators</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Coaches</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Trainers</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Volunteers</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Service Teams</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Pit Crew</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Search & Rescue Persons</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Product Suite</h4>
              <h5 className="font-semibold text-white/90 mb-2">General Liability</h5>
              <ul className="space-y-1 text-white/70 text-sm mb-4">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Participant/Spectator Liability</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Owner's and Sponsor's Liability</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Medical Trainers Liability</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Emergency Medical Services Liability</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Abuse and Molestation</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Liquor Liability</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Crisis Protection Coverage Extension</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white/90 mb-2">Participant Accident</h5>
              <ul className="space-y-1 text-white/70 text-sm mb-4">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Accident Medical</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Accidental Death & Dismemberment</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Accident Disability</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Travel Accident</li>
              </ul>
              <h5 className="font-semibold text-white/90 mb-2">Property</h5>
              <ul className="space-y-1 text-white/70 text-sm mb-4">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Buildings and Business Personal Property</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Business Income and Extra Expense</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Crime</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Inland Marine</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Equipment & Gear Loss/Breakdown</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold text-white/90 mb-2">Contingency</h5>
              <ul className="space-y-1 text-white/70 text-sm mb-4">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Registration Refund</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Event Cancellation and Non-Appearance</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Prize Indemnity</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Hole in One</li>
              </ul>
              <h5 className="font-semibold text-white/90 mb-2">Additional</h5>
              <ul className="space-y-1 text-white/70 text-sm">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Participant/Spectator Liability</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Owner's and Sponsor's Liability</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Medical Trainers Liability</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full mt-1.5 flex-shrink-0" />Emergency Medical Services Liability</li>
              </ul>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-bold mb-4">Organizations</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Teams</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Leagues/Associations</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Governing Bodies</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Events</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Sponsors</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Promoters</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Venues/Facilities</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Clubs</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Special Events</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Camps/Academies</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Operations</h4>
              <ul className="space-y-2 text-white/70 text-sm">
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Practices</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Tryouts</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Clinics</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Games and Playoffs</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Tournaments</li>
                <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-white/60 rounded-full" />Races</li>
              </ul>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-col items-center gap-4">
                <Button 
                  variant="outline" 
                  className="w-full max-w-md rounded-full py-3 bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => window.open(quickQuoteLink, '_blank')}
                  data-testid="button-quick-quote-coverage"
                >
                  Quick Quote
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full max-w-md rounded-full py-3 bg-white/10 border-white/30 text-white hover:bg-white/20"
                  onClick={() => window.open(supportTeamLink, '_blank')}
                  data-testid="button-connect-mtrhrn-coverage"
                >
                  Connect with MTRHRN
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* League Presidents & Directors Section */}
      <section 
        className="py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-sm text-gray-500 mb-2">
            Sports Program<br />
            MTRHRN Agent<br />
            Brianna Lavin<br />
            <a href="mailto:support@matterhornprotects.com" className="text-primary hover:underline">support@matterhornprotects.com</a>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-8">
            League Presidents &<br />Directors
          </h2>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-4">
            At Matterhorn Insurance Group, we've partnered with NAYS to deliver a national insurance program built specifically for league directors and youth sports organizations. Designed with NAYS members in mind, our program offers comprehensive, competitively priced coverage that protects every part of your organization.
          </p>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
            From everyday operations to game-day risks, we help safeguard what matters most—your coaches, volunteers, participants, events, and facilities.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Program Highlights</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>General Liability (GL)</strong> - Broad protection tailored for sports operations, including participant liability, abuse & molestation, and spectator injury</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Accident Medical Expense (AME)</strong> - Coverage for players, coaches, and volunteers with industry-leading limits and pricing</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Event Coverage</strong> - Protection against weather, cancellations, non-appearance, and other key event-day disruptions</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Property Coverage</strong> - Insures fields, gear, equipment, storage units, and indoor facilities</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Directors & Officers (D&O) / Errors & Omissions (E&O)</strong> - Covers board members, volunteers, and administrators from legal exposures tied to organizational decisions</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Access</h3>
              <p className="text-gray-600 text-sm mb-4">
                All of our programs are built on A-rated paper through trusted national insurance markets. We maintain broad market access, allowing us to bring the most competitive terms to the table — even for complex risks.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Our underwriting team understands the unique exposures in youth sports and recreational organizations. We use that expertise to:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />Structure coverage that aligns with real-world risk</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />Secure top-tier pricing by knowing where and how to place the business</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />Avoid unnecessary gaps, exclusions, or generic policies that don't fit your operation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full rounded-full py-3 border-gray-900 text-gray-900 hover:bg-gray-100"
                  onClick={() => window.open(quickQuoteLink, '_blank')}
                  data-testid="button-apply-now-directors"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full py-3 border-gray-900 text-gray-900 hover:bg-gray-100"
                  onClick={() => window.open(supportTeamLink, '_blank')}
                  data-testid="button-connect-directors"
                >
                  Connect with Matterhorn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Managers, Coaches, Trainers Section */}
      <section 
        className="py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-sm text-gray-500 mb-2">
            Sports Program<br />
            MTRHRN Agent<br />
            Brianna Lavin<br />
            <a href="mailto:support@matterhornprotects.com" className="text-primary hover:underline">support@matterhornprotects.com</a>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-8">
            Managers, Coaches,<br />Trainers
          </h2>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-4">
            At Matterhorn, we know that NAYS coaches, managers, and trainers are the foundation of every successful team. That's why we've partnered with NAYS to build a national insurance program tailored specifically for those who lead, support, and care for young athletes at every level.
          </p>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
            This program delivers comprehensive protection, competitive pricing, and simple digital tools that make it easy for NAYS organizations to insure their staff—providing confidence and peace of mind to the people who keep the game going.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Program Highlights</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>General Liability (GL)</strong> - Covers injuries, incidents, and legal exposures while coaching or training</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Accident Medical Expense (AME)</strong> - Coverage for coaches, managers, and trainers if injured during sanctioned activities</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Directors & Officers (D&O) / Errors & Omissions (E&O)</strong> - Protection for administrative decisions and leadership roles</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Registration Refund Protection</strong> - Optional coverage to protect team registrations, including 'any reason' refunds and built-in AME for staff and participants</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Event Coverage</strong> - Available for tournaments, clinics, and training sessions run by individual staff or teams</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Access</h3>
              <p className="text-gray-600 text-sm mb-4">
                All of our coverage for managers, coaches, and trainers is built on A-rated paper from trusted national insurance carriers. With broad market access and deep experience in youth sports risk, we deliver specialized protection at the most competitive terms available — even for individuals or programs with unique needs.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Our underwriting team understands the real-world exposures these roles face on and off the field. We use that expertise to:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />Design coverage that reflects the day-to-day risks of coaching, managing, and training</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />Deliver top-tier pricing by placing business strategically across our carrier network</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />Eliminate gaps, limitations, and generic policies that often miss the mark for sports staff</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                The result: reliable, purpose-built protection for the people who make youth sports possible.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full rounded-full py-3 border-gray-900 text-gray-900 hover:bg-gray-100"
                  onClick={() => window.open(quickQuoteLink, '_blank')}
                  data-testid="button-apply-now-coaches"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full py-3 border-gray-900 text-gray-900 hover:bg-gray-100"
                  onClick={() => window.open(supportTeamLink, '_blank')}
                  data-testid="button-connect-coaches"
                >
                  Connect with Matterhorn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Coverage Section */}
      <section 
        className="py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.85), rgba(255,255,255,0.85)), url('https://images.unsplash.com/photo-1535131749006-b7f58c99034b?w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6">
          <div className="text-sm text-gray-500 mb-2 text-right">
            <a href="mailto:support@matterhornprotects.com" className="text-primary hover:underline">support@matterhornprotects.com</a>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-center text-gray-900 mb-8">
            Event Coverage
          </h2>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-4">
            Our event insurance program gives organizers peace of mind by covering the unexpected—cancellations, weather disruptions, injuries, and more.
          </p>
          <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12">
            We offer competitive pricing and flexible delivery options, whether you need coverage embedded within registration platforms or delivered via direct payment links to organizers and hosts. From national sports tech partners to local tournament directors, our solution scales to match the size and scope of your event.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Program Highlights</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Best-in-Class Policy Language</strong> - Protects against cancellations, postponements, and disruptions with simplified claims and broader terms than traditional event insurance.</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Optional AME Protection</strong> - Add-on accident medical coverage for participants, with flexible limits to fit your event size and risk profile.</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Embedded at Checkout</strong> - Seamlessly integrates into registration platforms or event portals for a smooth user experience.</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>On-Demand Payment Links</strong> - Easily send coverage options to teams, vendors, or participants post-registration.</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Most Competitive Pricing</strong> - Affordable rates built for high-volume events, with margins that support both organizers and users.</span></li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" /><span><strong>Trusted by Industry Leaders</strong> - The choice for organizations</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Access</h3>
              <p className="text-gray-600 text-sm mb-4">
                All of our Event Coverage programs are backed by A-rated carriers and built on deep expertise in youth sports and event operations. We work with trusted national insurance markets to deliver robust protection, clear policy language, and some of the most competitive pricing in the industry.
              </p>
              <p className="text-gray-600 text-sm mb-4">
                Our underwriting and product development team understands the real-world challenges of running events—and we design coverage that meets them head-on. We:
              </p>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />Create protection that reflects how events are actually planned and executed</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />Structure products for scale, affordability, and ease of delivery</li>
                <li className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-1.5 flex-shrink-0" />Remove the fine print, exclusions, and gaps found in traditional event insurance</li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">
                The result: reliable, flexible, and event-friendly coverage that protects your organization and the people counting on you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Applications</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full rounded-full py-3 border-gray-900 text-gray-900 hover:bg-gray-100"
                  onClick={() => window.open(quickQuoteLink, '_blank')}
                  data-testid="button-apply-now-events"
                >
                  Apply Now
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full py-3 border-gray-900 text-gray-900 hover:bg-gray-100"
                  onClick={() => window.open(supportTeamLink, '_blank')}
                  data-testid="button-connect-events"
                >
                  Connect with Matterhorn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Accounts Section */}
      <section 
        className="py-16"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1920')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-6 text-white">
          <div className="text-sm text-white/70 mb-4">
            MTRHRN Partner<br />
            Wayne Gutridge<br />
            <a href="mailto:support@matterhornprotects.com" className="text-primary hover:underline">support@matterhornprotects.com</a>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-center mb-8">
            Enterprise<br />Accounts
          </h2>
          <p className="text-center text-white/90 max-w-4xl mx-auto mb-12">
            At Matterhorn Insurance Group, we specialize in working with enterprise-level clients who need more than just access to insurance markets — they need a strategic partner. Our team collaborates closely with brokers, risk managers, and organizational leadership to design, underwrite, and deploy custom insurance programs that address unique, high-stakes exposures.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold mb-2">Discovery & Risk Mapping</h3>
                <p className="text-white/70 text-sm">
                  We start with a hands-on discovery process to understand your organization's structure, exposures, and operational goals — then map those risks into a framework for strategic coverage.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Custom Program Design & Carrier Alignment</h3>
                <p className="text-white/70 text-sm">
                  Our underwriting team designs bespoke programs aligned with your unique needs, leveraging our deep carrier relationships to secure the best terms and placements.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Technology Integration & Automation</h3>
                <p className="text-white/70 text-sm">
                  We integrate our solutions with your existing platforms and systems to streamline operations and lift administrative burdens off your team.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Ongoing Program Management & Growth</h3>
                <p className="text-white/70 text-sm">
                  At our core, we are a service organization. Our team stays engaged with ongoing support, data insights, and strategic guidance to ensure your program evolves as you do.
                </p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">Application</h3>
              <div className="space-y-4">
                <Button 
                  variant="outline" 
                  className="w-full rounded-full py-3 bg-white text-gray-900 hover:bg-gray-100 border-0"
                  onClick={() => window.open(quickQuoteLink, '_blank')}
                  data-testid="button-submission-form"
                >
                  Submission Form
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full rounded-full py-3 bg-white text-gray-900 hover:bg-gray-100 border-0"
                  onClick={() => window.open(supportTeamLink, '_blank')}
                  data-testid="button-connect-enterprise"
                >
                  Connect with Matterhorn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* We Are Here to Help Section */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `url(${matterhornHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center 60%',
        }}
      >
        {/* Dark gradient overlay for professional look */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/60" />
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
            {/* Left side - Content */}
            <div className="flex-1 max-w-2xl">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-8">
                We are here to help!
              </h2>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                Whether you're running a league, coaching a team, or organizing events, navigating insurance shouldn't be complicated. Our team is here to make it simple. From selecting the right coverage to issuing COIs or answering questions about your policy, we're just a call or click away.
              </p>
              <p className="text-white/80 text-lg leading-relaxed">
                With 24/7 access to our Member Services Line and a team that understands youth sports inside and out, you'll always have the support you need—whenever you need it.
              </p>
              <div className="mt-6 h-1 w-24 bg-gradient-to-r from-cyan-400 to-blue-500" />
            </div>
            
            {/* Right side - Contact card */}
            <div className="flex flex-col items-center gap-6 bg-slate-800/60 backdrop-blur-md p-10 rounded-2xl border border-white/10">
              <MatterhornLogo dark={true} className="scale-110" />
              <a 
                href="tel:1-844-600-0611" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-700/80 backdrop-blur-sm border border-white/20 rounded-full text-white font-medium hover:bg-slate-600/80 transition-all shadow-lg"
                data-testid="link-phone-help"
              >
                <Phone className="w-5 h-5" />
                1-844-600-0611
              </a>
              <div className="text-center text-white/60 text-sm mt-2">
                <p>Sports Program Partner</p>
                <p className="font-medium text-white/80">Wayne Gutridge</p>
                <a href="mailto:support@matterhornprotects.com" className="text-cyan-400 hover:underline">
                  support@matterhornprotects.com
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
