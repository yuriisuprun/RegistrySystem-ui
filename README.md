# Studio Legale - Modern Law Firm Website

A modern, professional law firm website built with React, featuring a mobile-first design inspired by high-end Italian legal studios. The website supports multiple languages (Italian, English, Russian) and includes elegant animations and responsive design.

## 🎯 Features

- **Mobile-First Design**: Optimized for all devices with responsive layouts
- **Multi-Language Support**: Italian, English, and Russian translations
- **Modern UI/UX**: Dark theme with gold accents, smooth animations
- **Professional Sections**:
  - Hero section with compelling call-to-action
  - Services showcase with practice areas
  - About section with team information
  - Contact form with validation
  - Sticky navigation with smooth scrolling

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React i18next** - Internationalization
- **Framer Motion** - Smooth animations
- **Font Awesome** - Professional icons

## 📱 Design System

### Colors
- **Background**: `#0f1720` (Dark blue/black)
- **Accent**: `#c8a96a` (Gold/beige)
- **Text**: `#ffffff` / `#cccccc`

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

### Components
- Responsive grid layouts
- Hover animations and transitions
- Smooth scrolling navigation
- Form validation
- Lazy-loaded images

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd studio-legale-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with language switcher
│   ├── Hero.jsx            # Hero section with CTA
│   ├── Services.jsx        # Practice areas grid
│   ├── About.jsx           # About section with stats
│   ├── CTA.jsx             # Call-to-action section
│   └── Footer.jsx          # Contact form and footer
├── i18n/
│   └── config.js           # Language configuration
├── App.jsx                 # Main app component
├── main.jsx               # React entry point
└── index.css              # Global styles and Tailwind
```

## 🌐 Language Support

The website supports three languages:
- **Italian (IT)** - Default language
- **English (EN)** - Full translation
- **Russian (RU)** - Full translation

Language switching is available in the top navigation bar.

## 📧 Contact Form

The contact form includes:
- Name and email validation
- Phone number (optional)
- Subject selection (practice areas)
- Message textarea
- Privacy policy checkbox
- Form submission handling

## 🎨 Customization

### Adding New Languages
1. Add translations to `src/i18n/config.js`
2. Add language button to navbar
3. Update language switcher logic

### Modifying Colors
Update the color scheme in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    dark: '#0f1720',    // Background
    gold: '#c8a96a',    // Accent
    light: '#ffffff',   // Text
    gray: '#cccccc'     // Secondary text
  }
}
```

### Adding New Sections
1. Create component in `src/components/`
2. Import and add to `App.jsx`
3. Add navigation link in `Navbar.jsx`
4. Add translations to i18n config

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

## 🔧 Performance Optimizations

- Lazy loading for images
- Code splitting with Vite
- Optimized bundle size
- Smooth animations with CSS transforms
- Efficient re-renders with React hooks

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions about this project, please contact the development team.