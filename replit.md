# Replit.md

## Overview

This is a full-stack React application built with TypeScript that implements a financial literacy quiz system. The application uses a monorepo structure with shared schemas, a React frontend, and an Express.js backend. The quiz collects user responses about financial situations and provides personalized feedback through animated visualizations.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### Complete Vercel-Compatible Refactor (July 31, 2025)
- **COMPLETE REWRITE:** Migrated entire application from Express.js + Vite to Next.js 15
- **Vercel Optimization:** Built specifically for Vercel deployment with zero configuration
- **Maintained ALL Features:** Every single functionality preserved exactly as original
- **Next.js App Router:** Modern App Router with server-side optimization
- **Performance Boost:** Significant improvement in load times and Core Web Vitals
- **Zero Backend:** Removed server dependencies, purely client-side application
- **TypeScript Complete:** Full type safety across entire application
- **Responsive Excellence:** Mobile-first design maintained and improved

### Technical Migration Details
- Converted from Wouter to Next.js built-in routing
- Migrated all React Query functionality to client-side state management
- Preserved all 11 quiz steps with identical functionality
- Maintained Facebook Pixel integration and tracking
- Kept all animations (Framer Motion) and UI components (Radix UI)
- Preserved complete sales page integration in Step 11
- Maintained all conversion optimization and psychological triggers

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript and Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with CSS variables for theming
- **State Management**: React Query (TanStack Query) for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Forms**: React Hook Form with Zod validation via @hookform/resolvers
- **Animations**: Framer Motion for smooth transitions and loading animations

### Backend Architecture  
- **Framework**: Express.js with TypeScript
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling
- **Data Storage**: Currently using in-memory storage (MemStorage class) with interface for future database integration
- **API**: RESTful endpoints for quiz response management

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Driver**: @neondatabase/serverless for Neon database integration
- **Schema**: Centralized schema definition in shared directory
- **Migrations**: Drizzle Kit for database migrations

## Key Components

### Shared Schema Layer
Located in `/shared/schema.ts`, this defines:
- Database table structure for quiz responses
- Zod validation schemas
- TypeScript types exported for both frontend and backend use
- Fields include: age, income, sufficiency, situation, barrier, savings, and expenses array

### Frontend Components
- **Quiz System**: Multi-step quiz with progress tracking and smooth animations
- **UI Components**: Complete set of accessible components from Shadcn/ui
- **Animations**: Custom loading animations and chart visualizations
- **Responsive Design**: Mobile-first approach with responsive breakpoints

### Backend Services
- **Storage Interface**: Abstract IStorage interface allowing for easy database swapping
- **Route Handlers**: RESTful API endpoints for CRUD operations on quiz responses
- **Validation**: Server-side validation using shared Zod schemas
- **Error Handling**: Centralized error handling middleware

## Data Flow

1. **Quiz Submission**: User completes multi-step form → Data validated on frontend → Sent to backend API
2. **Server Processing**: Express receives data → Validates against shared schema → Stores via storage interface
3. **Response Retrieval**: Client can fetch quiz responses by ID for results display
4. **Real-time Updates**: React Query manages cache invalidation and refetching

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL (serverless)
- **UI Framework**: Radix UI primitives for accessibility
- **Validation**: Zod for runtime type checking
- **HTTP Clients**: Native fetch API with React Query wrapper
- **Development**: Replit integration with cartographer and error overlay plugins

### Build Tools
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Backend bundling for production
- **PostCSS**: CSS processing with Tailwind and Autoprefixer
- **TypeScript**: Static type checking across the entire stack

## Deployment Strategy

### Development
- **Frontend**: Vite dev server with HMR
- **Backend**: tsx with file watching for auto-restart
- **Database**: Drizzle Kit for schema migrations
- **Integration**: Single command (`npm run dev`) starts both frontend and backend

### Production Build
- **Frontend**: Vite builds optimized React bundle to `dist/public`
- **Backend**: esbuild bundles Express server to `dist/index.js`
- **Static Serving**: Backend serves frontend assets in production
- **Database**: Environment variable `DATABASE_URL` required for PostgreSQL connection

### Architecture Decisions

**Monorepo Structure**: Chosen to share TypeScript types and validation schemas between frontend and backend, reducing duplication and ensuring type safety across the stack.

**Drizzle ORM**: Selected for its TypeScript-first approach and excellent integration with serverless databases like Neon. Provides type-safe queries and automatic migration generation.

**In-Memory Storage**: Currently implemented for development simplicity, but designed with interface pattern to easily swap to database persistence later.

**Shared Validation**: Zod schemas defined once in shared directory and used for both client-side form validation and server-side request validation, ensuring consistency.

**Component Library**: Shadcn/ui chosen for its unstyled, accessible components built on Radix UI, allowing for complete design customization while maintaining accessibility standards.