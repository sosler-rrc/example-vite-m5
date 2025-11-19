import { useCallback, useEffect, useState } from "react";
import * as GameTypeService from "../services/gameService";
import type { GameType } from "../types/GameType";

export function useGameTypes() {
  const [gameTypes, setGameTypes] = useState<GameType[]>([]);

  const fetchGameTypes = useCallback(async () => {
    const types = await GameTypeService.fetchGameTypes();
    setGameTypes([...types]);
  }, []);

  useEffect(() => {
    fetchGameTypes();
  }, [fetchGameTypes]);

  return {
    gameTypes,
    refetch: fetchGameTypes,
  };
}
