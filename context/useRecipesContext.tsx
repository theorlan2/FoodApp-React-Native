import React, { ReactElement, createContext, useState } from "react";

import { ingredientsIcons, recipeList } from "@/constants/RecipesList";
import { RecipeI } from "@/types/Recipe";

type ProviderProps = {
  children: ReactElement;
};

type ingredientsIcons = typeof ingredientsIcons;

const RecipesContext = createContext({
  recipes: [] as RecipeI[],
  setRecipes: (recipes: RecipeI[]) => {},
  recipe: { gradients: ["", ""] } as RecipeI,
  setRecipe: (recipe: RecipeI) => {},
  setRecipeByIndex: (index: number) => {},
  recipeIngredientsIcons: {} as keyof ingredientsIcons,
});

const RecipesProvider = ({ children }: ProviderProps) => {
  const recipeIngredientsIcons = ingredientsIcons;
  const [recipes, setRecipes] = useState(recipeList);
  const [recipe, setRecipe] = useState(recipeList[0]);

  function setRecipeByIndex(index: number) {
    if (index > -1 || index <= recipes.length) {
      setRecipe(recipes[index]);
    }
  }

  const recipeContextValue = {
    recipes,
    setRecipes,
    recipe,
    setRecipe,
    setRecipeByIndex,
    recipeIngredientsIcons,
  };

  return (
    <RecipesContext.Provider value={recipeContextValue}>
      {children}
    </RecipesContext.Provider>
  );
};

export { RecipesContext, RecipesProvider };
