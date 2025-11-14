# Matterhorn Protects - Design Guidelines

## Design Approach
**Reference-Based Design:** Inspired by Bentley.com's sophisticated enterprise aesthetic - clean layouts, generous whitespace, premium feel with data-rich content presentation. Targeting broker professionals with a polished, trustworthy, and innovative visual identity.

## Core Design Principles
- **Enterprise Premium:** Sophisticated B2B aesthetic conveying expertise and reliability
- **Data-Rich Clarity:** Present extensive information without visual clutter
- **Visual Hierarchy:** Clear content prioritization through scale and spacing
- **Trust & Innovation:** Balance traditional insurance credibility with modern AI-forward positioning

## Typography
- **Headings:** Inter or similar geometric sans-serif - Bold (700) for H1/H2, SemiBold (600) for H3/H4
- **H1:** 3.5rem (56px) on desktop, 2.5rem on mobile
- **H2:** 2.5rem (40px) on desktop, 2rem on mobile  
- **H3:** 1.75rem (28px)
- **Body:** Inter Regular (400) at 1.125rem (18px) for readability, line-height 1.7
- **Small Text/Labels:** 0.875rem (14px), Medium weight (500)

## Layout System
**Spacing Units:** Tailwind scale - primary increments of 4, 6, 8, 12, 16, 20, 24, 32
- **Section Padding:** py-20 to py-32 on desktop, py-12 to py-16 on mobile
- **Container:** max-w-7xl for full-width sections, max-w-6xl for content sections
- **Grid Gaps:** gap-8 for cards, gap-6 for content blocks

## Component Library

### Navigation
- Fixed top navigation with backdrop blur effect when scrolling
- Logo left, horizontal menu center-right: Solutions (dropdown: Sports/Transportation/Travel), Brokers, Case Studies, Team, Contact
- CTA button: "Get Appointed" - primary action
- Mobile: Hamburger menu with slide-in panel

### Hero Section
- **Full-screen video background** (Matterhorn mountains) with dark overlay (opacity 60-70%)
- Centered content with maximum 800px width
- Primary headline: "AI-Led Specialty Insurance Program Design Shop"
- Subheading: "Working Exclusively with Brokers"
- Value proposition text
- Dual CTAs: Primary "Connect with Our Team", Secondary "View Our Markets"
- Subtle scroll indicator at bottom

### Stats Showcase
- 4-column grid on desktop (2-column tablet, 1-column mobile)
- Large numbers with animated counter effect on scroll
- Labels beneath: "30+ A-Rated Markets", "50 States Covered", "100+ Years Combined Experience", "55+ Coverages"
- Minimal card styling with subtle borders

### Market Segments (Sports/Transportation/Travel)
- Three large horizontal cards with background images (sports field, truck on highway, airplane above clouds)
- Image overlay with gradient for text readability
- Left-aligned content within cards
- Market name (H2), brief description, key stats (markets, tools, coverages)
- "Explore" link with arrow icon
- Hover: Slight scale and brightness increase

### Case Studies Section
- Grid layout: 2 columns on desktop, 1 on mobile
- Each card: Company/scenario name (H3), challenge statement, solution paragraph, results with bullet points highlighting metrics
- Visual hierarchy: Challenge in regular weight, Solution in medium, Results in bold with metrics emphasized
- Minimal card design with border, generous padding (p-8)

### Team Section  
- 3-column grid for team members
- Professional headshot (circular or square with subtle shadow)
- Name (H3), title below
- Full bio paragraph (preserve all original content)
- Email link at bottom
- Equal height cards

### Partnership Logos
- 3-column grid showing NAYS, TIE, PLACT
- Logo centered, partnership description below
- Clean, minimal presentation

### Detailed Market Breakdown
- Accordion or tabbed interface for Sports/Transportation/Travel
- Each tab expands to show: Segments, Clients/Coverage types, Technology/Tools, Contact person with email
- Preserve all original detailed content from matterhornprotects.com
- List formatting with checkmarks or bullet points

### Broker Appointment CTA
- Full-width section with background image (broker meeting or handshake)
- Centered content: Headline, description of process, "Get Appointed" button linking to Jotform
- Emphasized messaging: "Same-day market access upon approval"

### Footer
- Three columns: Company info with tagline, Quick Links (all main sections), Contact (phone: 1-844-600-0611, support email)
- Bottom bar: Copyright, links to Privacy/Terms

## Animations & Interactions
- **Scroll animations:** Fade-in and slide-up for sections (subtle, 0.3s duration)
- **Parallax:** Video background moves slower than content on scroll
- **Hover states:** Cards lift slightly (translateY -4px) with shadow increase, links underline
- **Counter animations:** Stats count up when visible in viewport
- **Navigation:** Smooth scroll to sections, backdrop blur on scroll past hero

## Images
- **Hero:** Full-screen Matterhorn mountains video (looping, muted, autoplay)
- **Market cards:** Sports field aerial, semi-truck on highway, airplane above clouds
- **Case study backgrounds:** Subtle, relevant imagery or solid backgrounds
- **Team section:** Professional headshots of John Warren, Wayne Gutridge, Stephen Mueller
- **Partnership section:** NAYS, TIE, PLACT logos
- **Broker CTA:** Professional broker meeting or handshake scene

## Responsive Behavior
- **Desktop (1280px+):** 3-column grids, full navigation menu visible
- **Tablet (768-1279px):** 2-column grids, condensed navigation
- **Mobile (<768px):** Single column, hamburger menu, stacked CTAs, reduced font sizes per typography scale