import { prisma } from "../database.js";
import { signupData } from "../controllers/userController.js";

async function find(id: number) {
  return prisma.user.findUnique({
    where: {
      id: id,
    },
  });
}

async function findByEmail(email: string) {
  return prisma.user.findUnique({
    where: {
      email: email,
    },
  });
}

async function create(userData: signupData) {
  prisma.user.create({
    data: {
      email: userData.email,
      name: userData.name,
      password: userData.password,
    },
  });
}

export default {
  find,
  findByEmail,
  create,
};
