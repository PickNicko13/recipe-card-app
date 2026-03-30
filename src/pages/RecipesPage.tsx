import React from 'react';
import type { Recipe } from '../types/recipe';
import type { FilterMode } from '../components/FilterBar';
import RecipeForm from '../components/RecipeForm';
import FilterBar from '../components/FilterBar';
import SearchBar from '../components/SearchBar';
import RecipeList from '../components/RecipeList';
import ApiRecipes from '../components/ApiRecipes';

interface RecipesPageProps {
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

const RecipesPage: React.FC<RecipesPageProps> = ({
  recipes, query, filterMode, filterCounts,
  onSearch, onToggleLike, onFilterChange,
  onAddRecipe, onRemoveRecipe,
}) => {
  return (
    <div className="page recipes-page">
      <RecipeForm onAddRecipe={onAddRecipe} />
      <FilterBar activeFilter={filterMode} onFilterChange={onFilterChange} counts={filterCounts} />
      <SearchBar query={query} onSearch={onSearch} />
      <RecipeList recipes={recipes} onToggleLike={onToggleLike} onRemoveRecipe={onRemoveRecipe} />
      <ApiRecipes />
    </div>
  );
};

export default RecipesPage;
