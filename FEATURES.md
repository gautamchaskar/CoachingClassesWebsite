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
- [x] **Clean Header Links**: Concise marketing links (`Home`, `Instructor`, `Live Batches`, `Syllabus`).

### B. Public Marketing Website (`index.html`) & Auth Flow
- [x] **Hero Banner**: Displays 7x Certified badge, headline, and stats (98% Placement Rate, 1,500+ Mentored, ₹5,000 Special Fee).
- [x] **Login / Register Button**: Header and mobile menu CTA button (`🔑 Login / Register`) triggering the auth modal leading to standalone `dashboard.html`.
- [x] **One-Click Demo Student Login**: Quick login button for `Aman Sharma` (`aman.student@gmail.com`) with instant redirect to `dashboard.html`.

### C. Dedicated Personalised Student Learning Portal (`dashboard.html` / `/dashboard`)
- [x] **Strict Page Auth Guard**: Direct unauthenticated access to `dashboard.html` redirects to `index.html?auth=required#authModal` and triggers login modal.
- [x] **Full-Bleed Full Screen Layout**: `container-fluid` design utilizing 100% viewport width without artificial side margins/padding.
- [x] **Header Controls**: Active batch slot (`⚡ Morning Batch (07:30 AM)`), Theme Switcher, and Logout button (clears session & redirects to `index.html`).
- [x] **Tab 1 - Overview**: Quick stats cards (Enrolled Courses: 3, Active Courses: 1, Completed Courses: 2), Progress Bar, Join Live Zoom Class link, Attendance & Hours learned stats.
- [x] **Tab 2 - My Courses & Lectures (Batch Tile Boxes Grid, Dynamic Playlist & Video LMS)**:
  - **Crisp Filter Pills**: `All Courses (3)`, `Active (1)`, `Completed (2)`.
  - **Enrolled Batch Tile Cards**: 3 interactive batch cards (`☀️ Morning Batch`, `🌙 Evening Batch`, `⚡ Weekend Fast-Track`).
  - **Tile Click Dynamic Sidebar Switch**: Opening any batch automatically converts the left sidebar into the **Module & Lecture Content Playlist Tree** with `← Back to All Batches` button.
  - **Dedicated Right Video Player Workspace**: Displays embedded HD Video Player, video metadata, `Mark Completed` toggle, `Notes PDF` download button, and resource tabs (Notes, Code Snippet, Ask Doubt).
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

### F. Salesforce Salary & Career Growth Insights (`#salary-calculator`)
- [x] **Interactive Role Cards Grid with Skill Pills**: 4 glassmorphic role cards with tech skill pills (`Apex Triggers`, `LWC Framework`, `Agentforce AI`, `Flow Builder`, `Multi-Org Arch`).
- [x] **Refined Industry Package Banner**: Dynamic CTC package range display (₹5.5 LPA to ₹42.0 LPA) with MNC placement benchmarks and career guidance CTA.

---

## 3. Preservation Rules for Developers & AI Assistants

> [!CAUTION]
> **Strict Rule**: When making edits or adding new features:
> 1. NEVER remove any element from the Master Feature Checklist above.
> 2. DO NOT overwrite `localStorage` keys (`theme`, `studentSession`).
> 3. DO NOT break any IDs or data-attributes (`data-open-modal`, `data-portal-tab`, `data-filter`, `data-ajax-form`, `data-code-tab`).
> 4. ALWAYS test that the One-Click Demo Student Login redirects to `dashboard.html`.
> 5. Update this `FEATURES.md` document whenever a new feature is added!
