# Second Life Software UI Demo Platform

A modular, elegant React-based web application that demonstrates frontend design versatility and mock integrations with various backend tech stacks. This app serves as a live portfolio for showcasing UI/UX capabilities across different frameworks, data flows, and architectural styles.

## 🎯 Core Objectives

- Build a single React-based web application with multiple routes
- Each route/page showcases a unique UI layout, mimicking frontend styles inspired by other frameworks (Angular, Vue, Svelte)
- Simulate backend responses for each page, modeling popular backend stacks (FastAPI, Django, Firebase, etc.)
- Deploy to a live URL with fast performance and mobile responsiveness

## 🛠️ Tech Stack

### Frontend (Primary)
- **React** (with Vite)
- **TypeScript**
- **Tailwind CSS** for styling
- **React Router DOM** for routing
- **Mock Service Worker (MSW)** for API simulation

### Optional UI Libraries
- **Material UI** (@mui/material)
- **Headless UI** (@headlessui/react)
- **Custom components**

### Backend Stack Simulations
- **FastAPI** – token-based auth, RESTful JSON
- **Django** – session-based auth, admin layout, filtered queries
- **Node.js (Express)** – REST endpoints, real-time-style features
- **Firebase** – nested Firestore responses, Auth flows
- **Ruby on Rails** – CRUD with embedded responses, CSRF protection
- **PHP (Laravel)** – form validation, controller-style responses
- **Go (Gin/Fiber)** – minimalistic, flat structured JSON
- **Supabase** – PostgreSQL-style JSON, role-based access control

## 📁 File and Folder Structure

```
demo_sls/
├── public/
│   └── index.html                 # HTML template
├── src/
│   ├── assets/                    # Images, logos, static files
│   │   └── react.svg
│   ├── components/                # Reusable UI components
│   │   └── .gitkeep
│   ├── layouts/                   # Page layouts (DashboardLayout, AdminLayout, etc.)
│   │   └── .gitkeep
│   ├── mocks/                     # MSW handlers, mock data, API simulation logic
│   │   └── .gitkeep
│   ├── pages/                     # Route-level components (one per route)
│   │   ├── Dashboard/             # SaaS dashboard components
│   │   │   └── .gitkeep
│   │   ├── Admin/                 # Admin panel components
│   │   │   └── .gitkeep
│   │   ├── Ecommerce/             # Ecommerce components
│   │   │   └── .gitkeep
│   │   ├── Auth/                  # Authentication components
│   │   │   └── .gitkeep
│   │   ├── Crm/                   # CRM components
│   │   │   └── .gitkeep
│   │   ├── Chat/                  # Chat components
│   │   │   └── .gitkeep
│   │   └── Form/                  # Form components
│   │       └── .gitkeep
│   ├── routes/                    # Route definitions (React Router)
│   │   └── .gitkeep
│   ├── styles/                    # Tailwind config, global styles
│   │   └── .gitkeep
│   ├── utils/                     # Utility functions, hooks, context
│   │   └── .gitkeep
│   ├── App.tsx                    # Main app component with routing
│   ├── App.css                    # App-specific styles
│   ├── main.tsx                   # Vite entry point
│   ├── index.css                  # Tailwind base styles
│   └── vite-env.d.ts             # Vite environment types
├── .gitignore                     # Git ignore rules
├── .env                           # Environment variables
├── package.json                   # Dependencies and scripts
├── package-lock.json             # Locked dependencies
├── tailwind.config.js            # Tailwind CSS configuration
├── postcss.config.js             # PostCSS configuration
├── tsconfig.json                 # TypeScript configuration
├── tsconfig.app.json             # TypeScript app config
├── tsconfig.node.json            # TypeScript node config
├── vite.config.ts                # Vite configuration
├── eslint.config.js              # ESLint configuration
└── README.md                     # This file
```

## 🚀 Routes and Features

| Route | Description | Frontend Mimic | Backend Sim Target |
|-------|-------------|----------------|-------------------|
| `/dashboard` | Clean SaaS dashboard | React + Tailwind | FastAPI / Supabase |
| `/admin` | Admin panel with table/list views | Angular-style (Material UI) | Django / Laravel |
| `/ecommerce` | Product listing, cart preview | Vue-style grid layout | Node.js / Laravel |
| `/auth` | Login / Signup / MFA mock flows | Firebase UI mimic | Firebase / Django |
| `/crm` | Contact manager with timeline & notes | Svelte-inspired | FastAPI / Rails |
| `/chat` | Real-time messaging UI | React + WS mock | Node.js / Firebase |
| `/form` | Multi-step form with validation | Classic Laravel look | PHP / Rails |

### Key Features
- ✅ Navigation bar with route links and current page indicator
- ✅ Stack label/tag per page (e.g., "Frontend: React | Backend: Firebase")
- ✅ Responsive design (mobile/tablet/desktop)
- ✅ Light/dark mode toggle (optional)
- ✅ Toggle API mock state (simulate loading, success, error)

## 🏃‍♂️ How to Run the Web Application

### Prerequisites
- **Node.js** (version 18 or higher)
- **npm** (comes with Node.js)

### Installation

1. **Clone the repository** (if not already done):
   ```bash
   git clone <repository-url>
   cd demo_sls
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to:
   ```
   http://localhost:5173
   ```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint

# Type check
npm run type-check
```

## 🚀 Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Deploy: `vercel`
3. Set custom domain: `demo.secondlifesoftware.com`

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

### Other Platforms
- **GitHub Pages**: Use `gh-pages` package
- **Firebase Hosting**: Use `firebase-tools`
- **AWS S3 + CloudFront**: Manual deployment

## 🔧 Development Workflow

### Adding New Pages
1. Create a new folder in `src/pages/[PageName]/`
2. Add your page component
3. Update routing in `src/App.tsx`
4. Add navigation link in the Navbar component

### Adding Mock APIs
1. Create handlers in `src/mocks/`
2. Set up MSW for API simulation
3. Import and use in your page components

### Styling Guidelines
- Use **Tailwind CSS** for most styling
- Create reusable components in `src/components/`
- Use layouts in `src/layouts/` for page structure

## 🎨 Customization

### Environment Variables
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=http://localhost:3000
VITE_APP_TITLE=Second Life Software Demo
```

### Tailwind Configuration
Modify `tailwind.config.js` to add custom colors, fonts, or breakpoints.

### Adding UI Libraries
```bash
# Material UI
npm install @mui/material @emotion/react @emotion/styled

# Headless UI
npm install @headlessui/react

# Other popular libraries
npm install @radix-ui/react-icons
npm install framer-motion
```

## 🔮 Future Enhancements

- [ ] Add toggle to preview same page with different component libraries
- [ ] Incorporate Storybook for component showcase
- [ ] Include editable code snippets or GitHub links per section
- [ ] Add performance monitoring and analytics
- [ ] Implement PWA features
- [ ] Add internationalization (i18n)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Add feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Goal**: Ship a clean, modular UI/UX demo app that clearly communicates frontend design range, integration thinking, and adaptability across major tech stacks — with minimal backend overhead.

**Timeline**: 1–2 weeks for initial development and deployment.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
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

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
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
