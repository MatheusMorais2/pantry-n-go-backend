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
  console.log("userRepository: email:", email);
  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });
  console.log("userRepository: user:", user);
  return user;
}

async function create(userData: signupData) {
  await prisma.user.create({
    data: {
      email: userData.email,
      name: userData.name,
      password: userData.password,
    },
  });
}

async function createSession(userId: number, token: string) {
  prisma.session.create({
    data: {
      userId: userId,
      token: token,
    },
  });
}

export default {
  find,
  findByEmail,
  create,
  createSession,
};
