# Dashboard App

A modern dashboard application built with Next.js.

## Features

- Beautiful responsive dashboard UI
- Glassmorphism design with dark theme
- Stats cards with trend indicators
- Revenue chart visualization
- Recent activity feed
- Orders table with status badges

## Getting Started

### Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

### Docker Deployment (Coolify)

```bash
docker build -t dashboard-app .
docker run -p 3000:3000 dashboard-app
```

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- CSS (no external UI library)

## Project Structure

```
dashboard-app/
├── src/
│   └── app/
│       ├── globals.css
│       ├── layout.tsx
│       └── page.tsx
├── public/
├── Dockerfile
├── next.config.js
├── package.json
├── tsconfig.json
└── .gitignore
```
