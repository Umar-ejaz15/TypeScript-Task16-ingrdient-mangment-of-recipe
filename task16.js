"use strict";
// Recipe Book:
// Create a Recipe class with properties like name, ingredients, and difficulty.
// Use an enum for difficulty levels (Easy, Medium, Hard).
// Include methods to add ingredients and to get the list of ingredients.
var Difficulty;
(function (Difficulty) {
    Difficulty["Easy"] = "Easy";
    Difficulty["Medium"] = "Medium";
    Difficulty["Hard"] = "Hard";
})(Difficulty || (Difficulty = {}));
class Recipe {
    constructor(name, ingredients, difficulty) {
        this.name = name;
        this.ingredients = ingredients;
        this.difficulty = difficulty;
    }
    addIngredient(ingredient) {
        this.ingredients.push(ingredient);
    }
}
const recipe = new Recipe("Pizza", ["dough", "tomato", "cheese"], Difficulty.Easy);
console.log(recipe);
recipe.addIngredient("olive oil");
recipe.addIngredient("basil");
console.log(recipe);
