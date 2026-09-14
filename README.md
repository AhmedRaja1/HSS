# Hazara Students Society (HSS) - Official Upcoming Portal

A sleek, culturally grounded "upcoming" landing page built for the **Hazara Students Society (HSS)**. Designed with the modern, typography-first aesthetic of **Google Product Pages** (such as Google Store / Pixel) combined with a royal cultural palette (Deep Midnight Navy, Heritage Gold, and Warm Ivory).

---

## 🌟 Key Highlights & Features

1. **Google Product Style Aesthetic**:
   - Floating frosted glass navigation with responsive mobile drawer.
   - Pill badges with animated status indicators (`✦ Upcoming Official Portal • Est. Late 1980s`).
   - High-contrast geometric typography using Google Fonts: *Plus Jakarta Sans*, *Poppins*, and *Lato* with *Noto Nastaliq Urdu* accents.
   - Subtle radial gradient lighting, soft cards, and micro-interactions.

2. **Official Emblems & Linguistic Seals Showcase**:
   - **Apex Seal (KP Chapter)**: The dark scalloped badge featuring calligraphic "ہزارہ" (Hazara).
   - **Executive Crest**: The prestigious gold crest representing provincial patronage and advisory stewardship.
   - **Linguistic Soul (Hindko Students Society)**: The black-and-white seal celebrating the heritage of Hindko.

3. **Open Graph Protocol & WhatsApp Link Previews**:
   - Fully configured `<meta property="og:image">` using the high-resolution dark seal badge (`og-preview.png`).
   - 1-click **"Share on WhatsApp"** button that preloads an engaging invite message with links.
   - Interactive Open Graph preview simulator box on the hero section.

4. **Manifesto & Crux (Interactive Tabbed Explorer)**:
   - **Cultural Evangelism**: Preserving traditions, folklore, and identity across Hazara Division.
   - **Linguistics & Hindko**: Revitalizing Hindko language, idioms, poetry, and oral literature.
   - **UET Peshawar Cradle**: Chronicling over three decades of leadership since the late 1980s as the nationwide parent chapter.
   - **Digital Hazara & Youth**: Modern tech skills, creative media production, and civic leadership.

5. **Documented Milestones & Achievements**:
   - Grand Hazara Nights (Peshawar Districts)
   - Funfest (Mega Cultural Festival)
   - Digital Hazara E-Learning
   - "Bringing Smiles" Social & Student Welfare
   - KPK State Assembly Delegations
   - Official Brand Video & Media Production

6. **Governance & Legal Lineage**:
   - Patronage lineage under the orders of the **Governor of Khyber Pakhtunkhwa**.
   - Strategic guidance from Chief Advisor **Mr. Mushtaq Ahmed Ghani** (former Speaker KPK Assembly).
   - Stewardship by the sitting cabinet at **UET Peshawar**.

7. **Interactive Components**:
   - Live Countdown timer to the full portal launch.
   - "Join the Movement / Register Interest" modal dialog with validation and toast notifications.
   - Direct integration to both official Facebook communities:
     - [Hazara Students Society Main](https://www.facebook.com/hazarastudentssociety/)
     - [HSS Official 22 Chapter](https://www.facebook.com/hssofficial22/)

---

## 📁 Project Directory Structure

```
hazara-students-society/
├── index.html                 # Semantic HTML5 entrypoint with Open Graph metadata
├── README.md                  # Documentation and deployment guide
└── assets/
    ├── css/
    │   └── style.css          # Master stylesheet (Google Product + Cultural Design)
    ├── js/
    │   └── main.js            # Interactive controllers (countdown, modal, tabs, WhatsApp share)
    └── images/
        ├── hss-logo-navy.png  # Dark scalloped seal emblem
        ├── hss-logo-gold.png  # Gold executive crest emblem
        ├── hindko-society-logo.png # Hindko linguistic emblem
        ├── linkedin-achievements.png # Verified leadership record
        └── og-preview.png     # WhatsApp / Social share Open Graph preview image
```

---

## 🚀 How to Run & Preview

### Method 1: Direct File Opening
Double-click `index.html` or right-click and choose **Open with > Google Chrome / Microsoft Edge**. Everything is self-contained with no build steps required!

### Method 2: Local Web Server
You can serve the folder using any lightweight web server:
```bash
# Using Node / npx (if installed)
npx serve .

# Or using Python (if installed)
python -m http.server 8080
```
Then visit `http://localhost:8080` in your browser.

---

## 📲 How WhatsApp Link Previews Work

When you paste a link in WhatsApp, WhatsApp scrapes the target URL for Open Graph tags:
- `og:title`: Hazara Students Society | Official Upcoming Portal
- `og:description`: Evangelizing the vibrant culture, linguistics & heritage of the Hazara region...
- `og:image`: The square dark emblem (`og-preview.png`)

> **Note on Local vs. Public Previews**:
> WhatsApp's preview scraper runs on WhatsApp's cloud servers. It can only fetch images from a **publicly reachable URL** (e.g. `https://your-site.vercel.app/assets/images/og-preview.png`). Once deployed to GitHub Pages, Vercel, or Netlify, WhatsApp link previews will display the rich preview card automatically!

---

## 🌐 Instant Free Deployment (1 Minute)

1. **GitHub Pages**:
   - Create a GitHub repo and push these files.
   - Go to **Settings > Pages > Branch: main / root** and click Save.
2. **Vercel / Netlify**:
   - Drag and drop the `hazara-students-society` folder into [Netlify Drop](https://app.netlify.com/drop) or import via Vercel.
   - Your site will instantly be live with full SSL and working WhatsApp link preview cards.
