import React, { useState } from 'react';
import type { Recipe } from '../types/recipe';
import { Card, Button, Input } from './ui';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) return;

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

  if (!isOpen) {
    return (
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <Button onClick={() => setIsOpen(true)} size="lg">
          ＋ Add Recipe
        </Button>
      </div>
    );
  }

  return (
    <Card style={{ maxWidth: '37.5rem', margin: '0 auto 2rem' }}>
      <Card.Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Card.Title>Add New Recipe</Card.Title>
          <Button variant="secondary" size="sm" onClick={() => setIsOpen(false)}>✕</Button>
        </div>
      </Card.Header>
      <Card.Body>
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Input 
            label="Recipe Name *" 
            value={name} 
            onChange={e => setName(e.target.value)} 
            placeholder="e.g. Pasta Carbonara"
            required
          />
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-muted)', display: 'block', marginBottom: '0.25rem' }}>
                Difficulty
              </label>
              <select 
                value={difficulty} 
                onChange={e => setDifficulty(e.target.value as Recipe['difficulty'])}
                style={{
                  width: '100%',
                  padding: '0.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                  backgroundColor: 'var(--color-surface)',
                  color: 'var(--color-text)',
                  fontFamily: 'inherit'
                }}
              >
                {DIFFICULTIES.map(d => (
                  <option key={d} value={d}>
                    {d.charAt(0).toUpperCase() + d.slice(1)}
                  </option>
                ))}
              </select>
            </div>
            <Input 
              label="Cooking Time (min)" 
              type="number" 
              value={cookingTime} 
              onChange={e => setCookingTime(e.target.value)} 
              placeholder="e.g. 30"
              style={{ flex: 1 }}
            />
          </div>

          <Input 
            label="Ingredients (comma-separated)" 
            value={ingredients} 
            onChange={e => setIngredients(e.target.value)} 
            placeholder="e.g. Eggs, Pasta, Bacon"
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-muted)' }}>
              Description
            </label>
            <textarea 
              value={description} 
              onChange={e => setDescription(e.target.value)}
              placeholder="e.g. A classic Italian dish..."
              rows={3}
              style={{
                width: '100%',
                padding: '0.5rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                backgroundColor: 'var(--color-surface)',
                color: 'var(--color-text)',
                fontFamily: 'inherit'
              }}
            />
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <Button type="submit" style={{ flex: 2 }}>Add Recipe</Button>
            <Button 
              type="button" 
              variant="secondary" 
              style={{ flex: 1 }}
              onClick={() => setIsOpen(false)}
            >
              Cancel
            </Button>
          </div>
        </form>
      </Card.Body>
    </Card>
  );
};

export default RecipeForm;
