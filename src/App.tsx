import { useState } from 'react';
import type { Recipe } from './types/recipe';
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

  const filteredRecipes = recipes.filter(recipe => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(q) ||
      recipe.ingredients.some(ingredient => ingredient.toLowerCase().includes(q))
    );
  });

  const likedCount = recipes.filter(recipe => recipe.isLiked).length;

  return (
    <ThemeProvider>
      <div className="app">
        <Header likedCount={likedCount} />
        <MainContent recipes={filteredRecipes} query={searchQuery} onSearch={handleSearch} onToggleLike={handleToggleLike} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
