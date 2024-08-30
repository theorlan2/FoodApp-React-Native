import { RecipeI } from "@/types/Recipe";

export const recipeList = [
  {
    name: "Tom Yam Kung",
    // https://dribbble.com/tags/food-icons
    image:
      "https://cdn.dribbble.com/users/895808/screenshots/16300700/media/6d32883644ae50220d145d28e06a1406.png?resize=1600x1200&vertical=center",
    views: "30",
    likes: "10",
    color: "#ff980d", // Color Texto
    gradients: ["#FE740B", "#E03506"],
    statusbar: ["#FE740B", "light-content"],
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
    name: "Ramen",
    // https://dribbble.com/shots/15309163-Food-Memory-Ramen-PS
    image:
      "https://cdn.dribbble.com/users/895808/screenshots/15309163/media/7b2103d56da859a24d22cdf4de74ef1e.png?resize=1600x1200&vertical=center",
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

  {
    name: "Popsicle",
    // https://dribbble.com/shots/15949441-Food-Memory-Popsicle-PS
    image:
      "https://cdn.dribbble.com/users/895808/screenshots/15949441/media/fb3b6d29e8257b8fac91dd127a6c68b5.png?resize=1600x1200&vertical=center",
    views: "306",
    likes: "42",
    color: "#9e725c",
    gradients: ["#594EDC", "#60489C"],
    statusbar: ["#594EDC", "light-content"],
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
  {
    name: "Avocado",
    // https://dribbble.com/shots/15949441-Food-Memory-Popsicle-PS
    image:
      "https://cdn.dribbble.com/users/895808/screenshots/15913036/media/296b3548bca60fca602765b3008b51a1.png?resize=1600x1200&vertical=center",
    views: "306",
    likes: "42",
    color: "#9e725c",
    gradients: ["#594EDC", "#60489C"],
    statusbar: ["#594EDC", "light-content"],
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
