# MKD Designer - Official Portfolio Website

Modern, high-performance portfolio website built with React, Tailwind CSS, and Framer Motion for high-impact product visuals and graphic design presentation.

---

## 📁 Project Structure

```text
mkhan-portfolio-main/
├── public/                  # Static assets & HTML template
│   ├── favicon.ico
│   ├── index.html
│   └── robots.txt
├── src/
│   ├── assets/              # Optimized images, icons & sets
│   │   ├── about/           # About page assets
│   │   ├── hero/            # Hero section visuals
│   │   ├── home/            # Home page graphics & brands
│   │   ├── logo/            # MKD official logos
│   │   └── work/            # Gallery & Amazon listing sets (5 sets)
│   ├── components/          # Reusable UI components
│   │   ├── BackToTop.jsx
│   │   ├── BrandedSelect.jsx
│   │   ├── ContactSection.jsx
│   │   ├── FaqSection.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── TestimonialBrandsSection.jsx
│   │   └── WorkEthicScrollSection.jsx
│   ├── layouts/             # Route layouts
│   │   └── MainLayout.jsx
│   ├── pages/               # Top-level page views
│   │   ├── Home.jsx         # Main Landing Page
│   │   ├── About.jsx        # About Me (Figma specs)
│   │   ├── Work.jsx         # Gallery / Amazon Listings (Auto-sliding)
│   │   ├── Service.jsx      # Services Page
│   │   ├── Contact.jsx      # Contact Page
│   │   └── NotFound.jsx     # 404 Page
│   ├── App.js               # Application Router
│   ├── index.css            # Tailwind & Custom Design Utilities
│   └── index.js             # Entry Point
├── build/                   # Production-ready compiled output
├── tailwind.config.js       # Design system colors & spacing
└── package.json             # Dependencies & scripts
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm start
```
Runs the app on [http://localhost:3000](http://localhost:3000).

### 3. Build for Production
```bash
npm run build
```
Creates an optimized production bundle inside the `build/` directory with zero warnings and minified assets.

---

## 🌐 How to Deploy Live to the Internet

### Option A: Vercel (Recommended - Easiest & Free)
1. Go to [vercel.com](https://vercel.com) and sign in.
2. Click **"Add New Project"** and import this repository (or drag and drop the folder).
3. Framework Preset: **Create React App**.
4. Click **Deploy**. Your website will be live with free SSL in 60 seconds.

### Option B: Netlify
1. Go to [netlify.com](https://netlify.com).
2. Drag and drop the `build/` folder into the Netlify Dashboard.
3. Your site is immediately live.

### Option C: cPanel / Apache / Shared Hosting / VPS
1. Run `npm run build` locally.
2. Open File Manager in cPanel or FTP into your server.
3. Upload everything **inside the `build/` folder** directly into your `public_html/` directory.
4. Ensure standard `.htaccess` URL rewrite is enabled for single-page routing:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

---

## 🛠️ Key Technologies
- **React 18** - Component-based architecture
- **Tailwind CSS** - Utility-first modern responsive styling
- **Framer Motion** - Silky smooth scroll-driven & sliding animations
- **React Router v6** - Dynamic client-side routing

