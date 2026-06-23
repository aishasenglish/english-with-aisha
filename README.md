# English with Aisha — Website

A production-ready marketing website for English coaching built with Next.js, TypeScript, and Tailwind CSS.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

---

## How to make common updates

### Change the brand name
Open `content/site.ts` and update `brandName`. Every component reads from this file — one change updates the entire site.

### Update contact details (WhatsApp, email, city)
Edit `content/site.ts`:
- `whatsapp.display` — number shown on the page
- `whatsapp.intl` — number used in `wa.me` links (country code, no + or spaces)
- `email` — your email address
- `city`, `timezone` — shown in contact and footer

### Show or hide prices
In `content/site.ts`, set `showPrices: false` to replace all prices with "Message for current fee". Set `true` to show the price from `courses.ts`.

### Add a new batch
Open `content/batches.ts` and add a new object to the array:
```ts
{
  id: "batch-004",
  courseSlug: "ielts",  // or "all", "pte", "toefl", "english-writing", "spoken-english"
  startDate: "2026-09-01",
  status: "Open",       // "Open" | "Filling Fast" | "Closed"
},
```

### Add a testimonial
Open `content/testimonials.ts` and replace (or add to) the placeholder objects:
```ts
{
  name: "Student Name",
  result: "IELTS Band 7.5",
  course: "IELTS Preparation",
  quote: "The actual quote from the student.",
  image: "testimonial-filename.jpg",  // drop the photo in /public/images/testimonials/
},
```

### Set the Formspree endpoint
1. Go to [formspree.io](https://formspree.io) and create a free account
2. Create a new form and copy the endpoint URL
3. Open `content/site.ts` and replace `formspreeEndpoint` with your real URL

### Add social media links
Open `content/site.ts` and replace `"#"` with your real URLs in the `socials` object:
```ts
socials: {
  youtube: "https://youtube.com/@yourhandle",
  instagram: "https://instagram.com/yourhandle",
  tiktok: "https://tiktok.com/@yourhandle",
  facebook: "https://facebook.com/yourpage",
  linkedin: "https://linkedin.com/in/yourprofile",
},
```

### Add photos
Drop your photos into `/public/images/`. See `/public/images/README.md` for the required filenames and sizes.

---

## Tech stack

- **Next.js 16** (App Router, TypeScript)
- **Tailwind CSS v4**
- **next/font** — Google Fonts (Fraunces + Inter)
- **Formspree** — form submissions (no backend needed)
- **WhatsApp** — enrollment via `wa.me` links
- **Vercel** — hosting

## Content files

All site content lives in `/content/`:

| File | What it controls |
|---|---|
| `site.ts` | Brand name, contact details, prices, social links |
| `courses.ts` | Course data (modules, includes, price) |
| `batches.ts` | Upcoming batch dates and status |
| `testimonials.ts` | Student quotes and results |
| `faqs.ts` | FAQ questions and answers |
| `navigation.ts` | Navbar links structure |
