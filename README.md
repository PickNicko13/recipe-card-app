# Recipe Card App

A modern, full-featured recipe management application built with **React 19**, **TypeScript**, and **Vite** (with the new experimental rolldown bundler). This application demonstrates a clean, component-based architecture, client-side routing, and external API integration.

## Features

- **Multi-page Navigation**: Using `react-router` with a dynamic `fadeIn` animation on page transitions.
  - **Home**: Welcome page with feature highlights.
  - **Recipes**: Main interactive list.
  - **Recipe Details**: Dynamic pages for each recipe with full nutritional and ingredient info.
  - **About**: Project background and tech stack.
- **Recipe Management (CRUD)**: Add new recipes via a controlled form and remove them from the list.
- **Interactivity**: Like/unlike recipes with a live global counter in the header.
- **Live Search & Filter**: Fuzzy search by name/ingredient and filtering by difficulty.
- **Persistence**: Your recipes and "liked" states persist automatically using `localStorage`.
- **API Integration**: Fetches live recipe suggestions from the **DummyJSON API** using the Fetch API.
- **Theme Support**: Dark/light mode toggle with a sleek **Gruvbox-inspired** design system.
- **Responsive Layout**: Fully optimized for mobile, tablet, and desktop viewports.

## Technology Stack

- **Core**: React 19, TypeScript
- **Routing**: React Router
- **Build Tool**: Vite
- **Styling**: Vanilla CSS with modern relative units and custom animations
- **Data Source**: Local state + DummyJSON API + localStorage

## Project Structure

```bash
src/
├── assets/        # Images and bundled assets
├── components/    # Presentational and Logic components
│   ├── ApiRecipes.tsx   # External API data fetcher
│   ├── RecipeForm.tsx   # Controlled form for adding recipes
│   ├── RecipeList.tsx   # Mapper for recipe cards
│   └── ...
├── contexts/      # Theme context and global state
├── pages/         # Full-page components (Home, Recipes, Details, etc.)
├── types/         # TypeScript interfaces
├── App.tsx        # Route configuration and root state
└── main.tsx       # Entry point with BrowserRouter
```

## Setup & Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run Dev Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```
