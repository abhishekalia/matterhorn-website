import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Mountain } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import johnWarren from "@assets/IMG_27C9BDA84A01-1_1763404670413.jpeg";
import wayneGutridge from "@assets/Image-1 (6)_1763404834391.jpg";
import stephenMueller from "@assets/Image-1 (4)_1763404552938.jpg";
import isaacAllen from "@assets/generated_images/Isaac_Allen_professional_headshot_640e0cbc.png";

const team = [
  {
    name: "John Warren, CLU, ChFs",
    title: "Managing Partner",
    image: johnWarren,
    bio: "John is a veteran revenue and strategy leader with deep expertise in Insurtech, Cyber, Life, Health, and Employee Benefits. He has launched market-changing products, led GTM strategies, and driven growth at AIG, Symetra, Prudential, and others. For the past 7 years, he has consulted for leading Insurtech firms, helping optimize client engagement and reduce acquisition costs.",
    email: "jwarren@matterhornprotects.com"
  },
  {
    name: "Wayne Gutridge",
    title: "Managing Partner",
    image: wayneGutridge,
    bio: "Wayne is a seasoned business development leader specializing in alternative distribution and integrated product strategies. He has held senior roles at AIG/Starr, Zurich NA, and Transamerica, launching profitable A&H programs for organizations like Wells Fargo, AMA, Citigroup, and the U.S. Olympic Committee. Recognized as a Global A&H expert, he has driven workplace, affinity, and financial wellness strategies worldwide.",
    email: "wgutridge@matterhornprotects.com"
  },
  {
    name: "Stephen Mueller",
    title: "Managing Partner",
    image: stephenMueller,
    bio: "Stephen is an insurance industry leader with experience across Life, A&H, and P&C, holding senior roles at Unum, Zurich, and Intact. Formerly Zurich's Global Head of Sales in Switzerland, he has built high-growth businesses, including two successful A&H ventures. A published author on benefit and risk trends, he also founded Ridge Youth Sports and serves on the Board of the Boomer Esiason Foundation.",
    email: "smueller@matterhornprotects.com"
  },
  {
    name: "Isaac Allen",
    title: "Managing Partner",
    image: isaacAllen,
    bio: "Isaac brings extensive expertise in insurance technology and operations, specializing in program development and broker partnerships. With a proven track record in building scalable insurance solutions, he focuses on leveraging AI and automation to streamline underwriting and enhance broker efficiency. His leadership ensures seamless delivery of innovative programs across multiple specialty markets.",
    email: "iallen@matterhornprotects.com"
  },
];

export default function TeamSection() {
  const { isVisible, elementRef } = useScrollAnimation();

  return (
    <section className="py-24 bg-background" id="team" ref={elementRef} data-testid="section-team">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Mountain className="w-5 h-5 text-primary" />
            <Badge className="bg-primary/10 text-primary border-primary/20">
              Our Team
            </Badge>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4" data-testid="heading-team">
            Meet Our Managing Team
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl mx-auto" data-testid="description-team">
            Over 100+ combined years of insurance experience, looking forward to working with you
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <Card 
              key={index} 
              className={`p-6 hover-elevate transition-all duration-700 flex flex-col ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              data-testid={`team-card-${index}`}
            >
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-border"
                  style={member.name === "Wayne Gutridge" ? { objectPosition: 'center 30%' } : undefined}
                  data-testid={`team-image-${index}`}
                />
              </div>
              <h3 className="text-xl font-bold text-foreground text-center mb-1" data-testid={`team-name-${index}`}>
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-primary text-center mb-4" data-testid={`team-title-${index}`}>
                {member.title}
              </p>
              <p className="text-sm text-foreground/70 leading-relaxed mb-6 flex-grow" data-testid={`team-bio-${index}`}>
                {member.bio}
              </p>
              <a
                href={`mailto:${member.email}`}
                className="flex items-center justify-center gap-2 text-sm font-medium text-primary hover:underline"
                data-testid={`team-email-${index}`}
              >
                <Mail className="w-4 h-4" />
                Contact
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
