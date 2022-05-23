import { prisma } from "../src/database.js";

const ingredientArray = [
  { name: "Olive oil", spoonacularId: 4053 },
  { name: "All purpose flour", spoonacularId: 20081 },
  { name: "Butter", spoonacularId: 1001 },
  { name: "Chicken", spoonacularId: 5006 },
  { name: "Sugar", spoonacularId: 19335 },
  { name: "Salt", spoonacularId: 2047 },
  { name: "Egg", spoonacularId: 1123 },
  { name: "Rice", spoonacularId: 20444 },
  { name: "Vegetable oil", spoonacularId: 4669 },
  { name: "Pork", spoonacularId: 10010219 },
  { name: "Beef", spoonacularId: 23572 },
  { name: "Cheese", spoonacularId: 1041009 },
  { name: "Garlic", spoonacularId: 11215 },
  { name: "Orange", spoonacularId: 9200 },
  { name: "Turkey", spoonacularId: 5165 },
  { name: "Onion", spoonacularId: 11282 },
  { name: "Corn", spoonacularId: 11168 },
  { name: "Milk", spoonacularId: 1077 },
  { name: "Mayonnaise", spoonacularId: 4025 },
  { name: "Chiles", spoonacularId: 11819 },
  { name: "Almonds", spoonacularId: 12061 },
  { name: "Bacon", spoonacularId: 10123 },
  { name: "Mushrooms", spoonacularId: 11260 },
  { name: "Coconut", spoonacularId: 12104 },
  { name: "Beets", spoonacularId: 11080 },
  { name: "Strawberries", spoonacularId: 9316 },
  { name: "Fennel", spoonacularId: 11957 },
  { name: "Lamb", spoonacularId: 10017224 },
  { name: "Apple", spoonacularId: 9003 },
  { name: "Shrimp", spoonacularId: 15270 },
  { name: "Broccoli", spoonacularId: 11090 },
  { name: "Cauliflower", spoonacularId: 11135 },
  { name: "Fish", spoonacularId: 10115261 },
  { name: "Bread", spoonacularId: 18064 },
  { name: "Tomato", spoonacularId: 11529 },
  { name: "Tomato sauce", spoonacularId: 11549 },
  { name: "Carrot", spoonacularId: 11124 },
  { name: "Potato", spoonacularId: 11352 },
  { name: "Pasta", spoonacularId: 20420 },
  { name: "Wrap", spoonacularId: 10018364 },
  { name: "Ginger", spoonacularId: 11216 },
];

async function main() {
  ingredientArray.map(async (elem: { name: string; spoonacularId: number }) => {
    await prisma.ingredient.upsert({
      where: {
        name: elem.name,
      },
      update: {},
      create: {
        name: elem.name,
        spoonacularId: elem.spoonacularId,
      },
    });
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
