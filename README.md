# Modern Developer Portfolio

A high-performance, responsive, and visually stunning developer portfolio showcasing expertise in API development, security-first backend architecture, and modern web application design.

Built using **React (Vite)**, **TypeScript**, **Framer Motion**, **Tailwind CSS**, and **Netlify Serverless Functions**.

---

## 🚀 Key Features

* **Interactive Projects & Certifications**: Deep links to credentials (Credly, badgr, Microsoft) and active GitHub codebases.
* **Visitor Geolocation Tracking**: Custom Netlify Serverless Functions that notify the developer of new visits (location, IP, and local time) using the **Resend API**.
* **Activity & Click Tracking**: Tracks which projects, resumes, and credentials recruiters click on, sending a summary email digest on page exit.
* **Modern UI/UX**: Saffron/orange accent theme with a sleek glassmorphic card design, grain overlay, and custom micro-animations.

---

## 🛠️ Tech Stack

* **Frontend**: React, TypeScript, Vite, Tailwind CSS, Framer Motion, Wouter (routing)
* **Backend / Tracking**: Netlify Functions (Node.js/ESM), Resend API (email notifications)
* **Design Systems**: Lucide Icons, Shadcn-inspired UI components

---

## 📦 Getting Started

### 1. Local Development
1. Clone the repository and navigate to the directory:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
   * Open `http://localhost:4173/` in your browser.

### 2. Netlify Serverless Setup
Create a `.env` file in the root directory for local function testing:
```env
RESEND_API_KEY=your_resend_api_key
TO_EMAIL=your_email@domain.com
```

---

## ☁️ Deployment (Netlify)

This project is pre-configured with a [netlify.toml](netlify.toml) file. To deploy:
1. Connect your repository to **Netlify**.
2. Add your environment variables in Netlify (**Site Configuration > Environment Variables**):
   * `RESEND_API_KEY`: Your Resend API key.
   * `TO_EMAIL`: The recipient email address for tracking notifications.
3. Trigger a manual deploy or push to your `main` branch to auto-deploy.
