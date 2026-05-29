# Pankaj Traders — Claude Code Project Memory

## Project Overview
Frontend React website for "Pankaj Traders" — a construction and building
materials shop. Purpose: advertising + online presence. Frontend-only for now;
backend only if specifically required later.

---
## Taglines to  be used as it is:
- Primary Tagline: “निर्माण की हर जरूरत, बस एक नाम — Pankaj Traders”
- Secondary Tagline: "बन रहा है घर? आइए पंकज ट्रेडर्स"
- Tertiary Tagline: “मजबूत निर्माण की पहली पसंद” 
---

## Shop Identity
- **Name:** Pankaj Traders
- **Tagline:** "Everything to Build Your Dream"
- **Established:** 2014 (12+ years in business)
- **GST Number:** 09CVAPK5077L1Z4
- **Type:** Construction, plumbing, electrical, paints & hardware supply store

---

## Owners / Proprietors
- **Jitendra Kumar** (Owner)
- **Pankaj Kumar** (Owner)
- *Photos to be added to /src/assets/owners/ when available*

---

## Contact & Location
- **Address:** Ramnagar Karjahan, Near Four Lane, Uttar Pradesh 273202
- **Google Maps:** https://maps.app.goo.gl/vLoV6umQ7eSRetGx5
- **Phone:** +91 9621552345
- **WhatsApp:** +91 6306346835
- **Email:** *(not yet provided — leave placeholder in UI)*
- **Business Hours:** 7:00 AM – 9:00 PM (Monday to Sunday, all days)

---

## Color Theme (CSS Variables — use these everywhere)
```css
--color-primary:    #E65100;  
--color-secondary:  #263238;  
--color-accent:     #FFF8F1;  
--color-highlight:  #FFB300;  
--color-white:      #FFFFFF;
--color-text-dark:  #1A1A1A;
--color-text-light: #FAFAFA;
```

---

## Font Theme (load via Google Fonts in index.html)
| Role      | Font                   | Usage                          |
|-----------|------------------------|-------------------------------|
| Headings  | Montserrat (Bold 700)  | Page titles, section headers  |
| Subheads  | Oswald (600)           | Card titles, nav items        |
| Body      | Open Sans (400/600)    | Paragraphs, descriptions      |
| Taglines  | Roboto Condensed (400) | Slogans, captions, badges     |

---

## Tech Stack
- **Framework:** React 18 (Vite)
- **Routing:** React Router DOM v6
- **Styling:** CSS Modules or plain CSS with variables (no Tailwind)
- **Icons:** React Icons library
- **Maps:** Google Maps embed iframe (no API key needed)
- **No backend** at this stage

---

## Pages & Routes
| Route        | Page Component | File                    |
|--------------|----------------|-------------------------|
| /            | Home           | src/pages/Home.jsx      |
| /products    | Products       | src/pages/Products.jsx  |
| /about       | About Us       | src/pages/AboutUs.jsx   |
| /services    | Services       | src/pages/Services.jsx  |
| /contact     | Contact        | src/pages/Contact.jsx   |
| /gallery     | Gallery        | src/pages/Gallery.jsx   |

---

## Folder Structure
```
pankaj-traders/
├── CLAUDE.md
├── index.html
├── public/
│   └── logo.png
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── index.css           ← global CSS variables & resets
    ├── components/
    │   └── navbar/
    │       ├── Navbar.jsx
    │       ├── Navbar.module.css
    │   └── footer/
    │       ├── Footer.jsx
    │       └── Footer.module.css
    ├── pages/
    │   ├── Home.jsx
    │   ├── Products.jsx
    │   ├── AboutUs.jsx
    │   ├── Services.jsx
    │   ├── Contact.jsx
    │   └── Gallery.jsx
    └── assets/
        ├── owners/         ← owner photos go here
        ├── products/       ← product images
        └── gallery/        ← shop gallery images
```

---

## Code Rules
- Functional components only — no class components
- One component per file; name matches filename
- Always use CSS variables for colors — never hardcode hex values
- All images use `alt` tags (accessibility)
- Mobile-first responsive design — always
- Add a comment above each major JSX section
- Use `react-icons` for all icons (no image icons)

---

## Navbar Links (in order)
Home | Products | Services | About Us | Gallery | Contact Us

## Key Business Notes
- Heavy materials (cement, sand, gitti, etc.) are **home delivered**
- Shop provides **skilled workers**: plumbers, electricians, and other service workers
- Products span: plumbing, electrical, paints, cement/hardware, tools, and appliances
- Rental products available (drills, machines, etc.) — shown on Products page

---

## TODOs (fill before going live)
- [ ] Add shop email address
- [ ] Add owner photos to /src/assets/owners/
- [ ] Confirm brand authorizations (e.g., Asian Paints, Havells dealer?)
- [ ] Add product photos to /src/assets/products/
- [ ] Add gallery photos to /src/assets/gallery/
- [ ] Confirm Google Maps embed iframe URL