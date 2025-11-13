# Portfolio Website - Anant Bhadani

A modern, responsive portfolio website built with Next.js 15, React 19, TypeScript, and Tailwind CSS. Features a beautiful dark mode toggle, smooth animations, fully functional contact form with validation, and comprehensive SEO optimization.

## 🚀 Features

### Core Features
- **Dark Mode**: Toggle between light and dark themes with persistent preference storage
- **Responsive Design**: Fully responsive layout that works on all devices (mobile, tablet, desktop)
- **Smooth Scrolling**: Smooth scroll behavior for better navigation experience
- **TypeScript**: Fully typed codebase for better developer experience and type safety
- **Error Handling**: Comprehensive error boundaries for graceful error handling
- **Performance Optimized**: Lazy loading, code splitting, and optimized images

### Interactive Components
- Sticky navigation bar with backdrop blur effect
- Mobile-friendly hamburger menu with keyboard navigation
- Animated project cards with hover effects
- Contact form with Web3Forms integration, input sanitization, and toast notifications
- Scroll-to-top button with smooth animation
- Loading skeletons for better perceived performance

### Accessibility & SEO
- **WCAG Compliant**: ARIA labels, semantic HTML, keyboard navigation
- **SEO Optimized**: Open Graph tags, Twitter Cards, structured data (JSON-LD)
- **Search Engine Ready**: robots.txt and sitemap.xml included
- **Focus Indicators**: Custom focus rings for all interactive elements
- **Screen Reader Support**: Proper alt text and ARIA attributes

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 15.3.5** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5** - Type safety and better developer experience
- **Tailwind CSS 3.4.0** - Utility-first CSS framework

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing
- **Turbopack** - Fast bundler for development

### External Services & Libraries
- **Web3Forms** - Contact form submission service
- **GitHub API** - Automatic project fetching from GitHub
- **Google Fonts** - Outfit and Ovo font families
- **react-hot-toast** - Toast notifications
- **DOMPurify** - Input sanitization for security

## 📁 Project Structure

```
protfolio/
├── app/
│   ├── api/
│   │   └── github/
│   │       └── route.ts     # GitHub API route for fetching repositories
│   ├── components/          # React components (TypeScript)
│   │   ├── About.tsx        # About section component
│   │   ├── Contact.tsx      # Contact form component
│   │   ├── ErrorBoundary.tsx # Error boundary component
│   │   ├── Footer.tsx       # Footer component
│   │   ├── Header.tsx       # Hero/Header section
│   │   ├── Navbar.tsx       # Navigation bar component
│   │   ├── ProjectModal.tsx # Project detail modal component
│   │   ├── ScrollToTop.tsx  # Scroll to top button
│   │   ├── Services.tsx     # Services section
│   │   └── Work.tsx         # Portfolio/Work section with GitHub integration
│   ├── favicon.ico          # Site favicon
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main page component
│   └── sitemap.ts           # Dynamic sitemap generation
├── assets/                  # Image assets and data
│   ├── assets.js            # Asset imports and data structures
│   └── [image files]        # Various icons and images
├── public/                  # Static files
│   ├── resume.pdf           # Resume file
│   ├── robots.txt           # Search engine crawler instructions
│   └── [work images]        # Portfolio project images
├── eslint.config.mjs        # ESLint configuration
├── next.config.ts           # Next.js configuration
├── package.json             # Dependencies and scripts
├── postcss.config.mjs       # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── tsconfig.json            # TypeScript configuration
```

## 🎨 Components Overview

### Navbar
- Fixed navigation bar with scroll detection
- Dark mode toggle button with keyboard support
- Responsive mobile menu with slide-in animation and escape key support
- Smooth scroll navigation links
- ARIA labels and keyboard navigation

### Header
- Hero section with profile image
- Introduction text and call-to-action buttons
- Resume download link
- Optimized images with proper alt text

### About
- Personal introduction section
- Information cards (Languages, Education, Projects)
- Tools/technologies showcase with icons
- Improved accessibility with semantic HTML

### Services
- Service offerings grid
- Four main services: Web Design, Mobile App, UI/UX Design, Graphics Design
- Hover effects and animations
- Focus indicators for keyboard navigation

### Work
- **Automatic GitHub Integration** - Fetches projects from GitHub automatically
- Portfolio projects showcase with real-time sync
- Grid layout with project cards
- Search and filter functionality (by language)
- Project detail modal with stats, topics, and links
- Hover animations and project details
- Lazy loaded for better performance
- Auto-updates when new projects are added to GitHub

