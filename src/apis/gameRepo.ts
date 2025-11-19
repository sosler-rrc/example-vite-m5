import type { BaseResponse } from "../types/BaseResponse";
import type { Game } from "../types/Game";
import type { GameType } from "../types/GameType";

//Setup the base url with the route prefix using the VITE_API_BASE_URL variable defined in the .env file
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/v1`;

export async function getGames() {
  const gameResponse: Response = await fetch(`${BASE_URL}/games`, {});

  if (!gameResponse.ok) {
    throw new Error("Failed to fetch games");
  }

  const json: BaseResponse<Game[]> = await gameResponse.json();
  return json.data;
}

export async function getGameTypes() {
  const gameTypeResponse: Response = await fetch(`${BASE_URL}/gameTypes`);

  if (!gameTypeResponse.ok) {
    throw new Error("Failed to fetch gameTypes");
  }

  const json: BaseResponse<GameType[]> = await gameTypeResponse.json();
  return json.data;
}

export async function deleteGame(gameId: string, sessionToken: string) {
  const gameResponse: Response = await fetch(`${BASE_URL}/games/${gameId}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${sessionToken}`,
    },
  });

  if (!gameResponse.ok) {
    throw new Error("Failed to delete game");
  }
}
