# Workmate – HR Management & Task Management Mobile Application

> Mobile-first HR Management and Task Management frontend application built with **React.js**, **Vite**, **React Router DOM**, and **CSS3**, reproducing the Figma mobile design system.

---

## 📱 Live Highlights & Architecture

- **Mobile-First Experience**: Designed specifically for modern mobile viewports (360×800, 375×812, 390×844, 414×896, 430×932) with native full-screen responsiveness.
- **Desktop Device Shell**: On desktop, the app is centered in an ultra-crisp mobile frame featuring a dynamic island, status bar, and realistic device bezel.
- **Figma Dual State (Row 1 & Row 2)**: Toggle between **Populated State** (active tasks, claims, leaves) and **Empty State** ("No Activity Available", "No Working Time", "No Task Assigned", "No Expense Submitted", "No Leave Submitted") via the top toolbar button.
- **Screen Navigation Explorer**: Instant jump drawer to test every onboarding slide, login method, registration step, password recovery step, and HR dashboard tab.

---

## 🚀 Screens & Flow Implementation

### 1. Onboarding Flow (4 Screens)
- **Screen 1 – Welcome to Workmate!**
  - Title: *Welcome to Workmate!*
  - Description: *Make Smart Decisions! Set clear timelines for projects and celebrate your achievements!*
  - Floating task management SVG illustration with checkmarks and calendar badge.
  - Purple gradient Next button & outlined Skip button.
- **Screen 2 – Manage Stress Effectively**
  - Description: *Stay Balanced! Track your workload and maintain a healthy stress level with ease.*
  - Workload balance analytics gauge illustration.
- **Screen 3 – Plan for Success**
  - Description: *Your Journey Starts Here! Earn achievement badges as you conquer your tasks. Let's get started!*
  - Golden trophy and achievement badge illustration.
- **Screen 4 – Final Onboarding**
  - Title: *Navigate Your Work Journey Efficient & Easy*
  - Description: *Increase your work management & career development radically.*
  - Dual action buttons: **Sign In** and **Sign Up**.

### 2. Multi-Method Authentication (Sign In)
- **A. Email Sign In**:
  - Work email input, password input with toggle show/hide visibility.
  - "Remember me" checkbox and "Forgot Password?" link.
  - Social login alternatives (Google, Apple).
- **B. Phone Number Sign In**:
  - Country code dropdown with flags (+1, +44, +91, +65, +971, etc.).
  - Phone number validation and interactive 6-digit SMS OTP verification.
  - Countdown timer (45s) and Resend OTP functionality.
- **C. Employee ID Sign In**:
  - Designated Employee ID format (`EMP-2024-089`), Organization Code, and Security PIN.

### 3. Multi-Step Sign Up (Registration Flow)
- **Step 1 (Personal Information)**: Legal First Name, Last Name, Work Email, Mobile Number.
- **Step 2 (Employee Credentials)**: Employee ID, Department dropdown, Job Title, Company domain.
- **Step 3 (Password & Security)**: Password creation, confirmation, and real-time security checklist (8+ chars, uppercase/lowercase, numeric, match).
- **Step 4 (OTP Verification)**: 6-digit code verification with auto-focus and resend timer.
- **Step 5 (Profile & Legal Agreements)**: Workspace avatar selection, location, Terms of Service and Privacy agreement checkboxes.
- **Step 6 (Success Screen)**: Celebratory confirmation card with direct navigation to Home.
*Note: Form state is preserved when using the Back button so user data is never lost.*

### 4. Complete Forgot Password Recovery Flow
- **Step 1 (Recovery Request)**: Choose recovery via Email or Phone with format validation.
- **Step 2 (OTP Verification)**: Interactive 6-digit verification code entry with resend timer.
- **Step 3 (Create New Password)**: New password and confirmation with live criteria validation.
- **Step 4 (Success Screen)**: Confirmation screen and direct return to Sign In.

### 5. Home Screen & Connected HR Modules (5 Tabs)
1. **Home Tab**:
   - Header with user profile (*Tariqul Islam, Senior UI/UX Designer*), verified badge, notifications bell.
   - Purple gradient **Your Daily Summary** banner.
   - **Today's Activity** (completed tasks with assignee avatars and Completed status pills).
   - **Friday Task** (active in-progress deliverables with progress bars, due dates, and assignee avatars).
2. **Clock In Tab**:
   - Live breakdown card with real-time active timer (*08:35:12 Hrs*) and target working hours.
   - Interactive **Clock-In / Clock-Out** toggle with feedback toasts.
   - 30-day attendance history log with work hours and status tags.
3. **Tasks Tab (Challenges Awaiting)**:
   - Summary of Task Status (Total, In Progress, Done metric cards).
   - **Burn In – Burnout Risk** health indicator with workload recommendation.
   - Filter pills: *All*, *In Progress*, *Done*.
   - **Create Task** interactive bottom-sheet modal.
4. **Expense Summary Tab**:
   - Total Expense summary cards: *Total ($1,212)*, *Claimed ($980)*, *Pending ($232)*.
   - Status tabs: *Pending*, *Approved*, *Rejected*.
   - Detail cards with amount, date, category, and receipt number.
   - **Claim Expense** interactive submission modal.
5. **Leave Summary Tab**:
   - Leave metrics: *Total Leave (20 Days)*, *Leave Left (8 Days)*.
   - Filter tabs: *Pending*, *Approved*, *Rejected*.
   - Detail cards with duration dates, days count, and approval status.
   - **Submit Leave** interactive application modal.

---

## 🛠️ Technology Stack

- **React 19**: Modern functional components and hooks (`useState`, `useEffect`, `useRef`).
- **Vite 8**: Rapid development and optimized production bundling.
- **React Router DOM 7**: Seamless client-side routing and browser back/forward history.
- **Lucide React**: Modern iconography matching Figma vector styles.
- **CSS3 / Design Tokens**: Reusable variables for purple gradient (`#7B68EE` to `#5843E5`), lavender backgrounds (`#F6F7FC`), typography (`Plus Jakarta Sans`), and status accents.

---

## 💻 Getting Started Locally

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 🚢 Deployment to Vercel or Netlify

### Vercel
1. Push repository to GitHub.
2. Import project into [Vercel](https://vercel.com).
3. Framework preset: **Vite**.
4. Build command: `npm run build`, Output directory: `dist`.

### Netlify
1. Connect repository in [Netlify](https://www.netlify.com).
2. Build command: `npm run build`, Publish directory: `dist`.
3. Add single-page application redirect rule in `public/_redirects`:
   ```
   /*    /index.html   200
   ```
