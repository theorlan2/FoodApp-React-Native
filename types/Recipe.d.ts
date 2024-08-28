interface IngredientI {
  id: number;
  icon: string;
  name: string;
  peso: string;
}

interface RecipeStepI {
  id: number;
  icon: string;
  name: string;
  details: string;
}
export interface RecipeI {
  name: string;
  image: string;
  views: number;
  likes: number;
  color: string;
  gradients: string[];
  statusbar: [string, "light-content"];
  ingredientes: IngredientI[];
  Steps: RecipeStepI[];
}
