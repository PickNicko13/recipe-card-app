import React from 'react';
import { useParams, Link } from 'react-router';
import type { Recipe } from '../types/recipe';
import placeholderImg from '../assets/placeholder-recipe.jpg';

interface RecipeDetailPageProps {
  recipes: Recipe[];
}

const RecipeDetailPage: React.FC<RecipeDetailPageProps> = ({ recipes }) => {
  const { id } = useParams<{ id: string }>();

  const recipe = recipes.find(r => r.id === id);

  if (!recipe) {
    return (
      <div className="page detail-page">
        <div className="detail-not-found">
          <h2>Recipe Not Found</h2>
          <p>No recipe with ID <strong>{id}</strong> exists in your list.</p>
          <Link to="/recipes" className="back-link">← Back to Recipes</Link>
        </div>
      </div>
    );
  }

  const imageUrl = recipe.imageUrl || placeholderImg;

  return (
    <div className="page detail-page">
      <Link to="/recipes" className="back-link">← Back to Recipes</Link>
      <div className="detail-card">
        <img src={imageUrl} alt={recipe.name} className="detail-image" />
        <div className="detail-body">
          <div className="detail-header">
            <h2 className="detail-title">{recipe.name}</h2>
            {recipe.isLiked && <span className="detail-liked">❤️ Liked</span>}
          </div>
          <div className="detail-meta">
            <span className={`detail-difficulty difficulty-${recipe.difficulty}`}>
              {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
            </span>
            <span>⏱️ {recipe.cookingTime} min</span>
            <span>🥗 {recipe.ingredients.length} ingredients</span>
          </div>
          {recipe.description && (
            <p className="detail-description">{recipe.description}</p>
          )}
          <div className="detail-ingredients">
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ing, i) => (
                <li key={i}>{ing}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
