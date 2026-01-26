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
import { FileText, ChevronDown, MapPin, Laptop, Send } from "lucide-react";
import transportationImg from "@assets/generated_images/Edgy_transportation_visual_3a94fd09.png";
import sportsImg from "@assets/generated_images/Edgy_modern_sports_visual_1cd3bb51.png";
import entertainmentImg from "@assets/generated_images/Edgy_entertainment_industry_visual_37f091ea.png";
import travelImg from "@assets/generated_images/Edgy_travel_visual_cd89b49b.png";

interface Program {
  name: string;
  coverages: string[];
}

interface ProgramCardProps {
  program: Program;
  sectorKey: string;
  index: number;
}

function ProgramCard({ program, sectorKey, index }: ProgramCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card
      className="p-4 transition-all duration-300 cursor-pointer group bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 hover:border-primary/40"
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

      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button
            variant="ghost"
            size="sm"
            className="w-full justify-between mb-2 text-xs text-white/70 hover:bg-white/10 hover:text-primary transition-colors"
            data-testid={`button-toggle-coverages-${sectorKey}-${index}`}
          >
            <span>Available Coverages ({program.coverages.length})</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
            />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="space-y-1 mb-3">
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

      <div className="flex flex-col gap-2">
        <Button
          variant="ghost"
          size="sm"
          className="text-xs justify-start px-2 h-auto py-1.5 text-white/70 hover:bg-white/10 hover:text-primary transition-all"
          onClick={() => console.log(`Request sheet for ${program.name}`)}
          data-testid={`button-request-sheet-${sectorKey}-${index}`}
        >
          <FileText className="w-3 h-3 mr-1.5" />
          Request Program Sheet
        </Button>
        <Button
          variant="default"
          size="sm"
          className="text-xs w-full bg-primary hover:bg-primary/90"
          onClick={() => console.log(`Request application for ${program.name}`)}
          data-testid={`button-request-application-${sectorKey}-${index}`}
        >
          <Send className="w-3 h-3 mr-1.5" />
          Request Application
        </Button>
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
      },
      {
        name: "Rideshare",
        coverages: [
          "Commercial Auto Liability",
          "Physical Damage",
          "Uninsured/Underinsured Motorist",
          "Accident Medical",
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
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-2 md:grid-cols-4 mb-12 bg-white/5 border border-white/10">
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
