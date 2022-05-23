/*
  Warnings:

  - A unique constraint covering the columns `[ingredientId]` on the table `UserIngredient` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserIngredient_ingredientId_key" ON "UserIngredient"("ingredientId");
