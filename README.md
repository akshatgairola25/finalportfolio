# Personal Portfolio - Akshat Gairola

A modern, responsive personal portfolio website built with React, TypeScript, and Tailwind CSS. Features an introduction video, assignment showcase, and interactive components.

## 🌟 Features

- **Hero Section** - Eye-catching introduction with your intro video
- **Introduction Video** - Auto-playing intro video display
- **Assignment Showcase** - Download and view your submitted assignments
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Beautiful motion effects using Framer Motion
- **Modern UI** - Built with Radix UI components and Tailwind CSS
- **Social Links** - GitHub, LinkedIn, and Email integration

## 📋 Project Structure

```
PersonalPortfolio-main/
├── src/
│   ├── components/
│   │   ├── Hero.tsx                 # Main hero section with video & assignment
│   │   ├── About.tsx                # About section
│   │   ├── Skills.tsx               # Skills showcase
│   │   ├── Projects.tsx             # Projects display
│   │   ├── Education.tsx            # Education details
│   │   ├── Contact.tsx              # Contact section
│   │   ├── Navigation.tsx           # Navigation bar
│   │   ├── Footer.tsx               # Footer
│   │   ├── introvideo/
│   │   │   └── self intro.mp4       # Introduction video
│   │   ├── Assignments/
│   │   │   └── pese swoc.pdf        # Assignment file
│   │   └── ui/                      # Radix UI components
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/PersonalPortfolio-main.git

# Navigate to project directory
cd PersonalPortfolio-main

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` in your browser.

## 📝 Customization

### Update Your Information
- **Name**: Edit `src/components/Hero.tsx` - Update "Akshat Gairola"
- **Title**: Edit subtitle in Hero component
- **Bio**: Update description text
- **Links**: Update GitHub, LinkedIn, Email URLs

### Add Your Media
- **Intro Video**: Place in `src/components/introvideo/self intro.mp4`
- **Assignment**: Add your file to `src/components/Assignments/`

## 🎬 Video & Assignment Setup

### Introduction Video
- Located at: `src/components/introvideo/self intro.mp4`
- Format: MP4 (recommended)
- Displays in: Hero section
- Features: Auto-play, loop, muted

### Assignment Upload
- Located at: `src/components/Assignments/pese swoc.pdf`
- Formats: PDF, DOC, DOCX
- Displays in: Assignment section below video
- Features: Preview and download button

## 🛠️ Build

```bash
# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

### GitHub Pages
1. Update `vite.config.ts` with your repo name
2. Run `npm run build`
3. Push `dist/` to `gh-pages` branch

## 📦 Key Dependencies

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Radix UI** - Components
- **Lucide React** - Icons

## 📄 License

MIT License - feel free to use this template!

## 👤 Author

**Akshat Gairola**
- GitHub: [@YOUR_USERNAME](https://github.com/YOUR_USERNAME)
- LinkedIn: [Your Profile](https://linkedin.com/in/YOUR_PROFILE)
- Email: your.email@example.com

---

**Made with ❤️ using React & Vite**
