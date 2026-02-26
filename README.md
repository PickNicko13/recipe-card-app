# Recipe Card App

This is a recipe card application built with React and Vite. Recipe cards contain name, ingredients, cooking time, difficulty, and other recipe information.

## Rules

1. Use semantic structure.
2. Always use strict mode for TypeScript and React.
3. Cards must be added with `map()`.
4. Split the task into small features, test them, let me review them before commit. After I approve the feature commit it and follow to the next one.
5. All functions, classes, and modules must have JSDoc documentation.
6. All components and business logic must have unit tests.

## Features

- Recipe cards displaying name, ingredients, cooking time, difficulty
- Dark/light mode toggle with Gruvbox theme
- Fuzzy search functionality
- Responsive design

## Development Onboarding

### Project Structure
```
src/
├── components/    # Reusable React components
├── contexts/      # React Context providers
├── types/         # TypeScript type definitions
├── assets/        # Static assets (images, icons)
├── App.tsx        # Main application component
└── main.tsx       # Entry point
```

## Task List - Missing Requirements

### TypeScript Configuration
- [ ] Verify and ensure strict mode is enabled in TypeScript configuration
  - [ ] Create tsconfig.json with strict mode enabled
  - [ ] Configure TypeScript with strict type checking

### Testing
- [ ] Add unit tests for all components and business logic
  - [ ] App component
  - [ ] RecipeCard component
  - [ ] RecipeList component
  - [ ] SearchBar component
  - [ ] ThemeToggle component
  - [ ] Header component
  - [ ] Footer component
  - [ ] ThemeContext

### Code Quality
- [ ] Add prop validation for all components
- [ ] Ensure all components follow accessibility best practices
- [ ] Add proper error boundaries
- [ ] Optimize performance (memoization, lazy loading)

### Documentation
- [ ] Add JSDoc documentation to all functions, classes, and modules
  - [ ] App.tsx
  - [ ] components/RecipeCard.tsx
  - [ ] components/RecipeList.tsx
  - [ ] components/SearchBar.tsx
  - [ ] components/ThemeToggle.tsx
  - [ ] components/Header.tsx
  - [ ] components/Footer.tsx
  - [ ] contexts/ThemeContext.tsx
  - [ ] types/recipe.ts
  - [ ] types/theme.ts
