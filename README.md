# Black Myth: Wukong Gaming Website

A modern, dark-themed gaming website inspired by "Black Myth: Wukong" with stunning cinematic design and smooth animations.

## � Live Demo

**[Visit Live Demo](https://black-myth-wukong-mu.vercel.app/)** - Experience the website in action!

### Preview

![Website Preview](https://i.postimg.cc/Ghv8Pxgp/Screenshot-2026-04-28-151544.png)

## �🎮 Features

- **Dark Fantasy Theme**: Black & gold color scheme with no neon colors
- **Cinematic UI**: Minimal, elegant design with atmospheric effects
- **Custom Fonts**: Serif (Cormorant Garamond) and display fonts (Cinzel)
- **Smooth Animations**: GSAP and Framer Motion for fluid interactions
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Interactive Components**: 3D tilt cards, parallax effects, scroll animations
- **Performance Optimized**: Lazy loading, code splitting, optimized bundle size

## 📋 Sections

1. **Hero** - Fullscreen animated introduction with CTA buttons
2. **About** - Game narrative and key features
3. **Characters** - Interactive character cards with 3D hover effects
4. **Gameplay Features** - Grid layout of core game mechanics
5. **Trailer** - Video section with modal player
6. **Gallery** - Masonry grid with category filter and lightbox
7. **Footer** - Links, social media, and legal information

## 🛠️ Tech Stack

- **React 19** - UI library
- **Vite** - Lightning-fast build tool
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - React animation library
- **GSAP** - Advanced animation platform

## 📦 Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build

Build for production:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Characters.tsx  # Character cards
│   ├── GameplayFeatures.tsx  # Features grid
│   ├── Trailer.tsx     # Video section
│   ├── Gallery.tsx     # Gallery with filters
│   ├── Footer.tsx      # Footer
│   └── index.ts        # Component exports
├── hooks/              # Custom React hooks
│   ├── useInView.ts   # Scroll visibility detection
│   ├── useParallax.ts # Parallax scroll effect
│   └── index.ts
├── App.tsx            # Main app component
├── index.css          # Global styles and Tailwind
└── main.tsx           # App entry point
```

## 🎨 Color Palette

- **Primary Gold**: #c49b3f (rgb(196, 155, 63))
- **Secondary Gold**: #d4b86f
- **Dark Background**: #0a0804
- **Card Background**: #1a1613

## ⚡ Performance Optimizations

- **Code Splitting**: Automatic via Vite
- **Lazy Loading**: Images and heavy components
- **CSS Optimization**: Tailwind purging unused styles
- **Image Optimization**: Use optimized image assets
- **Lighthouse Score**: Targeting 90+ on all metrics

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- High contrast ratios
- Focus indicators on interactive elements

## 🔧 Customization

### Colors

Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  gold: { /* custom gold shades */ },
  obsidian: { /* custom dark shades */ },
}
```

### Fonts

Fonts are imported from Google Fonts in `index.css`. Modify the URL to use different fonts.

### Content

Update component content directly in React components:

- Edit text, descriptions, and feature lists
- Modify hero animations and delays
- Customize gallery images and categories

## 🚀 Deployment

The project is ready for deployment on:

- Vercel
- Netlify
- AWS Amplify
- Azure Static Web Apps
- GitHub Pages

### Build output

- `/dist/` - Production-ready optimized build

## 📄 License

This project is provided as-is for educational and portfolio purposes.

## 🎯 Future Enhancements

- Add actual game trailer embedded video
- Implement real gallery with image upload
- Add form validation for contact section
- Integrate with backend API
- Add dark mode toggle
- Implement advanced analytics
- Add multi-language support

## 💡 Tips

- Adjust animation speeds in component files for your preference
- Modify the fog effects in `index.css` for different atmospheres
- Use Tailwind's `dark:` prefix for additional dark mode support
- Add real images to replace placeholder backgrounds
- Implement scroll-to-section navigation with anchor links

---

**Created with passion for the legend of Sun Wukong** ✨
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
