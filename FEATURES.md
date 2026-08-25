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
- [x] **Clean Header Links**: High-converting essential links (`Home`, `Instructor`, `Live Batches`, `Syllabus`, `Student LMS`).

### B. Public Marketing Website (`index.html`) & Auth Flow
- [x] **Hero Banner**: Displays 7x Certified badge, headline, and stats (98% Placement Rate, 1,500+ Mentored, ₹5,000 Special Fee).
- [x] **Login / Register Button**: Header and mobile menu CTA button (`🔑 Login / Register`) triggering the auth modal leading to standalone `dashboard.html`.
- [x] **One-Click Demo Student Login**: Quick login button for `Aman Sharma` (`aman.student@gmail.com`) with instant redirect to `dashboard.html`.

### C. Dedicated Personalised Student Learning Portal (`dashboard.html` / `/dashboard`)
- [x] **Full-Bleed Full Screen Layout**: `container-fluid` design utilizing 100% viewport width without artificial side margins/padding.
- [x] **Header Controls**: Active batch slot (`⚡ Morning Batch (07:30 AM)`), Theme Switcher, and Logout button (clears session & redirects to `index.html`).
- [x] **Tab 1 - Overview**: Quick stats cards (Enrolled Courses: 3, Active Courses: 1, Completed Courses: 2), Progress Bar, Join Live Zoom Class link, Attendance & Hours learned stats.
- [x] **Tab 2 - My Courses & Lectures (Batch Tile Boxes Grid & Filters)**:
  - **Crisp Filter Pills**: `All Courses (3)`, `Active (1)`, `Completed (2)`.
  - **Enrolled Batch Tile Cards**: 3 interactive batch cards (`☀️ Morning Batch`, `🌙 Evening Batch`, `⚡ Weekend Fast-Track`).
  - **Course Progress Bar per Tile**: Individual progress fill %, lecture count, and total hours per batch box.
  - **Tile Click Navigation**: Clicking any Batch Tile Box opens the detailed lecture playlist inside that batch (`openBatchLectures`).
  - **Back Navigation**: `← Back to Enrolled Batches` button (`closeBatchLectures`).
- [x] **Tab 3 - Q&A & Doubts**: Submit questions directly to Gautam Chaskar by topic, view replies in `localStorage`.
- [x] **Tab 4 - Assignments & Labs**: Submit GitHub repository URLs, dynamically update progress.
- [x] **Tab 5 - Exam Simulator**: ADM-201 & PD1 certification tests.
- [x] **Tab 6 - Orders & Invoices**: View Order `#SFDC-5196` (₹5,000.00) with printable GST receipt.
- [x] **Tab 7 - Certificate**: Dynamic Certificate of Excellence generator signed by Gautam Chaskar.
- [x] **Tab 8 - Settings**: Profile editor form for student name, email, and active batch slot.

### D. Lead Instructor Showcase
- [x] **Gautam Chaskar Profile Card**: Photo avatar with initials `GC`, current UST role badge, experience metrics, and 7x Salesforce credentials badges.
- [x] **Direct Social Buttons**: Clickable external links to LinkedIn & GitHub.

### E. Certification Exam Practice Simulator (`#exam-simulator`)
- [x] **Interactive Practice Quiz Engine**: Supports **Salesforce Admin (ADM-201)** and **Platform Developer 1 (PD1)** practice questions.
- [x] **Option Selector & Score Calculator**: Select answers, calculate score %, and display pass/fail feedback with answers.

### F. Apex & LWC Code Playground (`#code-playground`)
- [x] **Production Source Code Viewer**: Tabbed code container showing Apex Trigger Framework, SOQL relationship query, and LWC Imperative Apex calls.
- [x] **1-Click Copy Code Snippet**: Copies code directly to system clipboard with toast notification.

### G. Salesforce Salary & Career Growth Estimator (`#salary-calculator`)
- [x] **Role & Experience Slider**: Interactive slider calculating market CTC packages (₹6.5 LPA to ₹32.0 LPA) based on IT industry benchmarks.

---

## 3. Preservation Rules for Developers & AI Assistants

> [!CAUTION]
> **Strict Rule**: When making edits or adding new features:
> 1. NEVER remove any element from the Master Feature Checklist above.
> 2. DO NOT overwrite `localStorage` keys (`theme`, `studentSession`).
> 3. DO NOT break any IDs or data-attributes (`data-open-modal`, `data-portal-tab`, `data-filter`, `data-ajax-form`, `data-code-tab`).
> 4. ALWAYS test that the One-Click Demo Student Login redirects to `dashboard.html`.
> 5. Update this `FEATURES.md` document whenever a new feature is added!
