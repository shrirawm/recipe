// Expanded recipe data with 30 different recipes
const recipes = {
  "Pasta Alfredo": {
    ingredients: ["pasta", "cream", "cheese", "garlic"],
    how_to_make: "1. Boil pasta according to package instructions.\n2. In a pan, melt butter and add garlic.\n3. Stir in cream and cheese until smooth.\n4. Add pasta to the sauce and mix well.\n5. Serve hot."
  },
  "Chili Con Carne": {
    ingredients: ["ground beef", "kidney beans", "tomato sauce", "chili powder"],
    how_to_make: "1. Brown beef in a pot.\n2. Add beans, tomato sauce, and spices.\n3. Simmer until thickened.\n4. Serve hot with rice or bread."
  },
  "Veggie Burger": {
    ingredients: ["black beans", "breadcrumbs", "onion", "garlic"],
    how_to_make: "1. Mash beans and mix with breadcrumbs, onion, and garlic.\n2. Form patties and cook in a pan until crispy.\n3. Serve on buns with toppings."
  },
  "Garlic Bread": {
    ingredients: ["bread", "garlic", "butter", "parsley"],
    how_to_make: "1. Mix butter with minced garlic and parsley.\n2. Spread on bread and bake until golden.\n3. Serve warm."
  },
  "Vegetable Lasagna": {
    ingredients: ["lasagna noodles", "tomato sauce", "cheese", "spinach"],
    how_to_make: "1. Layer noodles with sauce, cheese, and spinach.\n2. Bake until bubbly and golden.\n3. Let cool slightly before serving."
  },
  "Mango Smoothie": {
    ingredients: ["mango", "yogurt", "milk", "honey"],
    how_to_make: "1. Add mango, yogurt, milk, and honey to a blender.\n2. Blend until smooth.\n3. Pour into a glass and enjoy."
  },
  "Vegetable Soup": {
    ingredients: ["carrot", "potato", "celery", "broth"],
    how_to_make: "1. Chop vegetables into small pieces.\n2. Bring broth to a boil and add vegetables.\n3. Simmer until tender.\n4. Season with salt and pepper to taste."
  },
  "Caesar Salad": {
    ingredients: ["lettuce", "croutons", "parmesan", "caesar dressing"],
    how_to_make: "1. Chop lettuce and place in a bowl.\n2. Add croutons and parmesan cheese.\n3. Drizzle Caesar dressing and toss well."
  },
  "Grilled Cheese Sandwich": {
    ingredients: ["bread", "cheese", "butter"],
    how_to_make: "1. Butter one side of each bread slice.\n2. Place cheese between slices, buttered sides out.\n3. Grill until golden and cheese melts."
  },
  "Banana Pancakes": {
    ingredients: ["banana", "egg", "flour", "milk"],
    how_to_make: "1. Mash banana and mix with egg, flour, and milk.\n2. Pour batter onto a heated pan.\n3. Flip when bubbles form and cook until golden."
  },
  "Fruit Salad": {
    ingredients: ["apple", "banana", "orange", "grapes"],
    how_to_make: "1. Chop all fruits into bite-sized pieces.\n2. Mix in a bowl and serve chilled."
  },
  "Tomato Soup": {
    ingredients: ["tomato", "onion", "garlic", "broth"],
    how_to_make: "1. Sauté onion and garlic until soft.\n2. Add tomatoes and broth.\n3. Simmer, then blend until smooth."
  },
  "Spaghetti Bolognese": {
    ingredients: ["spaghetti", "ground beef", "tomato sauce", "onion"],
    how_to_make: "1. Cook spaghetti as per instructions.\n2. Brown beef with onion.\n3. Add tomato sauce and simmer."
  },
  "Omelette": {
    ingredients: ["eggs", "cheese", "ham", "bell pepper"],
    how_to_make: "1. Whisk eggs, then pour into a heated pan.\n2. Add cheese, ham, and bell pepper.\n3. Fold when set and serve."
  },
  "Beef Tacos": {
    ingredients: ["ground beef", "taco shells", "lettuce", "cheese"],
    how_to_make: "1. Brown beef in a pan.\n2. Fill taco shells with beef, lettuce, and cheese.\n3. Serve with salsa."
  },
  "Avocado Toast": {
    ingredients: ["avocado", "bread", "salt", "pepper"],
    how_to_make: "1. Toast bread.\n2. Mash avocado with salt and pepper.\n3. Spread on toast."
  },
  "Chicken Stir Fry": {
    ingredients: ["chicken", "soy sauce", "bell peppers", "garlic"],
    how_to_make: "1. Slice chicken and vegetables.\n2. Stir-fry with garlic.\n3. Add soy sauce and peppers."
  },
  "Shrimp Scampi": {
    ingredients: ["shrimp", "garlic", "butter", "lemon"],
    how_to_make: "1. Sauté garlic in butter.\n2. Add shrimp and cook until pink.\n3. Drizzle lemon and serve."
  },
  "BBQ Chicken Pizza": {
    ingredients: ["pizza dough", "chicken", "bbq sauce", "cheese"],
    how_to_make: "1. Spread BBQ sauce on dough.\n2. Add chicken and cheese.\n3. Bake until golden."
  },
  "Falafel": {
    ingredients: ["chickpeas", "parsley", "garlic", "onion"],
    how_to_make: "1. Blend chickpeas with parsley, garlic, and onion.\n2. Form balls and fry until golden."
  },
  "Ratatouille": {
    ingredients: ["zucchini", "eggplant", "bell peppers", "tomato"],
    how_to_make: "1. Slice vegetables.\n2. Layer in a dish with tomato sauce.\n3. Bake until tender."
  },
  "Lentil Soup": {
    ingredients: ["lentils", "carrot", "celery", "onion"],
    how_to_make: "1. Sauté vegetables.\n2. Add lentils and broth.\n3. Simmer until lentils are soft."
  },
  "Stuffed Bell Peppers": {
    ingredients: ["bell peppers", "ground beef", "rice", "tomato sauce"],
    how_to_make: "1. Hollow peppers and fill with beef, rice, and sauce.\n2. Bake until peppers are tender."
  },
  "Chicken Caesar Wrap": {
    ingredients: ["chicken", "lettuce", "tortilla", "caesar dressing"],
    how_to_make: "1. Mix chicken, lettuce, and dressing.\n2. Wrap in tortilla and serve."
  },
  "Caprese Salad": {
    ingredients: ["tomato", "mozzarella", "basil", "olive oil"],
    how_to_make: "1. Slice tomatoes and mozzarella.\n2. Layer with basil leaves.\n3. Drizzle with olive oil."
  },
  "Hummus": {
    ingredients: ["chickpeas", "tahini", "lemon", "garlic"],
    how_to_make: "1. Blend chickpeas, tahini, lemon, and garlic.\n2. Serve with pita bread."
  },
  "Fried Rice": {
    ingredients: ["rice", "carrot", "peas", "soy sauce"],
    how_to_make: "1. Sauté vegetables.\n2. Add rice and soy sauce.\n3. Cook until heated through."
  },
  "Greek Salad": {
    ingredients: ["cucumber", "tomato", "feta", "olives"],
    how_to_make: "1. Chop vegetables.\n2. Toss with feta and olives.\n3. Drizzle with olive oil."
  },
  "Chicken Curry": {
    ingredients: ["chicken", "curry powder", "coconut milk", "onion"],
    how_to_make: "1. Brown chicken with onion.\n2. Add curry powder and coconut milk.\n3. Simmer until thickened."
  },
  "Pancakes": {
    ingredients: ["flour", "milk", "egg", "sugar"],
    how_to_make: "1. Mix ingredients into batter.\n2. Pour onto a pan and cook.\n3. Flip and cook until golden."
  }
};

function suggestRecipe() {
  const ingredient = document.getElementById("ingredientInput").value.toLowerCase();
  const recipeContainer = document.getElementById("recipeContainer");
  recipeContainer.innerHTML = "";

  const suggestions = Object.entries(recipes).filter(([name, details]) =>
    details.ingredients.includes(ingredient)
  );

  if (suggestions.length > 0) {
    suggestions.forEach(([name, details]) => {
      const recipeDiv = document.createElement("div");
      recipeDiv