### Contact
- Contact form with comprehensive validation
- Input sanitization to prevent XSS attacks
- Web3Forms integration for form submissions
- Toast notifications for user feedback
- Loading states and error handling
- Accessible form with proper labels

### Footer
- Logo and email display
- Social media links (GitHub, LinkedIn, Instagram)
- Copyright information with dynamic year
- Proper semantic HTML

### ErrorBoundary
- Catches React component errors
- User-friendly error messages
- Development error details
- Refresh functionality

### ScrollToTop
- Smooth scroll to top button
- Appears after scrolling 300px
- Animated appearance
- Keyboard accessible

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd protfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory
   - Add your configuration:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
   GITHUB_USERNAME=your-github-username
   GITHUB_TOKEN=your-github-token  # Optional but recommended
   NEXT_PUBLIC_SITE_URL=https://your-domain.com  # Optional, for SEO
   ```
   - Get your Web3Forms access key from [web3forms.com](https://web3forms.com)

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the production application
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality

## 🎯 Customization Guide

### Updating Personal Information

1. **Profile Information**: Edit `app/components/Header.tsx` and `app/components/About.tsx`
2. **Contact Email**: Update in `app/components/Footer.tsx`
3. **Social Links**: Modify links in `app/components/Footer.tsx`
4. **Resume**: Replace `public/resume.pdf` with your resume file
5. **SEO Metadata**: Update `app/layout.tsx` with your information

### Adding Projects

**Automatic GitHub Integration (Recommended):**
Projects are now automatically fetched from your GitHub profile! No manual updates needed. Just push to GitHub and your projects will appear automatically.

**Manual Projects (Legacy):**
If you want to use static projects instead, you can edit `assets/assets.js` and update the `workData` array. However, the Work component now uses GitHub API by default.

### Modifying Services

Update the `serviceData` array in `assets/assets.js`:
```typescript
export const serviceData = [
    { 
        icon: assets.web_icon, 
        title: 'Your Service', 
        description: 'Service description...', 
        link: 'service-link' 
    },
    // Add more services...
]
```

### Changing Colors and Styling

Modify `tailwind.config.js` to customize:
- Color palette
- Font families
- Theme extensions

### Contact Form Setup

1. Get a Web3Forms access key from [web3forms.com](https://web3forms.com)
2. Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your-access-key-here
   ```
3. The contact form will automatically use the environment variable
4. **Important**: Never commit `.env.local` to version control

### GitHub Projects Integration

The portfolio automatically fetches and displays your GitHub repositories! Projects are synced automatically from your GitHub profile.

**Setup:**

1. **Basic Setup (No Token Required):**
   - The app will use the default GitHub username: `anantbhadani`
   - To change it, add to `.env.local`:
     ```env
     GITHUB_USERNAME=your-github-username
     ```

2. **Optional: GitHub Token (Recommended for Higher Rate Limits):**
   - Create a GitHub Personal Access Token:
     1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
     2. Generate a new token with `public_repo` scope
     3. Add to `.env.local`:
        ```env
        GITHUB_TOKEN=your-github-token
        ```
   - This increases rate limit from 60 to 5000 requests/hour

**Features:**
- ✅ Automatically fetches all your GitHub repositories
- ✅ Sorted by most recently updated
- ✅ Search functionality
- ✅ Filter by programming language
- ✅ Project detail modal with stats, topics, and links
- ✅ Auto-updates every hour (cached for performance)
- ✅ Responsive grid layout
- ✅ Shows private repositories (if token is provided)

**Note:** Projects are cached for 1 hour to improve performance. New projects will appear automatically after the cache expires.

## 🌐 Deployment

### Deploy on Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
   - `NEXT_PUBLIC_SITE_URL` (optional, for SEO)
4. Vercel will automatically detect Next.js and configure the build settings
5. Deploy!

### Other Deployment Options

- **Netlify**: Connect your repository, set build command to `npm run build`, and add environment variables
- **AWS Amplify**: Connect repository, configure build settings, and add environment variables
- **Self-hosted**: Build with `npm run build` and serve with `npm run start`

## 🔒 Security Features

- ✅ Environment variables for sensitive data (Web3Forms key)
- ✅ Input sanitization using DOMPurify
- ✅ XSS protection
- ✅ Form validation
- ✅ Error boundaries for graceful error handling
- ✅ No hardcoded API keys

