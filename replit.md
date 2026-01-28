# Matterhorn Protects - AI-Led Specialty Insurance Platform

## Overview

Matterhorn Protects is a specialty insurance program design shop operating as both an MGU (Managing General Underwriter) and MGA (Managing General Agent). The platform serves insurance brokers exclusively, providing AI-powered program design and automated insurance management across three primary market segments: Sports, Transportation, and Travel. The application features a sophisticated marketing website with detailed program information, team profiles, case studies, and broker onboarding capabilities.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server
- **Wouter** for lightweight client-side routing (instead of React Router)
- **TanStack Query v5** for server state management and data fetching

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives
- **Tailwind CSS** for utility-first styling with custom design tokens
- Component architecture follows "New York" style variant from shadcn
- Custom theming system with CSS variables for light/dark mode support
- Design inspired by Bentley.com's enterprise aesthetic with generous whitespace

**Key Design Patterns**
- Component composition using Radix UI headless components
- Custom hooks for scroll animations (`useScrollAnimation`) and responsive behavior (`useIsMobile`)
- Client-side only rendering (RSC disabled per components.json)
- Path aliases configured for clean imports (`@/`, `@shared/`, `@assets/`)

**State Management Strategy**
- React Query for async state and API caching
- Local component state with React hooks
- No global state management library (Redux/Zustand) currently implemented
- Query client configured with infinite stale time and disabled refetching

### Backend Architecture

**Server Framework**
- **Express.js** with TypeScript running on Node.js
- Custom Vite middleware integration for development hot module replacement
- HTTP server setup using Node's `createServer` for WebSocket potential

**API Structure**
- RESTful API design with `/api` prefix convention
- Route registration through centralized `registerRoutes` function
- Request/response logging middleware with JSON capture
- Raw body parsing for webhook support (configured in express.json middleware)

**Data Layer Abstraction**
- Storage interface pattern (`IStorage`) for database operations
- In-memory storage implementation (`MemStorage`) as default
- Designed for easy swap to database-backed storage (Drizzle ORM configured)
- CRUD operations abstracted behind storage methods

### Data Storage Solutions

**Database Configuration**
- **Drizzle ORM** configured for PostgreSQL dialect
- **Neon Database** serverless driver (`@neondatabase/serverless`)
- Schema location: `shared/schema.ts` for type sharing between client/server
- Migration output directory: `./migrations`

**Schema Design**
- Current schema includes users table with UUID primary keys
- Zod schema validation using `drizzle-zod` for runtime type safety
- Database URL expected via `DATABASE_URL` environment variable
- Note: Application may add PostgreSQL provisioning later as needed

**Session Management**
- `connect-pg-simple` package included for PostgreSQL session storage
- Suggests session-based authentication approach
- Cookie-based session management (credentials: "include" in fetch config)

### Authentication & Authorization

**Planned Authentication System**
- User schema includes username/password fields
- Session storage configured via connect-pg-simple
- Cookie-based authentication flow expected
- Currently minimal implementation (storage interface ready)

**Security Considerations**
- Raw body capture for webhook signature verification
- CORS and credential handling configured in fetch requests
- 401 handling strategy configurable in query client (returnNull vs throw)

### External Dependencies

**Third-Party Services & Integrations**
- **JotForm** - Broker application form hosted externally (form ID: 250985130794060)
- **Google Fonts** - Inter font family loaded via CDN
- **Neon Database** - Serverless PostgreSQL hosting
- Generated images stored in `attached_assets/generated_images/` directory

**Landing Pages**
- `/pickleball` - Pickleball Program landing page with coverage options, franchise programs, broker application
- `/youth-sports` - Youth Sports Coverage landing page with comprehensive sections including:
  - Leadership section (Wayne Gutridge, Isaac Allen, Mike Asselin)
  - Why Work With Matterhorn section (4 key benefits)
  - Available Markets section (6 A-rated carriers)
  - Featured Applications section (Organizations, Camps, Leagues, Tournaments, Academies)
  - Program Benefits section with detailed features
  - Interactive Case Studies section (3 real broker success stories with tabbed navigation)
  - Quote form for lead generation
- `/travel` - Travel Program landing page with CFAR coverage, instant pricing, enterprise solutions, platform integration
- `/rideshare` - Ride Share Economy Program landing page with driver coverage, fleet management, rating system, onboarding flow
- All landing pages feature custom navigation with smooth scroll, hero sections, dark/light theme toggle, and contact forms
- Contact info: support@matterhornprotects.com, 1-844-600-0611
- "Access Now" CTAs in MarketingLandingPagesSection link to internal routes for Pickleball, Youth Sports, Travel, and Ride Share

**Development Tools**
- **Replit-specific plugins**:
  - `@replit/vite-plugin-runtime-error-modal` for error overlays
  - `@replit/vite-plugin-cartographer` for navigation
  - `@replit/vite-plugin-dev-banner` for development indicators
- **esbuild** for server-side bundling in production builds

**UI Component Libraries**
- **Radix UI** - 20+ component primitives for accessibility
- **Lucide React** - Icon system
- **cmdk** - Command palette component
- **embla-carousel-react** - Carousel functionality
- **react-day-picker** - Date selection
- **recharts** - Chart components (configured but not actively used)
- **vaul** - Drawer component
- **class-variance-authority** - Type-safe component variants
- **tailwind-merge** - Utility class merging

**Form Management**
- **React Hook Form** - Form state management
- **@hookform/resolvers** - Schema validation integration
- **Zod** - Runtime schema validation

**Utilities**
- **date-fns** - Date manipulation
- **nanoid** - Unique ID generation
- **clsx** - Conditional className composition

### Design System Specifications

**Typography System**
- Primary font: Inter (weights: 400, 500, 600, 700, 800)
- H1: 3.5rem desktop / 2.5rem mobile
- H2: 2.5rem desktop / 2rem mobile  
- Body: 1.125rem with 1.7 line-height
- Design guideline document: `design_guidelines.md`

**Color System**
- HSL-based color tokens with alpha channel support
- Primary color: Cyan-based (195 100% 45%)
- Neutral base color scheme
- CSS custom properties for theming
- Separate tokens for card, popover, and sidebar variants

**Spacing & Layout**
- Tailwind spacing scale (4, 6, 8, 12, 16, 20, 24, 32)
- Max container widths: 7xl for full sections, 6xl for content
- Section padding: py-20 to py-32 desktop, py-12 to py-16 mobile
- Custom border radius values: lg=9px, md=6px, sm=3px

**Animation System**
- Custom animations: subtle-zoom, pulse-slow, pulse-slower, gradient
- Scroll-triggered animations via IntersectionObserver
- Hover elevation effects via custom CSS classes
- Parallax effects on hero section