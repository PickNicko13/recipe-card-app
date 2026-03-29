import React from 'react';
import type { Recipe } from '../types/recipe';
import RecipeCard from './RecipeCard';

interface RecipeListProps {
  recipes: Recipe[];
  onToggleLike: (id: string) => void;
  onRemoveRecipe: (id: string) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onToggleLike, onRemoveRecipe }) => {
  return (
    <div className="recipe-list">
      {recipes.length === 0 && (
        <div className="empty-state">
          <p>🍽️ No recipes match this filter.</p>
          <p>Try a different category or clear your search.</p>
        </div>
      )}
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} onToggleLike={onToggleLike} onRemoveRecipe={onRemoveRecipe} />
      ))}
    </div>
  );
};

export default RecipeList;