## ⚡ Performance Features

- ✅ Lazy loading for components below the fold
- ✅ Code splitting with React.lazy()
- ✅ Image optimization with Next.js Image component
- ✅ Loading skeletons for better perceived performance
- ✅ Optimized font loading with `display: swap`

## ♿ Accessibility Features

- ✅ ARIA labels and roles
- ✅ Semantic HTML
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Screen reader support
- ✅ Proper alt text for images
- ✅ Skip links (can be added)

## 🔍 SEO Features

- ✅ Open Graph meta tags
- ✅ Twitter Card meta tags
- ✅ Structured data (JSON-LD)
- ✅ robots.txt
- ✅ Dynamic sitemap.xml
- ✅ Canonical URLs
- ✅ Meta descriptions and keywords

## 🎨 Design Features

- **Color Scheme**: 
  - Light mode: White background with gray text
  - Dark mode: Black background with white text
- **Typography**: 
  - Primary font: Outfit (weights: 400, 500, 600, 700)
  - Accent font: Ovo (weight: 400)
- **Animations**: 
  - Smooth transitions on all interactive elements
  - Hover effects on cards and buttons
  - Scroll-triggered navbar styling
  - Loading animations

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🔧 Configuration Files

- `next.config.ts` - Next.js configuration
- `tailwind.config.js` - Tailwind CSS customization
- `tsconfig.json` - TypeScript compiler options
- `eslint.config.mjs` - ESLint rules
- `postcss.config.mjs` - PostCSS plugins

## 📝 Recent Improvements

### ✅ Implemented (2025)

- **Security & Best Practices**
  - ✅ Moved Web3Forms access key to environment variables
  - ✅ Added error boundaries for better error handling
  - ✅ Converted all components to TypeScript (.tsx)
  - ✅ Added input sanitization for the contact form

- **Performance**
  - ✅ Implemented lazy loading for components below the fold
  - ✅ Added code splitting with React.lazy()
  - ✅ Added loading states and skeletons
  - ✅ Optimized image loading with priority flags

- **SEO & Accessibility**
  - ✅ Added proper meta tags (Open Graph, Twitter Cards)
  - ✅ Implemented structured data (JSON-LD)
  - ✅ Added robots.txt and sitemap.xml
  - ✅ Improved alt text for all images
  - ✅ Added ARIA labels for better screen reader support
  - ✅ Implemented keyboard navigation improvements
  - ✅ Added focus indicators for better accessibility

- **User Experience**
  - ✅ Added toast notifications for form submissions
  - ✅ Added loading animations and skeletons
  - ✅ Added "scroll to top" button
  - ✅ Improved mobile menu animations
  - ✅ Enhanced form validation with better error messages

- **Technical**
  - ✅ Fixed SSR hydration issues with localStorage
  - ✅ Added proper error handling for API calls
  - ✅ Improved TypeScript coverage

## 🚀 Future Enhancements

### Potential Improvements

- [ ] Add blog section
- [ ] Implement project filtering/search functionality
- [ ] Add testimonials section
- [ ] Add skills progress bars or visualizations
- [ ] Implement smooth scroll animations (e.g., Framer Motion)
- [ ] Add analytics integration (Google Analytics, Plausible, etc.)
- [ ] Add email notifications for contact form submissions
- [ ] Add unit tests (Jest, React Testing Library)
- [ ] Add E2E tests (Playwright, Cypress)
- [ ] Set up pre-commit hooks (Husky)
- [ ] Add CI/CD pipeline
- [ ] Add JSDoc comments for better documentation
- [ ] Add smooth page transitions
- [ ] Implement project modal/detail view
- [ ] Implement retry logic for failed form submissions
- [ ] Add service worker for offline support
- [ ] Implement PWA features

## 📝 License

This project is private and all rights reserved.

## 👤 Author

**Anant Bhadani**
- Email: anant2001.bhadani@gmail.com
- GitHub: [@anantbhadani](https://github.com/anantbhadani)
- LinkedIn: [anantbhadani](https://www.linkedin.com/in/anantbhadani/)
- Instagram: [@anant_bhadni19](https://www.instagram.com/anant_bhadni19)

## 🤝 Contributing

This is a personal portfolio project. Contributions, suggestions, and feedback are welcome!

---

**Note**: Make sure to set up your `.env.local` file with the `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` before deploying to production. Never commit environment variables to version control.
