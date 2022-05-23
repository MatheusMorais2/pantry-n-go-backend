import {
  badRequest,
  duplicateError,
  notFoundError,
  spoonacularError,
  unauthorized,
} from "../utils/errors.js";
import spoonacularRepository from "../repositories/spoonacularRepository.js";
import ingredientRepository from "../repositories/ingredientRepository.js";
import userService from "./userService.js";

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

async function createIngredient(spoonacularId: number) {
  const spoonacularIngredientSearch =
    await ingredientRepository.findBySpoonacularId(spoonacularId);
  if (spoonacularIngredientSearch) throw duplicateError("Ingredient");

  let spoonacularIngredient;
  try {
    spoonacularIngredient = await spoonacularRepository.getIngredientById(
      spoonacularId
    );
  } catch {
    throw spoonacularError();
  }

  const ingredient = await ingredientRepository.createIngredient(
    spoonacularIngredient.name,
    spoonacularIngredient.id
  );

  return ingredient;
}

async function findBySpoonacularId(spoonacularId: number) {
  const ingredient = await ingredientRepository.findBySpoonacularId(
    spoonacularId
  );

  return ingredient;
}

async function createUserIngredient(userId: number, spoonacularId: number) {
  const user = await userService.findById(userId);

  const ingredient = await findBySpoonacularId(spoonacularId);

  if (!ingredient) {
    const createdIngredient = await createIngredient(spoonacularId);
    await ingredientRepository.createUserIngredient(
      user.id,
      createdIngredient.id
    );
    return;
  }

  await ingredientRepository.createUserIngredient(user.id, ingredient.id);
}

async function getUserIngredients(userId: number) {
  const user = await userService.findById(userId);

  const ingredientList = await ingredientRepository.getUserIngredients(user.id);
  return ingredientList;
}

async function deleteUserIngredient(userIngredientId: number, userId: number) {
  await userService.findById(userId);

  const userIngredient = await ingredientRepository.findUserIngredientById(
    userIngredientId
  );
  if (!userIngredient) throw notFoundError("User ingredient");

  await ingredientRepository.deleteUserIngredient(userIngredientId);

  const ingredientList = await ingredientRepository.getUserIngredients(userId);
  return ingredientList;
}

async function getRecommendedIngredients() {
  return await ingredientRepository.getRecommendedIngredients();
}

export default {
  searchIngredient,
  createIngredient,
  createUserIngredient,
  getUserIngredients,
  deleteUserIngredient,
  getRecommendedIngredients,
};
