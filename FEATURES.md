# Vajra Academy - Feature & Functionality Specification

This document serves as the **Master Feature Registry** for the Coaching Classes Website. When introducing new features or refactoring existing code, **all listed features and contracts below MUST be preserved**.

---

## 1. Brand & Organization Registry

| Attribute | Value / Rule |
| :--- | :--- |
| **Academy Name** | **Vajra Academy** |
| **Brand Logo Asset** | `logo.png` (Neon Vajra electric shield emblem) |
| **Certifications (7x)** | Platform Developer II, AI Associate, JavaScript Developer I, Platform App Builder, Platform Developer I, Administrator, Platform Foundations |
| **Contact Email** | `contact@vajraacademy.com` |
| **Contact Phone / WhatsApp** | `+91 77091 71839` |
| **Locations** | Pune & Nagpur IT Park, Maharashtra, India |

---

## 2. Master Feature Checklist & Contract Requirements

### A. Navigation & Theme System
- [x] **Sticky Navigation Header**: Smooth backdrop blur on scroll (`.navbar.scrolled`).
- [x] **Brand Logo Image**: High-resolution `logo.png` logo image asset with neon electric Vajra emblem and glowing drop-shadow.
- [x] **Dark / Light Theme Toggle**: Persistent `localStorage.setItem('theme', ...)` switching design variables across all sections.
- [x] **Mobile Drawer Menu**: Slide-down menu with quick CTAs for small screens.
- [x] **Clean Header Links**: Concise marketing links (`Home`, `Instructor`, `Live Batches`, `Syllabus`).

### B. Public Marketing Website (`index.html`) & Auth Flow
- [x] **Hero Banner**: Displays 7x Certified badge, headline, stats (98% Placement Rate, 1,500+ Mentored, ₹5,000 Special Fee), and quick demo booking form.
- [x] **Top-Positioned Salesforce Career & Salary Insights (`#salary-calculator`)**: Positioned right after the Hero section for high visitor attraction; features interactive role cards (`💻 Salesforce Developer`, `🤖 AI & Agentforce Specialist`, `⚡ Salesforce Administrator`, `🏗️ Technical Architect`) with skill tags and dynamic package ranges (₹5.5 LPA to ₹42.0 LPA).
- [x] **Enhanced Salesforce Full Stack Live Batches (`#batches`)**: Features an Early Bird Special offer banner, live filter pills, batch timing cards (`07:30 AM IST Morning`, `08:30 PM IST Evening`, `10:00 AM IST Weekend`), seat urgency badges (`ONLY 3 SEATS LEFT`, `ENROLLING FAST`, `WEEKEND SPECIAL`), and quick seat reservation CTAs.
- [x] **Login / Register Button**: Header and mobile menu CTA button (`🔑 Login / Register`) triggering the auth modal leading to standalone `dashboard.html`.
- [x] **One-Click Demo Student Login**: Quick login button for `Aman Sharma` (`aman.student@gmail.com`) with instant redirect to `dashboard.html`.

### C. Dedicated Personalised Student Learning Portal (`dashboard.html` / `/dashboard`)
- [x] **Strict Page Auth Guard**: Direct unauthenticated access to `dashboard.html` redirects to `index.html?auth=required#authModal` and triggers login modal.
- [x] **Full-Bleed Full Screen Layout**: `container-fluid` design utilizing 100% viewport width without artificial side margins/padding (`padding: 0.5rem 0.75rem`).
- [x] **Zero-Space Layout**: Removed vertical space after navbar (`padding-top: 0.5rem`), tightened grid gap between sidebar/tabbar and content (`gap: 0.75rem`), and optimized spacing inside LMS video player.
- [x] **Header Controls**: Active batch slot (`⚡ Morning Batch (07:30 AM)`), Theme Switcher, and Logout button (clears session & redirects to `index.html`).
- [x] **Tab 1 - Overview**: Quick stats cards (Enrolled Courses: 3, Active Courses: 1, Completed Courses: 2), Progress Bar, Join Live Zoom Class link, Attendance & Hours learned stats.
- [x] **Tab 2 - My Courses & Lectures (Batch Tile Boxes Grid, Dynamic Playlist & Video LMS)**:
  - **Crisp Filter Pills**: `All Courses (3)`, `Active (1)`, `Completed (2)`.
  - **Enrolled Batch Tile Cards**: 3 interactive batch cards (`☀️ Morning Batch`, `🌙 Evening Batch`, `⚡ Weekend Fast-Track`).
  - **Tile Click Dynamic Sidebar Switch**: Opening any batch automatically converts the left sidebar into the **Module & Lecture Content Playlist Tree** with `← Back to All Batches` button.
  - **Collapsible Module Sections (Fold & Unfold Accordion)**: Interactive module headers (`.playlist-module-header`) with rotation chevrons (`▼` vs `▶`) to fold/unfold module contents cleanly.
  - **Enhanced Full Video Title Visibility**: Multi-line title wrapping and dedicated duration badges so video names are 100% visible without text truncation.
  - **Persistent Completion Status**: Marking any lecture as completed (`✓ Completed`) persists in `localStorage.getItem('completedLectures')`, highlighting the item with green checkmark badges (`✅`) and `✓ Completed` pills across page reloads and switches.
  - **Dedicated Right Video Player Workspace**: Displays embedded HD Video Player, video metadata, `Mark Completed` toggle, `Notes PDF` download button, and resource tabs (Notes, Code Snippet, Ask Doubt).
- [x] **Tab 3 - Q&A & Doubts**: Submit questions directly to Vajra Academy instructors by topic, view replies in `localStorage`.
- [x] **Tab 4 - Assignments & Labs**: Submit GitHub repository URLs, dynamically update progress.
- [x] **Tab 5 - Exam Simulator**: ADM-201 & PD1 certification tests (Dedicated in LMS Portal).
- [x] **Tab 6 - Orders & Invoices**: View Order `#SFDC-5196` (₹5,000.00) with printable GST receipt.
- [x] **Tab 7 - Certificate**: Dynamic Certificate of Excellence generator issued by Vajra Academy.
- [x] **Tab 8 - Settings**: Profile editor form for student name, email, and active batch slot.

### D. Lead Instructor Showcase
- [x] **Vajra Academy Profile Card**: Photo avatar with initials `VA`, 7x Salesforce credentials badges, and MNC lead architect experience metrics.

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
