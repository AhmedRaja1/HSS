# Hazara Students Society (HSS) - Official Portal

A high-contrast, modern, typography-first web ecosystem built for the **Hazara Students Society (HSS)**. Styled in an authoritative **Blue-Black & White** palette (`#040812`, `#081124`, and crisp pure `#ffffff`) with prestigious institutional typography (*Plus Jakarta Sans*, *Poppins*, *Lato*, and *Noto Nastaliq Urdu*).

---

## 🌟 Key Features & Sections

1. **Blue-Black & Pure White Aesthetic**:
   - Modern, high-contrast palette with full Light Mode and Dark Mode support (theme toggle with localStorage persistence).
   - Clean, prestigious white/blue pill buttons with high-contrast typography and subtle glow.
   - Smart scroll-hide top navigation (shortened brand) and sleek floating bottom mobile dock.

2. **Official Emblems & Linguistic Seals Showcase**:
   - **Apex Seal (KP Chapter)**: The dark scalloped badge with calligraphic "ہزارہ".
   - **Hazara Students Council (HSC)**: The council seal representing inter-district campus fellowship across universities.
   - **Executive Crest**: The royal seal representing institutional stewardship and provincial patronage.
   - **Linguistic Soul (Hindko Students Society)**: The historic emblem celebrating the sweet literature and folklore of Hindko.

3. **Regulated Constitution & By-Laws**:
   - Co-equal executive weightage of Chairpersonship and Presidentship.
   - Institutional mandate under Para 4, Phase 1 exercised by the Board of Governors and Esteemed Alumnus Raja Ahmed.
   - In-person grievance redressal mandate in Peshawar under Para 6.
   - Intra-organization election triggers within 3 weeks if grievances persist.
   - Notice of in-process 2026 Constitution upload coming soon.

4. **Alumni Network & Board of Governors**:
   - Global organizational tier structure: **Tier 1: Board of Governors (BoG)**, **Tier 2: Advisory Council & Statesmen**, **Tier 3: STEM & Industry Global Guild**.
   - Dedicated focus on reconnecting and shifting campus bonding into professional relationships in STEM and national verticals.
   - **All 6 Alumni Cohort Demographics** recorded with verbatim rosters:
     - **Class of 2019 (Senior Most)**: Raja Khizar, Imran Khalid, Faraz Bashir, Qasim Khawaj, David Bhai 😀, Umair Battagram, Hamza Khan, etc.
     - **Class of 2020 (The Favorites ❤ & Founders of Modern HSS)**: Azeem Ali, Sherry & Co, Saad Ali, Malik Hamza, Usama Swati, Shazain, Abdul Rehman Shah, Moazzam Paracha, etc.
     - **Class of 2021 (Our Direct Seniors)**: Syed Shah Waleed & Co, Daniyal, Shaban Mughal, Sikander Jahangiri, Osama Khan Jadoon, Sohaib Battagram, etc.
     - **Class of 2022 (We 😀, Longest Serving Cabinet & Revivers)**: Raja Ahmed, Shahmeer Awan, Usman Qureshi, M Hafeez, Ehsan Jadoon, Hassan Irshad, Sajjad Khan, Asim Aslam, Usama Asif, etc.
     - **Class of 2023 (The Legacy Continuers)**: Asfand Yar Khan, Huzaifa Malik, Hassan Jadoon, Sarmad Riaz, Zohaib Jadoon, Danyal, Hassan, Summer Khan, Saifullah Khalid, Ahtesham, Yaseen, Irshad, etc.
     - **Class of 2024 (Running Cabinet & Future)**: Hamza Jehangir, Abdullah Jadoon, Aisam Shah, Ebtihaj Abdullah, with active Class of 2025 & 2026 core team.
   - **Cyberspace Respect & Professional Networking Protocol**.
   - **Copyable Standardized Alumni Intro Message Template** with one-click clipboard action.
   - Heritage quote: *"Times have changed, millimeters have become centimeters and time really flies. One thing which remained constant is love for our land & culture. #HailHazara #SohnraDaisHazara"*.

5. **Non-Profit Status & Statutory Registration in Pakistan**:
   - Explicit declaration of active statutory registration in Pakistan.
   - Comprehensive review of the 5 applicable statutory frameworks:
     1. Societies Registration Act, 1860 (Act XXI of 1860)
     2. Voluntary Social Welfare Agencies Ordinance, 1961
     3. Section 42 of the Companies Act, 2017 (SECP Not-for-Profit Company)
     4. The Trusts Act, 1882 & KP Trusts Act, 2020
     5. Khyber Pakhtunkhwa Charities Act, 2019

6. **Democratic Philosophy & Political Affiliation**:
   - Pro-democratic, non-partisan institutional stance encouraging young engineers and students to participate in politics in every capacity.
   - Absolute freedom of personal opinion and party preference.
   - Alumni representation across: ISF, Insaf Engineers Forum, PP Student Wing, PML-N Students, JI Jameeat, JUI, MQM, ANP, and Awaam Pakistan Young Leaders.

7. **The Hazara Cause (Hazara Suba)**:
   - Articulation of the constitutional, democratic, and administrative case for a separate Hazara Province.
   - Annual commemoration of **January 8** (historic Hazara resolution day) and **April 11, 2010** (honoring the Martyrs of Abbottabad).

