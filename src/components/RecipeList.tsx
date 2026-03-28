import React from 'react';
import type { Recipe } from '../types/recipe';
import RecipeCard from './RecipeCard';

interface RecipeListProps {
  recipes: Recipe[];
  onToggleLike: (id: string) => void;
}

const RecipeList: React.FC<RecipeListProps> = ({ recipes, onToggleLike }) => {
  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} onToggleLike={onToggleLike} />
      ))}
    </div>
  );
};

export default RecipeList;