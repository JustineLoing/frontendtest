# JustLoing's Project

> Personal portfolio website for **Clifford Justin Loing** — Frontend Developer & Tech Enthusiast, built with an iOS-inspired **Liquid Glass** design aesthetic.

---

## ✨ Features

- 🪟 **Liquid Glass UI** — iOS-inspired glassmorphism panels with light-beam reflections and backdrop blur
- 🎞️ **Cinematic Smooth Scrolling** — Powered by [Lenis](https://github.com/darkroomengineering/lenis) with buttery-smooth easing
- 📍 **Section Navigation** — Fixed NavigationBar + SideIndicators with active-section tracking via IntersectionObserver
- 🎵 **Spotify Player Widget** — Floating music player overlay
- 💼 **Projects Showcase** — Filterable project cards (Frontend / Dashboard / Tools)
- 🌐 **Social Links** — GitHub, LinkedIn, Instagram, Discord
- 📱 **Fully Responsive** — Optimized for mobile, tablet, and desktop
- ⚡ **Vite + React 19** — Blazing-fast dev server and build tooling

---

## 🗂️ Project Structure

```
new-project/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AboutSection.jsx       # About me section
│   │   ├── Footer.jsx             # Fixed footer with navigation
│   │   ├── HeroSection.jsx        # Hero / landing section
│   │   ├── NavigationBar.jsx      # Top fixed nav with active section highlight
│   │   ├── ProjectsSection.jsx    # Featured projects with filter pills
│   │   ├── SideIndicators.jsx     # Left-side scroll section dots
│   │   ├── SocialSection.jsx      # Social media links (GitHub, IG, Discord, etc.)
│   │   └── SpotifyPlayer.jsx      # Floating Spotify-style music player
│   ├── App.jsx                    # Root component: Lenis setup, layout, routing
│   ├── index.css                  # Global styles & Liquid Glass utilities
│   └── main.jsx                   # Entry point
├── index.html
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| [React 19](https://react.dev/) | UI framework |
| [Vite 8](https://vite.dev/) | Build tool & dev server |
| [Tailwind CSS 4](https://tailwindcss.com/) | Utility-first styling |
| [Lenis](https://github.com/darkroomengineering/lenis) | Smooth scroll |
| Vanilla CSS | Custom Liquid Glass effects |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** v9+

### Installation

```bash
# Clone the repository
git clone https://github.com/JustineLoing/new-project.git
cd new-project

# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

---

## 🎨 Design System

The UI is built around an **iOS Liquid Glass** design language:

- **Backdrop blur** (`backdrop-blur-2xl`) on all glass panels
- **Translucent backgrounds** (`bg-white/[0.09]`) with subtle borders (`border-white/20`)
- **Light beam effect** — Custom CSS `::before` pseudo-element animations
- **In-view transitions** — Panels animate in when entering the viewport via `IntersectionObserver`
- **Color palette** — Dark slate base (`slate-950`) with white/transparent accents
- **Typography** — [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## 🌐 Social

| Platform | Handle |
|---|---|
| GitHub | [@JustineLoing](https://github.com/JustineLoing) |
| Instagram | [@itzmejustloing](https://instagram.com/itzmejustloing) |

---

## 📄 License

This project is personal and not under an open-source license. All rights reserved © Clifford Justin Loing.
