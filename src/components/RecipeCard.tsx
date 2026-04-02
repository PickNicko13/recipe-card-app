import React from 'react';
import { Link } from 'react-router';
import type { Recipe } from '../types/recipe';
import { Card, Button } from './ui';
import placeholderImg from '../assets/placeholder-recipe.jpg';

interface RecipeCardProps {
  recipe: Recipe;
  onToggleLike: (id: string) => void;
  onRemoveRecipe: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onToggleLike, onRemoveRecipe }) => {
  const imageUrl = recipe.imageUrl || placeholderImg;

  return (
    <Card hoverable className={recipe.isLiked ? 'liked' : ''} style={{ height: '100%' }}>
      <Card.Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to={`/recipe/${recipe.id}`} className="recipe-title-link">
            <Card.Title>{recipe.name}</Card.Title>
          </Link>
          <div style={{ display: 'flex', gap: '0.5rem' }}>
            <Button 
              variant="secondary" 
              size="sm"
              onClick={() => onToggleLike(recipe.id)}
              title={recipe.isLiked ? 'Unlike' : 'Like'}
            >
              {recipe.isLiked ? '❤️' : '🤍'}
            </Button>
            <Button 
              variant="danger" 
              size="sm"
              onClick={() => onRemoveRecipe(recipe.id)}
              title="Remove recipe"
            >
              ×
            </Button>
          </div>
        </div>
      </Card.Header>
      
      <Card.Body>
        <Link to={`/recipe/${recipe.id}`} className="recipe-card-image-link">
          <img src={imageUrl} alt={recipe.name} className="recipe-image" />
        </Link>
        <div className="recipe-meta">
          <span className="meta-label">⏱️ {recipe.cookingTime}min</span>
          <span className={`meta-difficulty difficulty difficulty-${recipe.difficulty}`}>
            {recipe.difficulty.charAt(0).toUpperCase()}
          </span>
          <span className="meta-label">🥗 {recipe.ingredients.length} ing</span>
        </div>
        <div className="ingredients-section">
          <ul className="ingredients-list">
            {recipe.ingredients.slice(0, 3).map((ingredient, index) => (
              <li key={index} className="ingredient-item">{ingredient}</li>
            ))}
            {recipe.ingredients.length > 3 && (
              <li className="more-ingredients">+{recipe.ingredients.length - 3} more</li>
            )}
          </ul>
        </div>
        {recipe.description && (
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.5rem' }}>
            {recipe.description.length > 80 ? `${recipe.description.substring(0, 77)}...` : recipe.description}
          </p>
        )}
      </Card.Body>

      <Card.Footer>
        <Link to={`/recipe/${recipe.id}`} style={{ width: '100%' }}>
          <Button variant="primary" style={{ width: '100%' }}>View Details →</Button>
        </Link>
      </Card.Footer>
    </Card>
  );
};

export default RecipeCard;