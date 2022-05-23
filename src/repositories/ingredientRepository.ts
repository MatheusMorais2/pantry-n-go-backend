import { prisma } from "../database.js";

async function createIngredient(name: string, spoonacularId: number) {
  const createdIngredient = await prisma.ingredient.create({
    data: {
      name: name,
      spoonacularId: spoonacularId,
    },
  });

  return createdIngredient;
}

async function findByName(name: string) {
  const ingredient = await prisma.ingredient.findUnique({
    where: {
      name: name,
    },
  });

  return ingredient;
}

async function findById(ingredientId: number) {
  const ingredient = await prisma.ingredient.findUnique({
    where: {
      id: ingredientId,
    },
  });

  return ingredient;
}

async function findBySpoonacularId(spoonacularId: number) {
  const ingredient = await prisma.ingredient.findUnique({
    where: {
      spoonacularId: spoonacularId,
    },
  });

  return ingredient;
}

async function createUserIngredient(userId: number, ingredientId: number) {
  console.log("chegou   aqui?");
  await prisma.userIngredient.create({
    data: {
      userId: userId,
      ingredientId: ingredientId,
    },
  });
}

async function getUserIngredients(userId: number) {
  const ingredientList = await prisma.userIngredient.findMany({
    where: {
      userId: userId,
    },
    include: {
      user: false,
      ingredient: true,
    },
  });

  return ingredientList;
}

async function getRecommendedIngredients() {
  const ingredientList = await prisma.ingredient.findMany({});
  return ingredientList.filter((elem, index) => index < 40);
}

async function deleteUserIngredient(ingredientId: number) {
  const ingredientList = await prisma.userIngredient.delete({
    where: {
      id: ingredientId,
    },
    include: {
      ingredient: true,
    },
  });
  console.log(ingredientList);
  return ingredientList;
}

async function findUserIngredientById(userIngredientId: number) {
  const search = await prisma.userIngredient.findUnique({
    where: {
      id: userIngredientId,
    },
  });
  return search;
}

export default {
  createIngredient,
  findByName,
  findById,
  createUserIngredient,
  getUserIngredients,
  findBySpoonacularId,
  deleteUserIngredient,
  findUserIngredientById,
  getRecommendedIngredients,
};
