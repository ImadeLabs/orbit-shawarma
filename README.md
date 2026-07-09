# Orbit Shawarma

A modern, responsive food ordering website for **Orbit Shawarma**, built with Next.js 15 (App Router), TypeScript, Tailwind CSS and shadcn/ui-style components.

This build is **frontend-only**: every page and interaction works against local mock data and browser storage (Zustand + localStorage). There is no database, authentication backend, or payment processor wired up yet — see "Connecting a real backend" below for how this project was designed to be extended.

## What's included

- **Storefront**: Home, Menu (search + category filters + skeleton loading), Cart, Checkout, Order Confirmation, About, Contact
- **Auth UI**: Login, Sign Up, Forgot Password, Account (order history + saved addresses) — forms are functional but simulated (no real backend)
- **Admin dashboard** at `/admin`: Overview (charts), Products, Categories, Orders (status board), Customers, Coupons, Inventory (low-stock alerts), Analytics, Notifications, Settings — all powered by mock data in `lib/data/mock-admin-data.ts`
- **Cart** powered by Zustand with localStorage persistence
- **WhatsApp checkout**: "Place Order" builds a formatted order message and opens WhatsApp with it pre-filled
- Dark mode, sticky header, mobile sticky cart bar, floating WhatsApp button, toasts (Sonner), Framer Motion animations, SEO metadata, sitemap/robots, favicon & OG image

## Tech stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS · Radix UI primitives (shadcn/ui pattern) · Zustand · React Hook Form + Zod · Framer Motion · Lucide Icons · Recharts (admin charts) · Sonner (toasts)

## Getting started

This project's dependencies were **not installed** in the environment it was generated in (no package registry access there), so do this on your own machine:

```bash
npm install
npm run dev
```

Then open http://localhost:3000. The admin dashboard is at http://localhost:3000/admin.

## Project structure

```
app/
  (store)/          # customer-facing storefront (own layout with header/footer)
    page.tsx         # Home
    menu/            # Menu with search + filters
    cart/            # Cart
    checkout/        # Checkout + WhatsApp order handoff
    order-confirmation/
    about/
    contact/
    login/ signup/ forgot-password/
    account/         # Order history + saved addresses
  admin/             # Admin dashboard (own sidebar layout)
    page.tsx         # Overview
    products/ categories/ orders/ customers/ coupons/ inventory/ analytics/ notifications/ settings/
  layout.tsx         # Root layout (fonts, theme, toaster)
components/
  ui/                # shadcn-style primitives (button, card, dialog, sheet, tabs, select...)
  layout/            # Header, Footer
  home/               # Hero, featured menu, reviews, etc.
  menu/ cart/ admin/ shared/
lib/
  data/              # Mock menu, reviews, admin, and account data
  store/cart-store.ts # Zustand cart store
  whatsapp.ts         # WhatsApp order message builder
  types.ts
```

## Things to customize before launch

1. **WhatsApp number** — set the real business number in `lib/whatsapp.ts` (`RESTAURANT_WHATSAPP_NUMBER`).
2. **Contact details** — phone/email/address placeholders live in `components/layout/footer.tsx` and `app/(store)/contact/page.tsx`.
3. **Google Map** — the embed in the Contact page currently points to a generic Victoria Island query string; replace with your exact address/coordinates.
4. **Images** — menu and hero images are pulled live from Unsplash by URL for demo purposes. Swap in your own photography (e.g. via Cloudinary) for production.
5. **Branding** — colors live in `tailwind.config.ts` (primary = orange, secondary = red) and `app/globals.css` (CSS variables for light/dark themes).

## Connecting a real backend

The UI was built to make this straightforward to wire up later:

- **Database**: add Prisma + PostgreSQL. Suggested models: `User`, `Category`, `Product`, `Cart`, `Order`, `OrderItem`, `Address`, `Coupon`, `Review`, `Payment` — these map directly to the shapes already used in `lib/types.ts` and `lib/data/*`.
- **Auth**: Auth.js (NextAuth) for the Login/Signup/Forgot Password pages in `app/(store)/login`, `signup`, `forgot-password` — currently these just show a toast and redirect.
- **Payments**: Paystack for the "Online Payment" option in checkout (`app/(store)/checkout/page.tsx`) — there's already a placeholder note in the UI where the Paystack redirect would go.
- **Images**: Cloudinary for product image uploads in the admin Products page.
- **Email**: Resend for order confirmation and password reset emails.
- **Admin dashboard**: replace `lib/data/mock-admin-data.ts` with real API routes/queries once the database is live — the page components already consume that shape, so swapping the data source shouldn't require UI rewrites.

## Deploying to Vercel

1. Push this project to a GitHub/GitLab/Bitbucket repo.
2. Go to https://vercel.com/new and import the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Add environment variables once you connect a real backend, e.g.:
   - `DATABASE_URL`
   - `NEXTAUTH_SECRET`, `NEXTAUTH_URL`
   - `PAYSTACK_SECRET_KEY`, `NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY`
   - `CLOUDINARY_URL`
   - `RESEND_API_KEY`
5. Click **Deploy**. Vercel will run `npm install` and `npm run build` automatically.
6. Add your custom domain under Project Settings → Domains.

No environment variables are required to deploy the current frontend-only version — it will build and run with mock data out of the box.
