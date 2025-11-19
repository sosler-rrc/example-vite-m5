import * as gameRepo from "../apis/gameRepo";

export async function fetchGames() {
  return await gameRepo.getGames();
}

export async function fetchGameTypes() {
  return await gameRepo.getGameTypes();
}

export async function deleteGame(gameId: string) {
  return await gameRepo.deleteGame(gameId);
}
