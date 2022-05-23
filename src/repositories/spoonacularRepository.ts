import axios, { AxiosPromise } from "axios";

const spooncularAPI = axios.create({
  baseURL: process.env.SPOONACULAR_API_URL,
});

const apiKey = `?apiKey=${process.env.SPOONACULAR_API_KEY}`;

interface IngredientType {
  id: number;
  name: string;
  image: string;
}

type Results = IngredientType[];

interface SpoonacularIngredientSearchResult {
  results: Results;
  offset: string;
  number: string;
  totalResults: string;
}

async function searchIngredient(
  ingredientQuery: string
): Promise<SpoonacularIngredientSearchResult> {
  const ingredientList = await spooncularAPI.get(
    `/food/ingredients/search${apiKey}&query=${ingredientQuery}&metaInformation=false&number=20`
  );
  return ingredientList.data;
}

interface Ingredient {
  name: string;
  id: number;
}

async function getIngredientById(spoonacularId: number): Promise<Ingredient> {
  const { data } = await spooncularAPI.get(
    `food/ingredients/${spoonacularId}/information${apiKey}`
  );

  return { name: data.name, id: data.id };
}

async function getRecipesByIngredients(ingredientList: string) {
  console.log("ingredientList no repository: ", ingredientList);
  const response = await spooncularAPI.get(
    `recipes/findByIngredients${apiKey}&ingredients=${ingredientList}`
  );
  return response.data;
}

async function searchRecipes(query: string) {
  const { data } = await spooncularAPI.get(
    `recipes/complexSearch${apiKey}&query=${query}&fillIngredients=false&addRecipeInformation=false&addRecipeNutrition=false&addRecipeInformation=false&number=20`
  );
  return data;
}

async function getRecipeInstructions(recipeId: number) {
  console.log("recipeId no psoonasd: ", recipeId);
  const { data } = await spooncularAPI.get(
    `recipes/${recipeId}/analyzedInstructions${apiKey}&stepBreakdown=false`
  );
  return data;
}

export default {
  searchIngredient,
  getIngredientById,
  getRecipesByIngredients,
  searchRecipes,
  getRecipeInstructions,
};
