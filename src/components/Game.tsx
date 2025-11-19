import { Trash } from "lucide-react";
import type { Game } from "../types/Game";
import type { GameType } from "../types/GameType";
import { Button } from "./ui/Button";

export interface GameProps {
  game: Game;
  gameTypes: GameType[];

  onDeleteGame: (gameId: string) => void;
}

export function Game({ game, gameTypes, onDeleteGame }: GameProps) {
  return (
    <div className="flex justify-between p-2 border rounded bg-stone-100">
      <div className="flex flex-col">
        <span className="text-xl">
          <b>{game.title}</b>
        </span>
        <span>
          <b>Description:</b> {game.description}
        </span>
        <span>
          <b>Price:</b> {game.price}$
        </span>
        <span>
          <b>Game Type: </b>
          {gameTypes.find((type) => type.id == game.typeId)?.name}
        </span>
      </div>
      <Button onClick={() => onDeleteGame(game.id)}>
        <Trash />
      </Button>
    </div>
  );
}
