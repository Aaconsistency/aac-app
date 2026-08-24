# All About Consistency (AAC)

The body you want is built in the days you almost skipped.

A complete fitness app: adaptive workouts by level/equipment/injury, required core
finishers, streaks & XP, optional rewards, hydration & calorie tracking, recipes,
1:1 session booking via Instagram DM, and saved profiles.

---

## Run it locally

You need Node.js 18+ (https://nodejs.org).

```bash
npm install
npm run dev
```

Open the printed URL (usually http://localhost:5173) on your computer, or on your
phone using your computer's local IP.

## Put it on the internet (free)

### Option A — Vercel (recommended, ~3 minutes)
1. Push this folder to a GitHub repo (or use `npx vercel` directly).
2. Go to https://vercel.com → New Project → import the repo.
3. Framework preset: **Vite**. Click Deploy.
4. You get a URL like `all-about-consistency.vercel.app`. Send that to anyone.

### Option B — Netlify drag & drop
1. Run `npm run build` — this creates a `dist/` folder.
2. Go to https://app.netlify.com/drop and drag the `dist` folder onto the page.
3. Done. Free URL, shareable immediately.

### Custom domain
Both Vercel and Netlify let you attach a domain (e.g. allaboutconsistency.com)
in their dashboard — buy the domain anywhere (~$10/yr) and point it per their docs.

## "Install" on phones (no app store)

The app ships with a PWA manifest and icons:
- **iPhone:** open the URL in Safari → Share → **Add to Home Screen**
- **Android:** open in Chrome → menu → **Add to Home screen / Install app**

It gets the AAC icon and opens fullscreen like a native app.

## Things to know

- **Profiles** save to each visitor's browser (localStorage). They stay logged in
  on that device. There is no server — no accounts, no passwords, no database.
- **Payments are in demo mode.** No card is charged. To take real money, get a
  Stripe account, then in `src/App.jsx` set `PAYMENT_CONFIG.liveMode = true`,
  add your publishable key, and stand up the small checkout endpoint
  (`/api/create-checkout-session`) per Stripe's docs. Until then, leave demo mode on.
- **Instagram booking** points at the handle in `IG_URL` near the top of
  `src/App.jsx` — change it there if the handle ever changes.
- **App stores (later):** wrap with Capacitor (https://capacitorjs.com) when you
  want Apple/Google store listings. Apple is $99/yr, Google $25 once.

## Project layout

```
index.html          entry page, PWA + fonts + theme
public/             icons + web manifest
src/main.jsx        React bootstrap
src/App.jsx         the entire app (one file, easy to edit)
```
