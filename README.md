# EventChain Frontend

Next.js frontend application for the EventChain event management platform.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Package Manager**: npm

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building

Build the application for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
eventchain-frontend/
├── src/
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   │   └── ui/          # shadcn/ui components
│   └── lib/             # Utility functions
├── public/              # Static assets
└── components.json      # shadcn/ui configuration
```

## Adding shadcn/ui Components

To add a new component from shadcn/ui:

```bash
npx shadcn@latest add [component-name]
```

Example:
```bash
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add dialog
```

## Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_API_URL=http://localhost:5001
NEXT_PUBLIC_EVENTS_API_URL=http://localhost:5002
NEXT_PUBLIC_PARTICIPATION_API_URL=http://localhost:5003
```

## API Integration

The frontend will communicate with the following backend services:

- **Auth Service** (`eventchain-auth-service`): Authentication and user management
- **Events Service** (`eventchain-events-service`): Event creation and management
- **Participation Service** (`eventchain-participation-service`): RSVP, check-in, and attendance

## Features

- 🔐 Authentication (Google OAuth, Web3 Wallet, Email/Password)
- 📅 Event browsing and creation
- ✅ Event registration and check-in
- 🎫 NFT attendance token verification
- 📊 Admin dashboards
- 🔔 Real-time updates (SSE)

## Development Notes

- Uses Next.js App Router (not Pages Router)
- TypeScript strict mode enabled
- Tailwind CSS v4 with CSS variables for theming
- shadcn/ui components for consistent UI
- Path alias `@/*` configured for imports
