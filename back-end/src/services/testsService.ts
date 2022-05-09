import testsRepository from "../repositories/testsRepository.js";

async function resetDbTests() {
  await testsRepository.deleteAllDb();
}

export default {
  resetDbTests,
};