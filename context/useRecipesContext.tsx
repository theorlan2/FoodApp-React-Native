import React, { ReactElement, createContext, useState } from "react";

import { recipeList } from "@/constants/RecipesList";
import { RecipeI } from "@/types/Recipe";

type ProviderProps = {
  children: ReactElement;
};

const RecipesContext = createContext({
  recipes: [] as RecipeI[],
  setRecipes: (recipes: RecipeI[]) => {},
  recipe: { gradients: ["", ""] } as RecipeI,
  setRecipe: (recipe: RecipeI) => {},
  setRecipeByIndex: (index: number) => {},
});

const RecipesProvider = ({ children }: ProviderProps) => {
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
  };

  return (
    <RecipesContext.Provider value={recipeContextValue}>
      {children}
    </RecipesContext.Provider>
  );
};

export { RecipesContext, RecipesProvider };
