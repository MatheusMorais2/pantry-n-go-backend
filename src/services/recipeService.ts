import {
  badRequest,
  duplicateError,
  notFoundError,
  spoonacularError,
  unauthorized,
} from "../utils/errors.js";
import spoonacularRepository from "../repositories/spoonacularRepository.js";

export interface Ingredient {
  id: number;
  name: string;
  spoonacularId: number;
}

export interface UserIngredient {
  id: number;
  ingredient: Ingredient;
  ingredientId: number;
  userId: number;
}

async function getRecipesByIngredients(ingredientList: string) {
  if (ingredientList.length === 0) throw badRequest("Ingredient list");

  try {
    const recipesList = await spoonacularRepository.getRecipesByIngredients(
      ingredientList
    );
    console.log("recipesList: ", recipesList);
    return recipesList;
  } catch (error) {
    console.log("error: ", error);
    throw spoonacularError();
  }
}

async function searchRecipes(query: string) {
  if (query.length === 0) throw badRequest("Search query");

  try {
    const recipeList = await spoonacularRepository.searchRecipes(query);
    return recipeList;
  } catch {
    throw spoonacularError();
  }
}

async function getRecipeInstructions(recipeId: number) {
  if (!recipeId) throw badRequest("Recipe id");

  try {
    const recipeInstructions =
      await spoonacularRepository.getRecipeInstructions(recipeId);
    return recipeInstructions;
  } catch (error) {
    console.log("error:", error);
    throw spoonacularError();
  }
}

export default {
  getRecipesByIngredients,
  searchRecipes,
  getRecipeInstructions,
};
