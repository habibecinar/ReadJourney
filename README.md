# Read Journey 📚

A modern, feature-rich web application for tracking your reading progress, managing your personal book library, and analyzing your reading statistics with beautiful visualizations.

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://readjourney.netlify.app)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.3.3-blue.svg)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

## 🎯 About The Project

Read Journey is a comprehensive book reading tracker that helps users:
- 📚 Discover and explore recommended books with advanced filtering
- 📖 Build and manage their personal library with ease
- ⏱️ Track reading progress with detailed session history
- 📊 Visualize reading habits through interactive charts and statistics
- 🎯 Monitor reading speed and completion rates
- ✨ Beautiful, responsive design that works on all devices

## 🎨 Design

- **Figma Design**: [View on Figma](https://www.figma.com/file/z3m0rdBcEfLTJUBDkAKhWQ/BOOKS-READING?type=design&node-id=18743%3A4973&mode=design&t=Hi1KTaUJMogWXZzz-1)
- **Technical Specification**: [Backend API Documentation](https://readjourney.b.goit.study/api-docs/)

## 🛠️ Technologies Used

### Core Technologies
- **React 18** - UI library
- **TypeScript** - Type-safe development
- **Vite** - Fast build tool and dev server

### State Management & Routing
- **Redux Toolkit** - Centralized state management
- **Redux Persist** - Persist and rehydrate store
- **React Router v6** - Client-side routing

### Backend & Authentication
- **Firebase** - Authentication and data storage
- **Axios** - HTTP client for API calls

### Forms & Validation
- **React Hook Form** - Performant form management
- **Yup** - Schema validation

### UI & Styling
- **CSS Modules** - Scoped styling
- **React Toastify** - Toast notifications
- **clsx** - Conditional className utility

## ✨ Features

### 🔐 Authentication
- ✅ User registration with email validation
- ✅ Secure login/logout functionality
- ✅ Protected routes for authenticated users
- ✅ Persistent sessions with Redux Persist
- ✅ JWT token management

### 📚 Book Discovery
- ✅ Browse recommended books with server-side pagination
- ✅ Advanced filtering by title and author
- ✅ Book details modal with cover image
- ✅ One-click add to library
- ✅ Beautiful book cards with hover effects

### 📖 Library Management
- ✅ Add custom books to library
- ✅ Remove books with confirmation
- ✅ Filter by reading status (unread, in-progress, done)
- ✅ Visual status indicators
- ✅ Quick access to start reading

### ⏱️ Reading Tracking
- ✅ Start/stop reading sessions with page tracking
- ✅ Automatic reading speed calculation
- ✅ Reading diary with session history
- ✅ Delete individual reading sessions
- ✅ Book completion detection and celebration

### 📊 Statistics & Analytics
- ✅ Circular progress indicator
- ✅ Total pages read counter
- ✅ Average reading speed metrics
- ✅ Reading session count
- ✅ Visual progress bars
- ✅ Real-time statistics updates

### 📱 Responsive Design
- ✅ Mobile-first approach (320px+)
- ✅ Tablet optimization (768px+)
- ✅ Desktop experience (1440px+)
- ✅ Retina display support
- ✅ Touch-friendly interactions
- ✅ Adaptive layouts and typography

### 🎨 User Experience
- ✅ Smooth animations and transitions
- ✅ Modal dialogs for important actions
- ✅ Toast notifications for user feedback
- ✅ Loading states and spinners
- ✅ Empty states with helpful messages
- ✅ Keyboard navigation (ESC to close modals)
- ✅ Accessible UI components

## 🛠️ Built With

### Core Technologies
- **React 18.2** - UI library
- **TypeScript 5.3** - Type-safe JavaScript
- **Vite 5.0** - Fast build tool and dev server
- **React Router 6.21** - Client-side routing
- **Redux Toolkit 2.0** - State management
- **Redux Persist** - State persistence

### Form & Validation
- **React Hook Form 7.49** - Performant form handling
- **Yup 1.3** - Schema validation

### HTTP & API
- **Axios 1.6** - HTTP client

### Styling
- **CSS Modules** - Scoped component styling
- **Modern CSS** - Flexbox, Grid, Custom Properties

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Firebase account

### Installation

1. Clone the repository
\`\`\`bash
git clone https://github.com/yourusername/readjourney.git
cd readjourney
\`\`\`

2. Install dependencies
\`\`\`bash
npm install
\`\`\`

3. Create environment file
\`\`\`bash
cp .env.example .env
\`\`\`

4. Configure your Firebase credentials in `.env`

5. Start development server
\`\`\`bash
npm run dev
\`\`\`

6. Build for production
\`\`\`bash
npm run build
\`\`\`

## 📁 Project Structure

\`\`\`
readjourney/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, fonts
│   ├── components/     # Reusable components
│   │   ├── common/    # Shared components
│   │   ├── layout/    # Layout components
│   │   └── ...
│   ├── pages/         # Page components
│   ├── features/      # Redux slices
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API services
│   ├── types/         # TypeScript types
│   ├── utils/         # Helper functions
│   ├── styles/        # Global styles
│   ├── App.tsx        # Root component
│   └── main.tsx       # Entry point
├── .env.example       # Environment variables template
├── index.html         # HTML template
├── package.json       # Dependencies
├── tsconfig.json      # TypeScript config
└── vite.config.ts     # Vite config
\`\`\`

## 🎨 Design

Design prototype available on Figma:
[View Design](https://www.figma.com/file/z3m0rdBcEfLTJUBDkAKhWQ/BOOKS-READING)

## 📡 API Documentation

Backend API documentation:
[API Docs](https://readjourney.b.goit.study/api-docs/)

## 🌐 Deployment

The project is configured for easy deployment on popular platforms:

### Netlify (Recommended)

1. **Build the project**
```bash
npm run build
```

2. **Deploy to Netlify**
- Connect your GitHub repository to Netlify
- Set build command: `npm run build`
- Set publish directory: `dist`
- Add environment variables from `.env`

### Vercel

1. **Install Vercel CLI**
```bash
npm i -g vercel
```

2. **Deploy**
```bash
vercel --prod
```

### GitHub Pages

1. **Install gh-pages**
```bash
npm install --save-dev gh-pages
```

2. **Add deploy script to package.json**
```json
"scripts": {
  "deploy": "vite build && gh-pages -d dist"
}
```

3. **Update vite.config.ts**
```typescript
export default defineConfig({
  base: '/readjourney/',
  // ...other config
})
```

4. **Deploy**
```bash
npm run deploy
```

### Environment Variables

Make sure to configure these environment variables in your deployment platform:
- `VITE_API_BASE_URL` - Backend API URL
- `VITE_API_TIMEOUT` - API request timeout (optional)

## 📝 Technical Specifications

- Semantic HTML5
- Valid markup
- Optimized images (including retina support)
- SVG sprite for icons
- No console errors
- Formatted code
- Browser compatibility

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Your Name**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your Name](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- Design by [GoIT](https://www.figma.com/file/z3m0rdBcEfLTJUBDkAKhWQ/BOOKS-READING)
- Icons from [Heroicons](https://heroicons.com/)
- Inspiration from various book tracking apps

## 📞 Support

For support, email support@readjourney.app or open an issue on GitHub.

---

**Happy Reading! 📚✨**
