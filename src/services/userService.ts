/* import { Example } from "@prisma/client"; */
import userRepository from "../repositories/userRepository.js";
import { duplicateError } from "../utils/errors.js";
import bcrypt from "bcrypt";
import { signupData } from "../controllers/userController.js";

async function signUp(signupData: signupData) {
  const user = await userRepository.findByEmail(signupData.email);
  if (user) throw duplicateError("user email");

  const hashedPassword = bcrypt.hashSync(signupData.password, 12);
  delete signupData.password;
  signupData.password = hashedPassword;

  await userRepository.create(signupData);
}

export default {
  signUp,
};
