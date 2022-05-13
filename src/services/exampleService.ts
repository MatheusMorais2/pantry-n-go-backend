/* import { Example } from "@prisma/client"; */
import exampleRepository from "../repositories/exampleRepository.js";

async function findAll() {
  const items = await exampleRepository.findAll();
  return items;
}

export default {
  findAll,
};
