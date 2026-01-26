import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, MapPin, Laptop, Users, Layers } from "lucide-react";
import transportationImg from "@assets/generated_images/transportation_realistic.jpg";
import sportsImg from "@assets/generated_images/sports_realistic.jpg";
import entertainmentImg from "@assets/generated_images/Videographer_at_race_track_0269301f.png";
import travelImg from "@assets/generated_images/travel_realistic.jpg";

interface Program {
  name: string;
  coverages: string[];
  targetClients: string[];
}

interface ProgramCardProps {
  program: Program;
  sectorKey: string;
  index: number;
}

function ProgramCard({ program, sectorKey, index }: ProgramCardProps) {
  const [isCoveragesOpen, setIsCoveragesOpen] = useState(false);
  const [isTargetClientsOpen, setIsTargetClientsOpen] = useState(false);

  return (
    <Card
      className="p-4 transition-all duration-300 group bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-primary/40"
      data-testid={`card-program-${sectorKey}-${index}`}
    >
      <div className="flex items-start justify-between mb-3">
        <h3
          className="font-semibold text-white group-hover:text-primary transition-colors duration-200"
          data-testid={`text-program-name-${sectorKey}-${index}`}
        >
          {program.name}
        </h3>
        <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-150 transition-all duration-300" />
      </div>

      <div className="space-y-1">
        <Collapsible open={isCoveragesOpen} onOpenChange={setIsCoveragesOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-between text-xs text-white/70 hover:bg-white/10 hover:text-primary transition-colors"
              data-testid={`button-toggle-coverages-${sectorKey}-${index}`}
            >
              <span>Available Coverages ({program.coverages.length})</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isCoveragesOpen ? "rotate-180" : ""}`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 mt-2 mb-1">
            {program.coverages.map((coverage, idx) => (
              <div
                key={idx}
                className="text-xs text-white/60 pl-2 py-1 border-l-2 border-primary/20 hover:border-primary hover:text-white hover:bg-white/5 transition-all cursor-default rounded-r"
                data-testid={`text-coverage-${sectorKey}-${index}-${idx}`}
              >
                • {coverage}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Collapsible open={isTargetClientsOpen} onOpenChange={setIsTargetClientsOpen}>
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className="w-full justify-between text-xs text-white/70 hover:bg-white/10 hover:text-primary transition-colors"
              data-testid={`button-toggle-clients-${sectorKey}-${index}`}
            >
              <span className="flex items-center gap-1.5">
                <Users className="w-3 h-3" />
                Target Clients ({program.targetClients.length})
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${isTargetClientsOpen ? "rotate-180" : ""}`}
              />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-1 mt-2">
            {program.targetClients.map((client, idx) => (
              <div
                key={idx}
                className="text-xs text-white/60 pl-2 py-1 border-l-2 border-cyan-500/20 hover:border-cyan-500 hover:text-white hover:bg-white/5 transition-all cursor-default rounded-r"
                data-testid={`text-client-${sectorKey}-${index}-${idx}`}
              >
                • {client}
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </Card>
  );
}

const sectors = {
  transportation: {
    title: "Transportation",
    image: transportationImg,
    programs: [
      {
        name: "Independent Contractors",
        coverages: [
          "Occupational Accident",
          "Contingent Liability",
          "Physical Damage",
          "Non-Trucking Liability",
          "Workers Compensation",
        ],
        targetClients: [
          "Owner-operators",
          "Independent truckers",
          "Last-mile delivery drivers",
          "Courier services",
        ],
      },
      {
        name: "Freight Brokers",
        coverages: [
          "Truck Broker Liability",
          "Contingent Auto Liability",
          "Contingent Cargo Liability",
          "Errors & Omissions",
          "Cyber",
          "General Liability",
        ],
        targetClients: [
          "Licensed freight brokers",
          "Third-party logistics (3PL)",
          "Freight forwarders",
          "Transportation intermediaries",
        ],
      },
      {
        name: "Rideshare",
        coverages: [
          "Commercial Auto Liability",
          "Physical Damage",
          "Uninsured/Underinsured Motorist",
          "Accident Medical",
        ],
        targetClients: [
          "Rideshare drivers",
          "Delivery app drivers",
          "Gig economy workers",
          "Transportation network companies",
        ],
      },
      {
        name: "EV Fleets",
        coverages: [
          "Auto Liability",
          "Physical Damage",
          "Battery Coverage",
          "Charging Equipment",
          "Business Interruption",
        ],
        targetClients: [
          "Electric vehicle fleet operators",
          "EV delivery services",
          "Green transportation companies",
          "Municipal EV programs",
        ],
      },
    ],
  },
  sports: {
    title: "Sports",
    image: sportsImg,
    programs: [
      {
        name: "Youth Sports",
        coverages: [
          "General Liability",
          "Professional Liability",
          "Sexual Abuse & Molestation",
          "Accident Medical & AD&D",
          "Directors & Officers",
          "Tournament Registration Refund",
        ],
        targetClients: [
          "Youth sports leagues",
          "Recreational programs",
          "School athletic programs",
          "Community sports organizations",
        ],
      },
      {
        name: "Pickleball",
        coverages: [
          "General Liability",
          "Professional Liability",
          "Property",
          "Equipment Coverage",
          "Tournament Liability",
          "Accident Medical",
        ],
        targetClients: [
          "Pickleball clubs",
          "Tournament organizers",
          "Facility operators",
          "Coaching professionals",
        ],
      },
      {
        name: "Water Sports",
        coverages: [
          "General Liability",
          "Professional Liability",
          "Equipment Coverage",
          "Boat Liability",
          "Accident Medical",
        ],
        targetClients: [
          "Marinas & boat rentals",
          "Surf & paddle schools",
          "Scuba diving operators",
          "Water sport instructors",
        ],
      },
      {
        name: "Winter Sports",
        coverages: [
          "General Liability",
          "Accident Medical",
          "Catastrophic Coverage",
          "Professional Liability",
          "Sexual Abuse & Molestation",
        ],
        targetClients: [
          "Ski schools",
          "Snowboard instructors",
          "Winter recreation programs",
          "Youth ski clubs",
        ],
      },
      {
        name: "Adventure Sports",
        coverages: [
          "General Liability",
          "Professional Liability",
          "Accident Medical",
          "Equipment Coverage",
          "Travel Accident",
        ],
        targetClients: [
          "Adventure tour operators",
          "Climbing gyms & guides",
          "Zip line operators",
          "Outdoor recreation companies",
        ],
      },
      {
        name: "Professional Sports",
        coverages: [
          "General Liability",
          "Event Cancellation",
          "Media Liability",
          "Cyber Liability",
          "Directors & Officers",
        ],
        targetClients: [
          "Professional teams",
          "Sports venues",
          "Athletic associations",
          "Sports management agencies",
        ],
      },
      {
        name: "Fitness Centers",
        coverages: [
          "General Liability",
          "Professional Liability",
          "Property",
          "Equipment Coverage",
          "Cyber Liability",
        ],
        targetClients: [
          "Gyms & fitness studios",
          "Personal trainers",
          "Yoga & pilates studios",
          "CrossFit affiliates",
        ],
      },
      {
        name: "Camps",
        coverages: [
          "General Liability",
          "Professional Liability",
          "Sexual Abuse & Molestation",
          "Accident Medical",
          "Property",
        ],
        targetClients: [
          "Summer camps",
          "Day camps",
          "Sports camps",
          "Specialty training camps",
        ],
      },
      {
        name: "Associations",
        coverages: [
          "General Liability",
          "Directors & Officers",
          "Professional Liability",
          "Cyber Liability",
          "Event Liability",
        ],
        targetClients: [
          "Sports governing bodies",
          "Athletic associations",
          "Referee organizations",
          "Coaching associations",
        ],
      },
      {
        name: "Event Platforms",
        coverages: [
          "General Liability",
          "Professional Liability",
          "Cyber Liability",
          "Media Liability",
          "Errors & Omissions",
        ],
        targetClients: [
          "Event registration platforms",
          "Sports tech companies",
          "Ticketing providers",
          "Tournament software providers",
        ],
      },
    ],
  },
  entertainment: {
    title: "Entertainment",
    image: entertainmentImg,
    programs: [
      {
        name: "Studios",
        coverages: [
          "General Liability",
          "Property",
          "Equipment Coverage",
          "Professional Liability",
          "Cyber Liability",
          "Workers Compensation",
          "Accident Medical",
        ],
        targetClients: [
          "Production studios",
          "Recording studios",
          "Podcast studios",
          "Photography studios",
        ],
      },
      {
        name: "Adventure Film",
        coverages: [
          "General Liability",
          "Equipment Coverage",
          "Cast Insurance",
          "Errors & Omissions",
          "Weather & Cancellation",
          "Accident Medical",
        ],
        targetClients: [
          "Documentary filmmakers",
          "Adventure production crews",
          "Extreme sports videographers",
          "Nature film producers",
        ],
      },
      {
        name: "Independent Contractors",
        coverages: [
          "General Liability",
          "Professional Liability",
          "Equipment Coverage",
          "Cyber Liability",
          "Media Liability",
          "Accident Medical",
        ],
        targetClients: [
          "Freelance videographers",
          "Independent photographers",
          "Audio engineers",
          "Production assistants",
        ],
      },
      {
        name: "Influencers",
        coverages: [
          "General Liability",
          "Professional Liability",
          "Cyber Liability",
          "Media Liability",
          "Equipment Coverage",
          "Accident Medical",
        ],
        targetClients: [
          "Social media influencers",
          "Content creators",
          "Brand ambassadors",
          "Digital media personalities",
        ],
      },
    ],
  },
  travel: {
    title: "Travel",
    image: travelImg,
    programs: [
      {
        name: "Group Travel",
        coverages: [
          "Trip Cancellation",
          "Medical & Evacuation",
          "Baggage & Personal Effects",
          "Travel Delay",
          "Accidental Death & Dismemberment",
        ],
        targetClients: [
          "Tour operators",
          "Travel agencies",
          "Group organizers",
          "Educational travel programs",
        ],
      },
      {
        name: "Adventure Travel",
        coverages: [
          "Medical & Evacuation",
          "Search & Rescue",
          "Trip Cancellation",
          "Equipment Coverage",
          "Hazardous Activities",
        ],
        targetClients: [
          "Adventure tour companies",
          "Expedition organizers",
          "Trekking operators",
          "Safari outfitters",
        ],
      },
      {
        name: "Sports Travel",
        coverages: [
          "Trip Cancellation",
          "Medical & Evacuation",
          "Equipment Coverage",
          "Tournament Cancellation",
          "Accident Medical",
        ],
        targetClients: [
          "Sports tour operators",
          "Athletic teams traveling",
          "Tournament participants",
          "Sports event organizers",
        ],
      },
      {
        name: "Leisure & Luxury Travel",
        coverages: [
          "Trip Cancellation",
          "Medical & Evacuation",
          "Concierge Services",
          "Baggage & Personal Effects",
          "Travel Delay",
        ],
        targetClients: [
          "Luxury travel agencies",
          "High-net-worth travelers",
          "Cruise travelers",
          "Resort vacationers",
        ],
      },
      {
        name: "War Risk",
        coverages: [
          "War & Terrorism",
          "Kidnap & Ransom",
          "Political Evacuation",
          "Crisis Management",
          "Medical & Evacuation",
          "Accidental Death & Dismemberment",
        ],
        targetClients: [
          "Journalists & media personnel",
          "Aid workers",
          "Corporate travelers to high-risk areas",
          "Government contractors",
        ],
      },
      {
        name: "Corporate Travel",
        coverages: [
          "Business Travel Accident",
          "Trip Cancellation",
          "Medical & Evacuation",
          "Business Equipment",
          "Rental Car Coverage",
        ],
        targetClients: [
          "Corporate travel departments",
          "Business executives",
          "Sales teams",
          "Consultants & contractors",
        ],
      },
    ],
  },
};

export function ProgramsSection() {
  const [activeTab, setActiveTab] = useState("transportation");

  return (
    <section
      id="programs"
      className="py-24 relative overflow-hidden"
      data-testid="section-programs"
      style={{ background: 'linear-gradient(to bottom, #0A1628, #1B2A41)' }}
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            data-testid="text-programs-title"
          >
            Programs We{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-primary">
              Operate
            </span>
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Badge
              variant="outline"
              className="text-sm px-4 py-2 bg-white/5 border-white/20 text-white"
              data-testid="badge-coverage"
            >
              <MapPin className="w-4 h-4 mr-2" />
              National Coverage: USA & Canada
            </Badge>
            <Badge
              variant="outline"
              className="text-sm px-4 py-2 bg-white/5 border-white/20 text-white"
              data-testid="badge-digital"
            >
              <Laptop className="w-4 h-4 mr-2" />
              Digital Administration Available
            </Badge>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
            <TabsList className="grid w-full max-w-2xl grid-cols-2 md:grid-cols-4 bg-white/5 border border-white/10">
              {Object.entries(sectors).map(([key, sector]) => (
                <TabsTrigger
                  key={key}
                  value={key}
                  data-testid={`tab-${key}`}
                  className="text-sm md:text-base text-white/70 data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {sector.title}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-primary"
                  data-testid="dropdown-market-segments"
                >
                  <Layers className="w-4 h-4 mr-2" />
                  Market Segments
                  <ChevronDown className="w-4 h-4 ml-2" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-[#1B2A41] border-white/10">
                {Object.entries(sectors).map(([key, sector]) => (
                  <DropdownMenuItem
                    key={key}
                    onClick={() => {
                      const element = document.getElementById(key);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-white/80 hover:text-primary hover:bg-white/10 cursor-pointer"
                    data-testid={`dropdown-item-${key}`}
                  >
                    {sector.title} Market
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {Object.entries(sectors).map(([key, sector]) => (
            <TabsContent key={key} value={key}>
              <div className="grid lg:grid-cols-2 gap-8">
                <Card className="overflow-hidden h-80 lg:h-auto bg-white/5 backdrop-blur-md border-white/10">
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${sector.image})` }}
                  >
                    <div className="w-full h-full bg-gradient-to-t from-[#0A1628]/90 to-transparent" />
                  </div>
                </Card>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
                  {sector.programs.map((program, index) => (
                    <ProgramCard
                      key={index}
                      program={program}
                      sectorKey={key}
                      index={index}
                    />
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
