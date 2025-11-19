import { Link } from "react-router";
import { Button } from "../../ui/Button";

export function Navbar() {
  return (
    <header>
      <nav className="flex justify-between">
        <div className="title m-w-60">
          <Link to="/">
            <h1 className="text-4xl cursor-pointer">Game Library</h1>
          </Link>
        </div>
        <div className="links flex flex-row gap-4 justify-around items-center">
          <Link to="/games">
            <Button>All Games</Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
