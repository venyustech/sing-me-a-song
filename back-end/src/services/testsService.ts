import testsRepository from "../repositories/testsRepository";

async function resetDbTests() {
  await testsRepository.deleteAllDb();
}

export default {
  resetDbTests,
};