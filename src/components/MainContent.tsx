import React from 'react';
import type { Recipe } from '../types/recipe';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';
import FilterBar from './FilterBar';
import type { FilterMode } from './FilterBar';

interface MainContentProps {
  recipes: Recipe[];
  query: string;
  filterMode: FilterMode;
  filterCounts: Record<FilterMode, number>;
  onSearch: (query: string) => void;
  onToggleLike: (id: string) => void;
  onFilterChange: (mode: FilterMode) => void;
}

const MainContent: React.FC<MainContentProps> = ({ recipes, query, filterMode, filterCounts, onSearch, onToggleLike, onFilterChange }) => {
  return (
    <main className="main-content">
      <>
        <FilterBar activeFilter={filterMode} onFilterChange={onFilterChange} counts={filterCounts} />
        <SearchBar query={query} onSearch={onSearch} />
        <RecipeList recipes={recipes} onToggleLike={onToggleLike} />
      </>
    </main>
  );
};

export default MainContent;
