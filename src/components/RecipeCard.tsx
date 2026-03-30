import { Link } from 'react-router';
import type { Recipe } from '../types/recipe';
import placeholderImg from '../assets/placeholder-recipe.jpg';

interface RecipeCardProps {
  recipe: Recipe;
  onToggleLike: (id: string) => void;
  onRemoveRecipe: (id: string) => void;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, onToggleLike, onRemoveRecipe }) => {
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

  const imageUrl = recipe.imageUrl || placeholderImg;
  return (
    <div className={`recipe-card ${recipe.isLiked ? 'liked' : ''}`}>
      <div className="recipe-header">
        <Link to={`/recipe/${recipe.id}`} className="recipe-title-link">
          <h3 className="recipe-title">{recipe.name}</h3>
        </Link>
        <div className="recipe-header-actions">
          <button
            className="like-btn"
            onClick={() => onToggleLike(recipe.id)}
            title={recipe.isLiked ? 'Unlike' : 'Like'}
          >
            {recipe.isLiked ? '❤️' : '🤍'}
          </button>
          <button
            className="remove-btn"
            onClick={() => onRemoveRecipe(recipe.id)}
            title="Remove recipe"
          >
            ×
          </button>
        </div>
      </div>
      <Link to={`/recipe/${recipe.id}`} className="recipe-card-image-link">
        {imageUrl && (
          <img src={imageUrl} alt={recipe.name} className="recipe-image" />
        )}
      </Link>
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
      <div className="recipe-card-footer">
        <Link to={`/recipe/${recipe.id}`} className="view-details-btn">View Details →</Link>
      </div>
    </div>
  );
};

export default RecipeCard;