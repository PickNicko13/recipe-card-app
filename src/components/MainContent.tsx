import React from 'react';
import type { Recipe } from '../types/recipe';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';

interface MainContentProps {
  recipes: Recipe[];
  query: string;
  onSearch: (query: string) => void;
  onToggleLike: (id: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({ recipes, query, onSearch, onToggleLike }) => {
  return (
    <main className="main-content">
      <>
        <SearchBar query={query} onSearch={onSearch} />
        <RecipeList recipes={recipes} onToggleLike={onToggleLike} />
      </>
    </main>
  );
};

export default MainContent;
