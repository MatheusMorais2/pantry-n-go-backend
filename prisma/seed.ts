import { prisma } from "../src/database";

const ingredientArray = [
  "Olive oil",
  "All purpose flour",
  "Butter",
  "Chicken",
  "Sugar",
  "Salt",
  "Egg",
  "Rice",
  "Vegetable oil",
  "Pork",
  "Beef",
  "Cheese",
  "Garlic",
  "Orange",
  "Turkey",
  "Onion",
  "Corn",
  "Whole milk",
  "Mayonnaise",
  "Chiles",
  "Almonds",
  "Bacon",
  "Mushrooms",
  "Coconut",
  "Beets",
  "Strawberries",
  "Fennel",
  "Lamb",
  "Apple",
  "Shrimp",
];

async function main() {
  ingredientArray.map(async (elem: string) => {
    await prisma.ingredient.upsert({
      where: {
        name: elem,
      },
      update: {},
      create: {
        name: elem,
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
