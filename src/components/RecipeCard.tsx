import React from 'react';
import type { Recipe } from '../types/recipe';

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  const getDifficultyColorClass = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'difficulty-easy';
      case 'medium':
        return 'difficulty-medium';
      case 'hard':
        return 'difficulty-hard';
      default:
        return 'difficulty-default';
    }
  };

  return (
    <div className="recipe-card">
      <h3 className="recipe-title">{recipe.name}</h3>
      <div className="recipe-meta">
        <div className="meta-item">
          <span className="meta-label">⏱️ {recipe.cookingTime}min</span>
        </div>
        <div className="meta-item">
          <span 
            className={`meta-difficulty difficulty ${getDifficultyColorClass(recipe.difficulty)}`}
          >
            {recipe.difficulty.charAt(0).toUpperCase()}
          </span>
        </div>
        <div className="meta-item">
          <span className="meta-label">🥗 {recipe.ingredients.length} ing</span>
        </div>
      </div>
      <div className="ingredients-section">
        <h4 className="ingredients-title">Ingredients</h4>
        <ul className="ingredients-list">
          {recipe.ingredients.slice(0, 6).map((ingredient, index) => (
            <li key={index} className="ingredient-item">{ingredient}</li>
          ))}
          {recipe.ingredients.length > 6 && (
            <li className="more-ingredients">+{recipe.ingredients.length - 6} more</li>
          )}
        </ul>
      </div>
      {recipe.description && (
        <div className="description">
          <p>{recipe.description}</p>
        </div>
      )}
      {recipe.imageUrl && (
        <img src={recipe.imageUrl} alt={recipe.name} className="recipe-image" />
      )}
    </div>
  );
};

export default RecipeCard;