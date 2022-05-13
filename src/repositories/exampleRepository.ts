import { prisma } from "../database.js";

async function findAll() {
  return prisma.example.findMany();
}

export default {
  findAll,
};
