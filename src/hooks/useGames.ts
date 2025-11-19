import { useCallback, useEffect, useState } from "react";
import * as GameService from "../services/gameService";
import { toast } from "react-toastify";
import type { Game } from "../types/Game";
import { useAuth } from "@clerk/clerk-react";

export function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const { getToken } = useAuth();
  const [error, setError] = useState<string | null>();

  const fetchGames = useCallback(async () => {
    setLoading(true);
    try {
      const gamesData = await GameService.fetchGames();
      setGames(gamesData);
    } catch (errorObject) {
      setError(`${errorObject}`);
    } finally {
      setLoading(false);
    }
  }, []);

  const onDeleteGame = useCallback(async (gameId: string) => {
    const sessionToken = await getToken();

    if (sessionToken) {
      try {
        const res = window.confirm("Are you sure you'd like to delete this game? This cannot be undone.");

        if (res) {
          await GameService.deleteGame(gameId, sessionToken);

          setGames((prev) => prev.filter((r) => r.id !== gameId));
          toast("Game has been deleted", {
            position: "bottom-center",
            theme: "light",
            hideProgressBar: true,
            closeButton: false,
            autoClose: 2500,
          });
        }
      } catch (errorObject) {
        setError(`${errorObject}`);
      }
    }
  }, []);

  useEffect(() => {
    console.log("Fetching games...");
    fetchGames();
  }, [fetchGames]);

  return {
    games,
    loading,
    error,
    onDeleteGame,
    refetch: fetchGames,
  };
}
