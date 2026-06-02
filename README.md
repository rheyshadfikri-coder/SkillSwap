# SkillSwap

A futuristic, cinematic landing page and skill exchange platform. Built with Next.js, Tailwind CSS, Framer Motion, and Clerk authentication.

## Features

- Landing page with glassmorphism UI
- Sign up / Sign in (email + Google via Clerk)
- Protected routes with middleware
- Multi-step user onboarding
- Profile setup (skills, bio, skill level, profile image)
- Profile and settings pages
- Realtime chat with Socket.io (messaging, typing, file/image/voice)

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Clerk** (authentication)
- **Socket.io** (realtime chat)

## Clerk Setup (Required)

1. Create a free account at [clerk.com](https://clerk.com) and create an application.

2. Copy `.env.local.example` to `.env.local`:

   ```bash
   cp .env.local.example .env.local
   ```

3. Add your keys from the Clerk Dashboard → **API Keys**:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```

4. Enable **Google** OAuth:
   - Clerk Dashboard → **User & Authentication** → **Social Connections**
   - Enable Google and follow the setup wizard

5. Configure redirect URLs in Clerk Dashboard → **Paths**:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`
   - After sign-in: `/onboarding`
   - After sign-up: `/onboarding`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| Route | Access | Description |
|-------|--------|-------------|
| `/` | Public | Landing page |
| `/sign-in` | Public | Login (email + Google) |
| `/sign-up` | Public | Registration |
| `/onboarding` | Protected | Profile setup wizard |
| `/profile` | Protected | User profile view |
| `/messages` | Protected | Realtime chat (Socket.io) |
| `/settings` | Protected | Edit profile |

## Realtime Chat (Socket.io)

Messages use **Socket.io** on a custom Node server (`server.ts`).

```bash
npm run dev    # Next.js + Socket.io on http://localhost:3000
npm run build
npm start      # Production (set NODE_ENV=production)
```

**Important:** Use `npm run dev` instead of `next dev` so the WebSocket server starts.

Features: realtime messaging, online status, typing indicators, image/file sharing, voice message UI.

Open `/messages` while signed in. For live testing, open two browser tabs with different Clerk accounts.

## Project Structure

```
src/
├── app/
│   ├── (marketing)/     # Landing page
│   ├── (auth)/          # Sign-in, sign-up
│   └── (app)/           # Profile, settings, onboarding
├── actions/             # Server actions (profile save)
├── components/
│   ├── auth/
│   ├── layout/
│   ├── onboarding/
│   ├── profile/
│   ├── messages/        # Chat UI components
│   └── sections/
├── hooks/               # useChatSocket
├── server/socket/       # Socket.io event handlers
├── lib/
├── middleware.ts        # Route protection + onboarding redirects
└── types/
server.ts                # Custom Next.js + Socket.io server
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Dev server (Next.js + Socket.io) |
| `npm run build` | Production build |
| `npm run start` | Production server (Next.js + Socket.io) |
