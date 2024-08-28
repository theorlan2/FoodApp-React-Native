import { RecipeI } from "@/types/Recipe";

export const recipeList = [
  {
    name: "Black pepper steak",
    image: "food-1.jpg",
    views: "30",
    likes: "10",
    color: "#ff980d", // Color Texto
    gradients: ["#ffd073", "#ffb54c"],
    statusbar: ["#ffd073", "light-content"],
    ingredientes: [
      { id: 1, icon: "steak", name: "Fresh steak", peso: "100g" },
      { id: 2, icon: "onion", name: "Onion", peso: "50g" },
    ],
    Steps: [
      {
        id: 1,
        icon: "steak",
        name: "Fresh steak",
        details: "Preoare a fresh steak with 3cm thikness.",
      },
      {
        id: 2,
        icon: "onion",
        name: "Onion",
        details: "Chop the onions finaly 8 evenly onto the steak.",
      },
      {
        id: 3,
        icon: "blackPepper",
        name: "Black Pepper",
        details: "Add black pepper & gendy press into the meat.",
      },
      {
        id: 4,
        icon: "redWine",
        name: "Red Wine",
        details: "Pour in red wine & marinate for 1 hour.",
      },
      {
        id: 5,
        icon: "butter",
        name: "Butter",
        details: "Fry the steak for 3 mins & add a piece of butter.",
      },
      {
        id: 6,
        icon: "lemon",
        name: "Lemon Juice",
        details: "Add a little lemon juice & heat 2 mins.",
      },
    ],
  },

  {
    name: "Strawberry Cake",
    image: "food-2.png",
    views: "306",
    likes: "42",
    color: "#9e725c",
    gradients: ["#ff7faa", "#ff668c"],
    statusbar: ["#ff7faa", "light-content"],
    ingredientes: [
      { id: 1, icon: "flour", name: "High-quality Flour", peso: "100g" },
      { id: 2, icon: "vegetableOil", name: "Vegetable Oil", peso: "50ml" },
      { id: 3, icon: "wSugar", name: "White Sugar", peso: "80g" },

      { id: 4, icon: "egg", name: "Fresh Egg", peso: "5pcs" },

      { id: 5, icon: "strawBerry", name: "Straw Berry Jam", peso: "15ml" },

      { id: 6, icon: "milk", name: "Pure Milk", peso: "50ml" },
    ],
    Steps: [
      {
        id: 1,
        icon: "flour",
        name: "High-quality Flour",
        details: "Preoare a fresh steak with 3cm thikness.",
      },
      {
        id: 2,
        icon: "vegetableOil",
        name: "Vegetable Oil",
        details: "Chop the onions finaly 8 evenly onto the steak.",
      },
      {
        id: 3,
        icon: "wSugar",
        name: "White Sugar",
        details: "Add black pepper & gendy press into the meat.",
      },
      {
        id: 4,
        icon: "egg",
        name: "Fresh Egg",
        details: "Pour in red wine & marinate for 1 hour.",
      },
      {
        id: 5,
        icon: "strawBerry",
        name: "Straw Berry Jam",
        details: "Fry the steak for 3 mins & add a piece of butter.",
      },
      {
        id: 6,
        icon: "milk",
        name: "Pure Milk",
        details: "Add a little lemon juice & heat 2 mins.",
      },
    ],
  },
] as unknown as RecipeI[];
