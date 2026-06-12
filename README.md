# Career With Confidence Website

## Setup

1. Install dependencies:
```bash
npm install
```
2. Copy env template and add token:
```bash
copy .env.example .env.local
```
3. Run Sanity seed (uses exact content from the Word document):
```bash
npm run seed
```
4. Run website:
```bash
npm run dev
```

## Sanity Editing

- Studio is configured in this same project (`sanity.config.ts` + schemas).
- Start studio locally with:
```bash
npx sanity dev
```
- Edit `Site Content` document to update all homepage sections.

## Flow Implemented

Navbar and section order:
- Home
- About Founder
- Services
- Packages
- Testimonials
- Contact Us

## Notes

- Brand colors from Word doc are implemented: Blue and purple.
- Embedded media from DOCX is uploaded during seed.
- Package cards are fully Sanity-driven and can be edited/replaced with your exact attached package images in Studio.
