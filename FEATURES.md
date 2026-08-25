# Gautam Chaskar Salesforce Academy - Feature & Functionality Specification

This document serves as the **Master Feature Registry** for the Coaching Classes Website. When introducing new features or refactoring existing code, **all listed features and contracts below MUST be preserved**.

---

## 1. Brand & Personalization Registry

| Attribute | Value / Rule |
| :--- | :--- |
| **Lead Instructor** | Gautam Chaskar (Salesforce Developer @ UST) |
| **Brand Logo** | `<Gautam Chaskar/>` |
| **Certifications (7x)** | Platform Developer II, AI Associate, JavaScript Developer I, Platform App Builder, Platform Developer I, Administrator, Platform Foundations |
| **Contact Email** | `chaskargautam@gmail.com` |
| **Contact Phone / WhatsApp** | `+91 77091 71839` |
| **Locations** | Pune & Nagpur IT Park, Maharashtra, India |
| **Social Links** | LinkedIn (`in/gautamchaskar`), GitHub (`gautamchaskar`) |

---

## 2. Master Feature Checklist & Contract Requirements

### A. Navigation & Theme System
- [x] **Sticky Navigation Header**: Smooth backdrop blur on scroll (`.navbar.scrolled`).
- [x] **Dark / Light Theme Toggle**: Persistent `localStorage.setItem('theme', ...)` switching design variables across all sections.
- [x] **Mobile Drawer Menu**: Slide-down menu with quick CTAs for small screens.
- [x] **Navigation Links**: `#hero`, `#mentor`, `#batches`, `#curriculum`, `#exam-simulator`, `#code-playground`, `#portal`, `#salary-calculator`, `#calculator`, `#faq`.

### B. Hero & Callback Reservation Card
- [x] **Hero Banner**: Displays 7x Certified badge, headline, and stats (98% Placement Rate, 1,500+ Mentored, ₹5,000 Special Fee).
- [x] **Instant Seat Reservation Form**: Captures name, phone, and batch timing with toast feedback.
- [x] **Download Syllabus PDF**: Instant 1-click syllabus roadmap download button.

### C. Lead Instructor Showcase
- [x] **Gautam Chaskar Profile Card**: Photo avatar with initials `GC`, current UST role badge, experience metrics, and 7x Salesforce credentials badges.
- [x] **Direct Social Buttons**: Clickable external links to LinkedIn & GitHub.

### D. Certification Exam Practice Simulator (`#exam-simulator`)
- [x] **Interactive Practice Quiz Engine**: Supports **Salesforce Admin (ADM-201)** and **Platform Developer 1 (PD1)** practice questions.
- [x] **Option Selector & Score Calculator**: Select answers, calculate score %, and display pass/fail feedback with answers.

### E. Apex & LWC Code Playground (`#code-playground`)
- [x] **Production Source Code Viewer**: Tabbed code container showing Apex Trigger Framework, SOQL relationship query, and LWC Imperative Apex calls.
- [x] **1-Click Copy Code Snippet**: Copies code directly to system clipboard with toast notification.

### F. Salesforce Salary & Career Growth Estimator (`#salary-calculator`)
- [x] **Role & Experience Slider**: Interactive slider calculating market CTC packages (₹6.5 LPA to ₹32.0 LPA) based on IT industry benchmarks.

### G. Live Batches Explorer & Category Filter
- [x] **Batches Grid**: Cards for Morning Batch (07:30 AM), Evening Batch (08:30 PM), and Weekend Fast-Track.
- [x] **Category Filter Tabs**: Filter buttons (`All`, `Morning`, `Evening`, `Weekend`) showing/hiding matching batch cards without page refresh.
- [x] **Batch Metrics**: Start date, timing, mode (Live Online + LMS), pricing discount (`₹20,000` ➔ `₹5,000`), and direct modal trigger.

### H. 6-Module Syllabus Accordion (Including Agentforce AI)
- [x] **Interactive Accordions**: Module 1 (Admin), Module 2 (Apex), Module 3 (LWC), Module 4 (Integrations), Module 5 (**Agentforce AI & Einstein AI**), Module 6 (Capstones).

### I. Fee & EMI Calculator
- [x] **Tenure Slider**: Range input (1 to 3 months) calculating monthly installment math in real-time (`discountedFee / months`).

### J. Student LMS Portal & Dashboard (`#portal`)
- [x] **Authentication Manager**: Persistent session stored in `localStorage.setItem('studentSession', ...)`.
- [x] **One-Click Demo Login**: Quick login button for `Aman Sharma` (`aman.student@gmail.com`).
- [x] **Tab 1 - Dashboard Overview**: Progress Bar, Join Live Zoom Class link, Attendance & Hours learned stats.
- [x] **Tab 2 - Enrolled Lectures & Recorded LMS**: HD recorded sessions playlist.
- [x] **Tab 3 - Ask Doubts & Q&A Thread**: Submit questions directly to Gautam Chaskar by topic, view replies in `localStorage`.
- [x] **Tab 4 - Assignments & Labs**: Submit GitHub repository URLs, dynamically update progress.
- [x] **Tab 5 - Certificate Preview**: Dynamic Certificate of Excellence generator signed by Gautam Chaskar.

---

## 3. Preservation Rules for Developers & AI Assistants

> [!CAUTION]
> **Strict Rule**: When making edits or adding new features:
> 1. NEVER remove any element from the Master Feature Checklist above.
> 2. DO NOT overwrite `localStorage` keys (`theme`, `studentSession`).
> 3. DO NOT break any IDs or data-attributes (`data-open-modal`, `data-portal-tab`, `data-filter`, `data-ajax-form`, `data-code-tab`).
> 4. ALWAYS test that the One-Click Demo Student Login works after modifying `app.js`.
> 5. Update this `FEATURES.md` document whenever a new feature is added!
