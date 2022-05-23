/*
  Warnings:

  - A unique constraint covering the columns `[spoonacularId]` on the table `Ingredient` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `spoonacularId` to the `Ingredient` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "spoonacularId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Ingredient_spoonacularId_key" ON "Ingredient"("spoonacularId");
