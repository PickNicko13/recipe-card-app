export interface Recipe {
  id: string;
  name: string;
  ingredients: string[];
  cookingTime: number; // in minutes
  difficulty: 'easy' | 'medium' | 'hard';
  description?: string;
  imageUrl?: string;
  isLiked?: boolean;
}