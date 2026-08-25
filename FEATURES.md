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
- [x] **Navigation Links**: `#hero`, `#mentor`, `#batches`, `#curriculum`, `#portal`, `#calculator`, `#faq`.

### B. Hero & Callback Reservation Card
- [x] **Hero Banner**: Displays 7x Certified badge, headline, and stats (98% Placement Rate, 1,500+ Mentored, ₹5,000 Special Fee).
- [x] **Instant Seat Reservation Form**: Captures name, phone, and batch timing with toast feedback.

### C. Lead Instructor Showcase
- [x] **Gautam Chaskar Profile Card**: Photo avatar with initials `GC`, current UST role badge, experience metrics, and 7x Salesforce credentials badges.
- [x] **Direct Social Buttons**: Clickable external links to LinkedIn & GitHub.

### D. Live Batches Explorer & Category Filter
- [x] **Batches Grid**: Cards for Morning Batch (07:30 AM), Evening Batch (08:30 PM), and Weekend Fast-Track.
- [x] **Category Filter Tabs**: Filter buttons (`All`, `Morning`, `Evening`, `Weekend`) showing/hiding matching batch cards without page refresh.
- [x] **Batch Metrics**: Start date, timing, mode (Live Online + LMS), pricing discount (`₹20,000` ➔ `₹5,000`), and direct modal trigger.

### E. 5-Module Syllabus Accordion
- [x] **Interactive Accordions**: Module 1 (Admin), Module 2 (Apex), Module 3 (LWC), Module 4 (Integrations), Module 5 (Capstones).
- [x] **Accordion Behavior**: Click to expand/collapse module topic lists.

### F. Fee & EMI Calculator
- [x] **Tenure Slider**: Range input (1 to 3 months) calculating monthly installment math in real-time (`discountedFee / months`).
- [x] **Savings Display**: Calculates instant early-bird savings (`₹15,000`).

### G. Student LMS Portal & Dashboard (`#portal`)
- [x] **Authentication Manager**: Persistent session stored in `localStorage.setItem('studentSession', ...)`.
- [x] **One-Click Demo Login**: Quick login button for `Aman Sharma` (`aman.student@gmail.com`).
- [x] **Tab 1 - Dashboard Overview**:
  - Overall Batch Progress Bar (% fill).
  - Live Zoom Class Gateway button ("Starts in 45m").
  - Stats: Modules Completed (3/5), Hours Learned (42 Hours), Live Attendance (96%).
- [x] **Tab 2 - Enrolled Lectures & Recorded LMS**:
  - List of HD recorded sessions with 1-click video playback trigger.
- [x] **Tab 3 - Ask Doubts & Q&A Thread**:
  - Interactive form to post questions directly to Gautam Chaskar by topic.
  - Renders Q&A thread with `Pending Instructor Review` / `Answered` status badges and instructor replies stored in `localStorage`.
- [x] **Tab 4 - Assignments & Labs**:
  - Form to submit GitHub repository URLs for lab evaluation.
  - Updates student progress dynamically upon submission.
- [x] **Tab 5 - Certificate Preview**:
  - Certificate of Excellence generator displaying student name and signed by Gautam Chaskar.

### H. Global Interactivity & Floating Widgets
- [x] **Toast Notification System**: Non-intrusive floating toasts for all key actions (Login, Form submission, Doubt posting, Theme switch).
- [x] **Floating Action Buttons**: Fixed WhatsApp button (`https://wa.me/+917709171839`) and Phone Call button (`tel:+917709171839`).

---

## 3. Preservation Rules for Developers & AI Assistants

> [!CAUTION]
> **Strict Rule**: When making edits or adding new features:
> 1. NEVER remove any element from the Master Feature Checklist above.
> 2. DO NOT overwrite `localStorage` keys (`theme`, `studentSession`).
> 3. DO NOT break any IDs or data-attributes (`data-open-modal`, `data-portal-tab`, `data-filter`, `data-ajax-form`).
> 4. ALWAYS test that the One-Click Demo Student Login works after modifying `app.js`.
> 5. Update this `FEATURES.md` document whenever a new feature is added!
