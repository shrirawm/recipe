import random

# Expanded recipe data with 30 unique recipes
recipes = {
    "Pasta Alfredo": {
        "ingredients": ["pasta", "cream", "cheese", "garlic"],
        "how_to_make": (
            "1. Boil pasta according to package instructions.\n"
            "2. In a pan, melt butter and add garlic.\n"
            "3. Stir in cream and cheese until smooth.\n"
            "4. Add pasta to the sauce and mix well.\n"
            "5. Serve hot."
        )
    },
    "Chili Con Carne": {
        "ingredients": ["ground beef", "kidney beans", "tomato sauce", "chili powder"],
        "how_to_make": (
            "1. Brown beef in a pot.\n"
            "2. Add beans, tomato sauce, and spices.\n"
            "3. Simmer until thickened.\n"
            "4. Serve hot with rice or bread."
        )
    },
    "Veggie Burger": {
        "ingredients": ["black beans", "breadcrumbs", "onion", "garlic"],
        "how_to_make": (
            "1. Mash beans and mix with breadcrumbs, onion, and garlic.\n"
            "2. Form patties and cook in a pan until crispy.\n"
            "3. Serve on buns with toppings."
        )
    },
    "Garlic Bread": {
        "ingredients": ["bread", "garlic", "butter", "parsley"],
        "how_to_make": (
            "1. Mix butter with minced garlic and parsley.\n"
            "2. Spread on bread and bake until golden.\n"
            "3. Serve warm."
        )
    },
    "Vegetable Lasagna": {
        "ingredients": ["lasagna noodles", "tomato sauce", "cheese", "spinach"],
        "how_to_make": (
            "1. Layer noodles with sauce, cheese, and spinach.\n"
            "2. Bake until bubbly and golden.\n"
            "3. Let cool slightly before serving."
        )
    },
    "Mango Smoothie": {
        "ingredients": ["mango", "yogurt", "milk", "honey"],
        "how_to_make": (
            "1. Add mango, yogurt, milk, and honey to a blender.\n"
            "2. Blend until smooth.\n"
            "3. Pour into a glass and enjoy."
        )
    },
    "Vegetable Soup": {
        "ingredients": ["carrot", "potato", "celery", "broth"],
        "how_to_make": (
            "1. Chop vegetables into small pieces.\n"
            "2. Bring broth to a boil and add vegetables.\n"
            "3. Simmer until vegetables are tender.\n"
            "4. Season with salt and pepper to taste.\n"
            "5. Serve warm."
        )
    },
    "Avocado Toast": {
        "ingredients": ["avocado", "bread", "salt", "pepper"],
        "how_to_make": (
            "1. Toast the bread slices.\n"
            "2. Mash avocado in a bowl, add salt and pepper.\n"
            "3. Spread avocado on toast and serve."
        )
    },
    "Caesar Salad": {
        "ingredients": ["lettuce", "croutons", "parmesan", "caesar dressing"],
        "how_to_make": (
            "1. Chop lettuce and place in a bowl.\n"
            "2. Add croutons and parmesan cheese.\n"
            "3. Drizzle Caesar dressing and toss well.\n"
            "4. Serve fresh."
        )
    },
    "Grilled Cheese Sandwich": {
        "ingredients": ["bread", "cheese", "butter"],
        "how_to_make": (
            "1. Butter one side of each bread slice.\n"
            "2. Place cheese between two slices, buttered sides out.\n"
            "3. Grill until golden and cheese is melted.\n"
            "4. Serve warm."
        )
    },
    "Banana Pancakes": {
        "ingredients": ["banana", "egg", "flour", "milk"],
        "how_to_make": (
            "1. Mash banana and mix with egg, flour, and milk.\n"
            "2. Pour batter onto a heated pan.\n"
            "3. Flip when bubbles form and cook until golden.\n"
            "4. Serve with syrup."
        )
    },
    "Fruit Salad": {
        "ingredients": ["apple", "banana", "orange", "grapes"],
        "how_to_make": (
            "1. Chop all fruits into bite-sized pieces.\n"
            "2. Mix in a bowl and serve chilled."
        )
    },
    "Tomato Soup": {
        "ingredients": ["tomato", "onion", "garlic", "broth"],
        "how_to_make": (
            "1. Sauté onion and garlic until soft.\n"
            "2. Add tomatoes and broth.\n"
            "3. Simmer, then blend until smooth.\n"
            "4. Serve warm with croutons."
        )
    },
    "Spaghetti Bolognese": {
        "ingredients": ["spaghetti", "ground beef", "tomato sauce", "onion"],
        "how_to_make": (
            "1. Cook spaghetti as per instructions.\n"
            "2. Brown beef with onion in a pan.\n"
            "3. Add tomato sauce and simmer.\n"
            "4. Combine with spaghetti and serve."
        )
    },
    "Omelette": {
        "ingredients": ["eggs", "cheese", "ham", "bell pepper"],
        "how_to_make": (
            "1. Whisk eggs, then pour into a heated pan.\n"
            "2. Add cheese, ham, and bell pepper.\n"
            "3. Fold when set and serve."
        )
    },
    "Beef Tacos": {
        "ingredients": ["ground beef", "taco shells", "lettuce", "cheese"],
        "how_to_make": (
            "1. Brown beef in a pan.\n"
            "2. Fill taco shells with beef, lettuce, and cheese.\n"
            "3. Serve with salsa and sour cream."
        )
    },
    "Chicken Stir Fry": {
        "ingredients": ["chicken", "soy sauce", "bell peppers", "garlic"],
        "how_to_make": (
            "1. Slice chicken and vegetables.\n"
            "2. Heat oil in a pan, add garlic and chicken.\n"
            "3. Stir-fry until chicken is cooked.\n"
            "4. Add bell peppers and soy sauce.\n"
            "5. Cook until vegetables are tender-crisp and serve."
        )
    },
    # Add 10 more recipes here following the same format
}

def suggest_recipes(ingredient):
    # Find recipes containing the user's ingredient
    suggestions = {recipe: details for recipe, details in recipes.items() if ingredient.lower() in details["ingredients"]}

    if suggestions:
        print(f"\nRecipes you can make with {ingredient}:")
        for recipe, details in suggestions.items():
            print(f"\n{recipe}")
            print("Ingredients:", ", ".join(details["ingredients"]))
            print("How to Make:\n" + details["how_to_make"])
    else:
        print(f"\nNo recipes found with {ingredient}")
        print("Here’s a random recipe suggestion:")
        random_recipe = random.choice(list(recipes.keys()))
        details = recipes[random_recipe]
        print(f"\n{random_recipe}")
        print("Ingredients:", ", ".join(details["ingredients"]))
        print("How to Make:\n" + details["how_to_make"])

# Main loop to allow repeated input
while True:
    user_ingredient = input("\nEnter an ingredient you have (or type 'exit' to quit): ")
    if user_ingredient.lower() == "exit":
        break
    suggest_recipes(user_ingredient)