8. **Cabinet for the Year 2026 (`cabinet-2026.html`) & Home Announcement Pop-up**:
   - **Auto Home Page Pop-up**: Greets visitors on the home page with an official announcement modal highlighting *"New Cabinet Announced!"* and directing them to explore the full 2026 Cabinet roster.
   - Dedicated proclamation page with constitutional preamble and rules.
   - Complete, responsive, centered tables for:
     - **Executive Leadership** (20 members)
     - **The Cabinet** (15 members)
     - **Core Team** (8 members)
   - Preserving exact academic term fellow superscripts (`⁷` for Senior, `⁵` for Junior, `³` for Sophomore).

9. **Social Communities & Media**:
   - Facebook Main Page (`@hazarastudentssociety`)
   - Facebook Official 22 Chapter (`@hssofficial22`)
   - Official Instagram of HSC (`@hazare.wall`)
   - Open Graph Protocol configured with high-res 1024x540 landscape banner (`og-image.jpg`) for WhatsApp and social media rich card previews.
   - Deployed on Vercel (`https://hsspk.vercel.app/`) with CORS and cache headers.

10. **Attribution**:
    - *Made with love in Abbottabad 🏔️ by [Raja Ahmed](https://ahmedrajaspeaks.cloud)*

---

## 📁 Directory Structure

```
HSS/
├── index.html                 # Master portal landing page with all 10 core sections
├── cabinet-2026.html          # Dedicated 2026 Cabinet Announcement page
├── og-image.jpg               # Open Graph Protocol landscape image (WhatsApp preview)
├── vercel.json                # Vercel deployment & asset caching configuration
├── README.md                  # Project documentation
└── assets/
    ├── css/
    │   └── style.css          # Blue-Black & White responsive stylesheet
    ├── js/
    │   └── main.js            # Interactive controllers (theme, modal, popup, WhatsApp)
    └── images/
        ├── og-image.jpg       # Open Graph Protocol image for WhatsApp/Facebook (1024x540)
        ├── hss-logo-navy.png  # Main dark scalloped seal emblem
        ├── hsc-logo.jpg       # Hazara Students Council (HSC) emblem
        ├── hss-logo-gold.png  # Executive crest emblem
        ├── hindko-society-logo.png # Hindko linguistic seal
        └── linkedin-achievements.png # Verified leadership record
```

---

## 🚀 How to Preview & Host

Open `index.html` or `cabinet-2026.html` directly in any web browser, or launch using Python:
```bash
python -m http.server 8080
```
Then visit `http://localhost:8080` in your mobile or desktop browser.


## 2024 HSS Alumni WhatsApp Group Info Text

# HSS Group Chat
==================================================================================
Assalamualaikum!
Esteemed Alumni of our very own Hazara Students Society - HSS,
Hope you all are enjoying a great vigor and life ahead of campus. 
Times have changed, millimeters have become centimeters and time really flies.
One thing which remained constant is love for our land & culture.
#HailHazara
#SohnraDais Hazara

==================================================================================

### Aim of Alumni Group

It's an us moment for all of us, about how passionate we were on campus, working for the prestige of HSS even more than our today's full time jobs. 😂
Mashallah, proud of all the amazing work you all have been doing in various verticals across STEM and contributing towards the nation's economy.
It's a matter of fact, that we used to be very close when on campus, again the bonding between us was HSS only. We were from different streams.
Today, we need to shift that senior-junior relationship towards a more fruitful professional relationship.
In a nutshell, the main aim of this group is to reconnect, rejoice and let's help each other achieve their goals by connecting the dots in industry / practical life.

========================================================================

### Demographics of Group

1- Have added senior most ones from the Class of 2019.

Raja Khizar
Imran Khalid
Faraz Bashir
Etc.
Qasim Khawaj
David Bhai 😀
Umair Battagram
Hamza Khan
Don't have their contacts
Everyone can add members

===================================================================

2- Class of 2020 The Favorites ❤ & the Founders of Modern HSS

Azeem Ali Sherry and Company
Saad Ali Malik
Hamza
Usama Swati
Shazain
Abdul Rehman Shah 
Moazzam Paracha
Etc.
Almost all are added.

============================================================

3- Our Direct Seniors Class of 2021

Syed Shah Waleed & Company
Daniyal
Shaban Mughal
Sikander Jahangiri
Osama Khan Jadoon
Sohaib Battagram
Etc.
Almost all are added except
Qanit, Zahid & Inzimam.
Add them anyone 👍

=========================================================

4- Class of 2022
We 😀,  the longest serving cabinet ❤✨
And the Extreme Strugglers - Revivers I would rather say. 😊

Raja Ahmed
Shahmeer Awan
Usman Qureshi
M Hafeez
Ehsan Jadoon
Hassan Irshad
Sajjad Khan
Asim Aslam 
Usama Asif
Etc.

====================================================

5- Class of 2023
The Legacy Continuers

Asfand Yar Khan
Huzaifa Malik
Hassan Jadoon
Sarmad Riaz
Zohaib Jadoon
Danyal Hassan
Summer Khan
Saifullah Khalid
Ahtesham
Yaseen Irshad
Etc.

Almost all are added.

==================================================================

6- Class of 2024
The Running Cabinet

Hamza Jehangir
Abdullah Jadoon
Aisam Shah
Ebtihaj Abdullah
Even we have among us class of 2025 & 2026 in our current core team👍

============================================================

Respecting everyone's cyberspace, I assure you there'll be no rubbish spams.

As I truly understand that almost all of you're into your hectic lives.


So, just starting an introduction thread for getting the current status updates of everyone so, that we know our which brother can help us where.

=============================================================

### Intro Message Template
Name:
UET Stream: 
HSS Affiliation: 

Current Residence: 

Professional Vertical:

Current Organization: 

LinkedIn ID: 

Affiliations/Companies where I can help:
