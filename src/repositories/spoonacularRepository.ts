import axios from "axios";

const spooncularAPI = axios.create({
  baseURL: process.env.SPOONACULAR_API_URL,
});

const apiKey = `?apiKey=${process.env.SPOONACULAR_API_KEY}`;

async function searchIngredient(ingredientQuery: string) {
  const ingredientList = await spooncularAPI.get(
    `/food/ingredients/search${apiKey}&query=${ingredientQuery}&metaInformation=false&number=2`
  );
  return ingredientList;
}

export default {
  searchIngredient,
};
