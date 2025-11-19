import { Game } from "../components/Game";
import { useGames } from "../hooks/useGames";
import { useGameTypes } from "../hooks/useGameTypes";

export function AllGames() {
  const { games, onDeleteGame } = useGames();
  const { gameTypes } = useGameTypes();

  return (
    <div className="p-16 flex flex-col gap-2">
      {games.map((x) => (
        <Game
          key={x.id}
          game={x}
          gameTypes={gameTypes}
          onDeleteGame={onDeleteGame}
        />
      ))}
    </div>
  );
}
