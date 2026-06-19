<div align="center">

<img src="https://edufilo.vercel.app/favicon.ico" width="60" height="60" alt="EduFilos Logo" />

# EduFilos

**মাদ্রাসা ম্যানেজমেন্টের জন্য স্মার্ট SaaS প্ল্যাটফর্ম**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-edufilo.vercel.app-0070f3?style=flat-square&logo=vercel)](https://edufilo.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16.2.7-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19.2.4-61dafb?style=flat-square&logo=react)](https://react.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v4-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)

</div>

---

## ✨ Features

- 🌐 **Bilingual UI** — Bengali/English switching via React Context API
- 🌙 **Dark/Light Mode** — `next-themes` + CSS custom properties
- ⚡ **Performance Optimized** — Critical CSS via `critters`, `next/font`, `next/image`
- 💳 **Payment Integration** — SSLCommerz checkout flow
- 🎨 **GSAP Animations** — Scroll-triggered section transitions
- 📱 **Fully Responsive** — Mobile-first with Tailwind CSS v4

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Styling | Tailwind CSS v4 |
| Animation | GSAP 3 |
| Icons | Lucide React, React Icons |
| Theming | next-themes |
| Slider | Swiper.js |
| Notifications | React Hot Toast |
| CSS Optimization | Critters |
| Deployment | Vercel |

---

## 🚀 Getting Started

```bash
git clone https://github.com/your-username/edufilos.git
cd edufilos
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

```bash
npm run dev      # Development
npm run build    # Production build
npm run start    # Run production locally
npm run lint     # Lint
```

---

## 📁 Project Structure

```
edufilos/
├── app/
│   ├── layout.jsx          # Root layout (fonts, providers)
│   ├── page.jsx            # Entry point (routing only)
│   └── (routes)/
├── components/
│   ├── ui/                 # Reusable primitives
│   ├── sections/           # Page sections
│   └── shared/             # Navbar, Footer
├── context/
│   └── LanguageContext.jsx # BN/EN language context
├── data/                   # Static section content
├── public/                 # Static assets
└── styles/
    └── globals.css         # Theme tokens, CSS variables
```

---

## 🔐 Environment Variables

```env
SSLCOMMERZ_STORE_ID=your_store_id
SSLCOMMERZ_STORE_PASSWORD=your_store_password
SSLCOMMERZ_IS_LIVE=false
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

> ⚠️ Never commit `.env.local` to version control.

---

## 🌐 Multi-Language Support

Custom bilingual system — no third-party i18n library.

```jsx
// context/LanguageContext.jsx
export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("BN");
  const toggle = () => setLang((prev) => (prev === "BN" ? "EN" : "BN"));
  return (
    <LanguageContext.Provider value={{ lang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}
```

```js
// data/heroData.js
export const content = {
  BN: { heading: "মাদ্রাসা ম্যানেজমেন্ট সহজ করুন" },
  EN: { heading: "Simplify Madrasha Management" },
};
```

---

<div align="center">

Built with ❤️ using [Next.js](https://nextjs.org) · Deployed on [Vercel](https://vercel.com)

</div>