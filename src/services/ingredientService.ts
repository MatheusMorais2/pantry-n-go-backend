import { badRequest, unauthorized } from "../utils/errors.js";
import spoonacularRepository from "../repositories/spoonacularRepository.js";

async function searchIngredient(ingredientQuery: string) {
  if (!ingredientQuery) throw badRequest("Ingredient");

  try {
    const searchList = await spoonacularRepository.searchIngredient(
      ingredientQuery
    );

    return searchList;
  } catch (error) {
    throw unauthorized("spoonacular");
  }
}

export default {
  searchIngredient,
};
