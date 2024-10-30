// Recipe Book:

// Create a Recipe class with properties like name, ingredients, and difficulty.
// Use an enum for difficulty levels (Easy, Medium, Hard).
// Include methods to add ingredients and to get the list of ingredients.
enum Difficulty {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
}
class Recipe {
  constructor(
    public name: string,
    public ingredients: string[],
    public difficulty: Difficulty
  ) {}
  addIngredient(ingredient: string) {
    this.ingredients.push(ingredient);
  }
}
const recipe = new Recipe(
  "Pizza",
  ["dough", "tomato", "cheese"],
  Difficulty.Easy
);
console.log(recipe);
recipe.addIngredient("olive oil");
recipe.addIngredient("basil");
console.log(recipe);
