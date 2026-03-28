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

  const [recipes] = useState<Recipe[]>(sampleRecipes);
  const [filteredRecipes, setFilteredRecipes] = useState<Recipe[]>(sampleRecipes);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredRecipes(recipes);
      return;
    }

    // Simple fuzzy search implementation
    const filtered = recipes.filter(recipe =>
      recipe.name.toLowerCase().includes(query.toLowerCase()) ||
      recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(query.toLowerCase())
      )
    );

    setFilteredRecipes(filtered);
  };

  return (
    <ThemeProvider>
      <div className="app">
        <Header />
        <MainContent recipes={filteredRecipes} query={searchQuery} onSearch={handleSearch} />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
