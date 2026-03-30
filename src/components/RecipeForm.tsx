import React, { useState } from 'react';
import type { Recipe } from '../types/recipe';

interface RecipeFormProps {
  onAddRecipe: (recipe: Recipe) => void;
}

const DIFFICULTIES = ['easy', 'medium', 'hard'] as const;

const RecipeForm: React.FC<RecipeFormProps> = ({ onAddRecipe }) => {
  const [name, setName] = useState('');
  const [difficulty, setDifficulty] = useState<Recipe['difficulty']>('easy');
  const [cookingTime, setCookingTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [description, setDescription] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!name.trim()) return; // basic validation

    const newRecipe: Recipe = {
      id: Date.now().toString(),
      name: name.trim(),
      difficulty,
      cookingTime: parseInt(cookingTime) || 30,
      ingredients: ingredients
        .split(',')
        .map(s => s.trim())
        .filter(Boolean),
      description: description.trim() || undefined,
      isLiked: false,
    };

    onAddRecipe(newRecipe);

    // Reset form fields
    setName('');
    setDifficulty('easy');
    setCookingTime('');
    setIngredients('');
    setDescription('');
    setIsOpen(false);
  };

  return (
    <div className="recipe-form-wrapper">
      <button
        className="toggle-form-btn"
        onClick={() => setIsOpen(prev => !prev)}
      >
        {isOpen ? '✕ Cancel' : '＋ Add Recipe'}
      </button>

      {isOpen && (
        <form className="recipe-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="recipe-name">Recipe Name *</label>
            <input
              id="recipe-name"
              type="text"
              placeholder="e.g. Pasta Carbonara"
              value={name}
              onChange={e => setName(e.target.value)}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="recipe-difficulty">Difficulty</label>
            <select
              id="recipe-difficulty"
              value={difficulty}
              onChange={e => setDifficulty(e.target.value as Recipe['difficulty'])}
              className="form-select"
            >
              {DIFFICULTIES.map(d => (
                <option key={d} value={d}>
                  {d.charAt(0).toUpperCase() + d.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="recipe-time">Cooking Time (min)</label>
            <input
              id="recipe-time"
              type="number"
              placeholder="e.g. 30"
              value={cookingTime}
              onChange={e => setCookingTime(e.target.value)}
              className="form-input"
              min="1"
            />
          </div>

          <div className="form-group">
            <label htmlFor="recipe-ingredients">Ingredients (comma-separated)</label>
            <input
              id="recipe-ingredients"
              type="text"
              placeholder="e.g. Eggs, Pasta, Bacon"
              value={ingredients}
              onChange={e => setIngredients(e.target.value)}
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="recipe-description">Description</label>
            <textarea
              id="recipe-description"
              placeholder="e.g. A classic Italian dish..."
              value={description}
              onChange={e => setDescription(e.target.value)}
              className="form-input form-textarea"
              rows={2}
            />
          </div>

          <button type="submit" className="submit-btn">Add Recipe</button>
        </form>
      )}
    </div>
  );
};

export default RecipeForm;
