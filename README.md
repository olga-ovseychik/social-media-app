# Social Media App

![Status](https://img.shields.io/badge/status-in%20development-yellow)
![React Native](https://img.shields.io/badge/React%20Native-Expo-61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Coverage](https://img.shields.io/badge/coverage-52%25-yellow)

A mobile social app built with React Native, Expo, TypeScript, and Supabase. Featuring authentication, posts with image uploads, threaded comments, and voting with optimistic UI updates.

## Quick Start

```bash
git clone https://github.com/olga-ovseychik/social-media-app.git
cd social-media-app
npm install
```

Create `.env`:

```env
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

```bash
npm start        # start dev server
npm test         # run tests
npm run codegen  # regenerate GraphQL types
```

## Stack

React Native · Expo Router · TypeScript · Supabase · Redux Toolkit · TanStack Query · GraphQL · Jest

## Wiki

Full documentation is in the [project wiki](https://github.com/olga-ovseychik/social-media-app/wiki):

- [Architecture](https://github.com/olga-ovseychik/social-media-app/wiki/Architecture)
- [Application Flows](https://github.com/olga-ovseychik/social-media-app/wiki/Application-Flows)
- [Implementation Decisions](https://github.com/olga-ovseychik/social-media-app/wiki/Implementation-Decisions)
- [Testing](https://github.com/olga-ovseychik/social-media-app/wiki/Testing)
- [Roadmap](https://github.com/olga-ovseychik/social-media-app/wiki/Roadmap)

## Status

In active development. Profile editing and a user's own posts list are the current focus.

## License
See the [LICENSE](./LICENSE.md)
