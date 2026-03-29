import React from 'react';
import type { Recipe } from '../types/recipe';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import type { FilterMode } from './FilterBar';
import RecipeForm from './RecipeForm';
import ApiRecipes from './ApiRecipes';

interface MainContentProps {
  recipes: Recipe[];
  query: string;
  filterMode: FilterMode;
  filterCounts: Record<FilterMode, number>;
  onSearch: (query: string) => void;
  onToggleLike: (id: string) => void;
  onFilterChange: (mode: FilterMode) => void;
  onAddRecipe: (recipe: Recipe) => void;
  onRemoveRecipe: (id: string) => void;
}

const MainContent: React.FC<MainContentProps> = ({
  recipes, query, filterMode, filterCounts,
  onSearch, onToggleLike, onFilterChange,
  onAddRecipe, onRemoveRecipe
}) => {
  return (
    <main className="main-content">
      <>
        <RecipeForm onAddRecipe={onAddRecipe} />
        <FilterBar activeFilter={filterMode} onFilterChange={onFilterChange} counts={filterCounts} />
        <SearchBar query={query} onSearch={onSearch} />
        <RecipeList recipes={recipes} onToggleLike={onToggleLike} onRemoveRecipe={onRemoveRecipe} />
        <ApiRecipes />
      </>
    </main>
  );
};

export default MainContent;
