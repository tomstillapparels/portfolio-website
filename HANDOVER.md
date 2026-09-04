# Client Handover Document — TOMSTILL Website

**Project Name:** TOMSTILL (Tomstill Apparels)  
**Description:** Premium Streetwear Wholesale & B2B Apparel Platform  
**Production Status:** Live / Deployed on Vercel & Connected to GitHub  
**Date of Handover:** September 2026  

---

## 1. Executive Summary

The TOMSTILL web platform is a modern, high-performance, full-stack web application designed for B2B wholesale buyers and streetwear brand showcases. Built with cutting-edge React 19 SSR technologies, it features a custom inquiry management system with direct email notifications, custom product showcases, responsive neo-brutalist styling, dynamic sitemaps, and optimized search engine meta tags.

The application is fully configured, connected to GitHub, and hosted on **Vercel** with automatic continuous deployment (CD).

---

## 2. Technology Stack & Dependencies

Below is a detailed breakdown of all core technologies, framework libraries, and tools used to build the codebase:

### **Core Stack**
- **Framework & SSR:** [TanStack Start](https://tanstack.com/start) (`@tanstack/react-start`) — Next-generation full-stack React framework supporting Server-Side Rendering (SSR) and Server Functions.
- **Routing:** [TanStack Router](https://tanstack.com/router) (`@tanstack/react-router`) — Type-safe, file-based routing system (`src/routes`).
- **Language:** TypeScript 5.8 — Strict type checking for reliability and code quality.
- **Bundler & Build Tool:** Vite 8 — Blazing-fast development server and production bundler.
- **State Management / Data Fetching:** `@tanstack/react-query` v5 — Managing async requests and client-side caching.

### **UI & Design System**
- **CSS Framework:** Tailwind CSS v4 — Utility-first CSS engine.
- **UI Components Primitives:** Radix UI primitives (`@radix-ui/react-*`) — Accessible, unstyled UI foundations (Dialogs, Accordions, Menus, Popovers, Tabs, Tooltips, etc.).
- **Icons:** Lucide React (`lucide-react`) — Modern, consistent icon set.
- **Typography:** Google Font (*Archivo Narrow*) & System fonts.
- **Carousels / Sliders:** Embla Carousel React (`embla-carousel-react`) — Smooth touch-enabled product carousels.
- **Notifications / Toasts:** Sonner (`sonner`) — Toast notification system.
- **Utilities:** `clsx`, `tailwind-merge`, `class-variance-authority` (CVA) — Dynamic class name generation.

### **Form Handling & Validation**
- **Form Management:** React Hook Form (`react-hook-form`).
- **Schema Validation:** Zod (`zod`, `@hookform/resolvers`).

### **Backend & API Integrations**
- **Server Functions:** TanStack Start `createServerFn` (`src/lib/email.ts`).
- **Transactional Email Service:** Resend API (`https://api.resend.com/emails`) — Handles bulk inquiry email dispatch directly to `tomstillapparels@gmail.com`.

---

## 3. Project Structure & Page Routes

The project follows a standard file-based route structure located in `src/routes`:

```text
tomstill/
├── public/                 # Static assets (favicons, images, sitemap assets)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── site-header.tsx # Global Header & Navigation
│   │   ├── site-footer.tsx # Global Footer with quick links & info
│   │   └── ui/             # Radix UI / Shadcn UI components
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Helper utilities & Server Functions
│   │   ├── email.ts        # Resend API integration for Wholesale Inquiries
│   │   └── error-capture.ts
│   ├── routes/             # File-based Routes / Pages
│   │   ├── __root.tsx              # Root Layout, SEO metadata & HTML shell
│   │   ├── index.tsx               # Home Page (Hero, Brand Highlights, Products)
│   │   ├── about.tsx               # Brand Story & Ethos Page
│   │   ├── categories.tsx          # Apparel Catalog & Categories Showcase
│   │   ├── inquiry.tsx             # Bulk Wholesale Inquiry Order Form
│   │   ├── wholesale-faq.tsx       # Interactive FAQ Accordion
│   │   ├── shipping-logistics.tsx  # Shipping & Logistics Policy Page
│   │   ├── privacy-policy.tsx      # Privacy Policy Page
│   │   ├── terms-of-service.tsx    # Terms of Service Page
│   │   └── sitemap[.]xml.ts        # Dynamic XML Sitemap generator
│   ├── server.ts           # SSR Server entry point
│   ├── start.ts            # Client application entry point
│   └── styles.css          # Global Tailwind CSS definitions
├── .env                    # Environment variables (API Keys)
├── HANDOVER.md             # This Client Handover Documentation
├── package.json            # Scripts & Dependency manifest
└── vite.config.ts          # Vite build configuration
```

---

## 4. Key Functional Features

### 1. Wholesale Bulk Inquiry Form
- **Location:** `/inquiry`
- **Functionality:** Allows prospective wholesale buyers to submit bulk orders with fields including Full Name, Company Name, Email, Phone Number, Shipping Address, and Requested Units Volume.
- **Backend Flow:** Validates input using Zod, triggers `sendInquiryEmail` server function, and sends a branded HTML email via Resend API to `tomstillapparels@gmail.com`.

### 2. Responsive & Accessible Design
- Fully mobile-responsive layout for smartphones, tablets, and desktop displays.
- Styled using a high-contrast, modern streetwear aesthetic (neo-brutalist accents, clean grid borders).

### 3. Built-in SEO Optimization
- Configured Open Graph (`og:site_name`, `og:type`) and Twitter Card metadata in `src/routes/__root.tsx`.
- Automatically generated dynamic XML sitemap at `/sitemap.xml` for Google Search Console indexing.

---

## 5. Deployment & Hosting Architecture (Vercel + GitHub)

The project is hosted on **Vercel** and integrated with **GitHub**. Any push to the main branch triggers an automatic production build on Vercel.

### **Vercel Project Configuration**
- **Build Command:** `npm run build`
- **Output Directory:** `.output` / TanStack Start default
- **Node.js Version:** 18.x or 20.x

### **Environment Variables on Vercel**
Ensure the following variable is added in **Vercel Dashboard > Project > Settings > Environment Variables**:

| Key | Description | Example Value |
| :--- | :--- | :--- |
| `RESEND_API_KEY` | Resend Transactional Email API Key | `re_Emq7jyCt_...` |

---

## 6. How to Transfer Ownership & Access to Client

Follow these exact steps to complete the handover for GitHub and Vercel:

### **Step 1: Transfer GitHub Repository Access**
1. Go to the GitHub repository **Settings > Collaborators** (or **Manage Access**).
2. Add the client's GitHub username/email with **Admin / Maintainer** role, OR transfer repository ownership to their organization via **Settings > General > Transfer ownership**.

### **Step 2: Transfer Vercel Project or Add Client Team Member**
- **Option A (Add Client as Member):** Go to Vercel Team Settings > Members and invite the client.
- **Option B (Transfer Vercel Project):** Go to Vercel **Project Settings > Advanced > Transfer Project** and move it to the client's Vercel account.

### **Step 3: Setup Custom Domain on Vercel**
1. In Vercel, navigate to **Settings > Domains**.
2. Add the client's official domain (e.g. `tomstill.com` or `www.tomstill.com`).
3. Vercel will provide CNAME / A records. Point the domain's DNS settings at Namecheap/GoDaddy/Cloudflare to Vercel.

### **Step 4: Resend Email Domain Setup**
1. Have the client log into [Resend.com](https://resend.com).
2. Add and verify their domain under **Resend > Domains**.
3. Generate a production `RESEND_API_KEY` and update it in Vercel Environment Variables.

---

## 7. Development & Local Commands

To work on or test the website locally:

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Test production build locally
npm run build
npm run preview
```

---

## 8. Client Handover Checklist

- [x] Codebase fully pushed to GitHub repository.
- [x] Deployed and running live on Vercel.
- [x] Transfer / invite client to GitHub repository.
- [x] Transfer / invite client to Vercel project.
- [x] Configure client's custom domain on Vercel.
- [x] Add `RESEND_API_KEY` to Vercel Environment Variables.
- [x] Test live `/inquiry` form submission.
- [x] Submit `/sitemap.xml` to Google Search Console.

---
*Document prepared for TOMSTILL Apparels handover.*
