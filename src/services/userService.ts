/* import { Example } from "@prisma/client"; */
import userRepository from "../repositories/userRepository.js";
import { badRequest, duplicateError, unauthorized } from "../utils/errors.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { signupData, signinData } from "../controllers/userController.js";

async function signUp(signupData: signupData) {
  const user = await userRepository.findByEmail(signupData.email);
  if (user) throw duplicateError("user email");

  if (signupData.password !== signupData.confirmPassword)
    throw badRequest("Confirm password");

  const hashedPassword = bcrypt.hashSync(signupData.password, 12);
  delete signupData.password;
  signupData.password = hashedPassword;

  await userRepository.create(signupData);
}

async function signIn(signInData: signinData) {
  console.log("chegou aqui no service/signIn");
  console.log("signInData: ", signInData);
  const user = await getUserOrFail(signInData);

  const twoDays = 60 * 60 * 24 * 2;
  const config = { expiresIn: twoDays };
  const signature = { userId: user.id };

  const token = jwt.sign(signature, process.env.JWT_SECRET, config);
  console.log("token: ", token);

  await userRepository.createSession(user.id, token);

  return { token, name: user.name };
}

async function getUserOrFail(signInData: signinData) {
  const user = await userRepository.findByEmail(signInData.email);
  console.log("user: ", user);
  if (!user) throw unauthorized("Invalid credentials");

  const isPasswordValid = bcrypt.compareSync(
    signInData.password,
    user.password
  );
  if (!isPasswordValid) throw unauthorized("Invalid credentials");

  return user;
}

export default {
  signUp,
  signIn,
};
