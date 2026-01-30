# Read Journey 📚

A modern web application for tracking your reading progress, managing your book library, and analyzing your reading statistics.

## 🎯 About The Project

Read Journey is a comprehensive book reading tracker that helps users:
- Discover and explore recommended books
- Build and manage their personal library
- Track reading progress with detailed statistics
- Visualize reading habits through interactive charts
- Set and achieve reading goals

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

## 📋 Features

### Authentication
- ✅ User registration with validation
- ✅ User login/logout
- ✅ Protected routes for authenticated users
- ✅ Persistent sessions

### Book Management
- ✅ Browse recommended books with pagination
- ✅ Filter books by title and author
- ✅ Add books to personal library
- ✅ Remove books from library
- ✅ Filter library books by reading status

### Reading Tracking
- ✅ Start/stop reading sessions
- ✅ Track pages read
- ✅ Calculate reading speed
- ✅ View reading diary with history
- ✅ Visualize statistics with charts

### Responsive Design
- ✅ Mobile-first approach (320px+)
- ✅ Tablet optimization (768px+)
- ✅ Desktop experience (1440px+)
- ✅ Retina display support

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

The project is configured for easy deployment on:
- GitHub Pages
- Netlify
- Vercel

## 📝 Technical Specifications

- Semantic HTML5
- Valid markup
- Optimized images (including retina support)
- SVG sprite for icons
- No console errors
- Formatted code
- Browser compatibility

## 👤 Author

**Your Name**

- GitHub: [@yourusername](https://github.com/yourusername)

## 📄 License

This project is part of a coding bootcamp assignment.

---

Made with ❤️ and ☕
