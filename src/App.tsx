import { useState } from 'react';
import type { Recipe } from './types/recipe';
import type { FilterMode } from './components/FilterBar';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import placeholderImg from './assets/placeholder-recipe.jpg';
import './App.css';

function App() {
  // Sample recipes data
  const sampleRecipes: Recipe[] = [
    {
      id: '1',
      name: 'Vegetable Stir Fry',
      ingredients: ['Broccoli', 'Bell peppers', 'Carrots', 'Soy sauce', 'Garlic', 'Ginger'],
      cookingTime: 20,
      difficulty: 'easy',
      description: 'A quick and healthy vegetable stir fry.',
      imageUrl: placeholderImg
    },
    {
      id: '2',
      name: 'Classic Beef Burger',
      ingredients: ['Ground beef', 'Burger buns', 'Lettuce', 'Tomato', 'Onion', 'Cheese'],
      cookingTime: 30,
      difficulty: 'medium',
      description: 'Juicy homemade beef burgers.',
      imageUrl: placeholderImg
    },
    {
      id: '3',
      name: 'Chocolate Chip Cookies',
      ingredients: ['Flour', 'Butter', 'Sugar', 'Eggs', 'Vanilla', 'Chocolate chips'],
      cookingTime: 45,
      difficulty: 'easy',
      description: 'Delicious homemade chocolate chip cookies.',
      imageUrl: placeholderImg
    }
  ];

  const [recipes, setRecipes] = useState<Recipe[]>(sampleRecipes);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterMode, setFilterMode] = useState<FilterMode>('all');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleToggleLike = (id: string) => {
    setRecipes(prevRecipes =>
      prevRecipes.map(recipe =>
        recipe.id === id ? { ...recipe, isLiked: !recipe.isLiked } : recipe
      )
    );
  };

  const applyFilter = (recipe: Recipe, mode: FilterMode): boolean => {
    if (mode === 'liked') return !!recipe.isLiked;
    if (mode === 'easy' || mode === 'medium' || mode === 'hard') return recipe.difficulty === mode;
    return true; // 'all'
  };

  const applySearch = (recipe: Recipe, q: string): boolean => {
    if (!q.trim()) return true;
    const lq = q.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(lq) ||
      recipe.ingredients.some(ing => ing.toLowerCase().includes(lq))
    );
  };

  const filteredRecipes = recipes.filter(
    recipe => applyFilter(recipe, filterMode) && applySearch(recipe, searchQuery)
  );

  const likedCount = recipes.filter(recipe => recipe.isLiked).length;

  const filterCounts: Record<FilterMode, number> = {
    all:    recipes.filter(r => applySearch(r, searchQuery)).length,
    liked:  recipes.filter(r => r.isLiked && applySearch(r, searchQuery)).length,
    easy:   recipes.filter(r => r.difficulty === 'easy' && applySearch(r, searchQuery)).length,
    medium: recipes.filter(r => r.difficulty === 'medium' && applySearch(r, searchQuery)).length,
    hard:   recipes.filter(r => r.difficulty === 'hard' && applySearch(r, searchQuery)).length,
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Header likedCount={likedCount} />
        <MainContent
          recipes={filteredRecipes}
          query={searchQuery}
          filterMode={filterMode}
          filterCounts={filterCounts}
          onSearch={handleSearch}
          onToggleLike={handleToggleLike}
          onFilterChange={setFilterMode}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
