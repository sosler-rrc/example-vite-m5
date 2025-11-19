import { Link } from "react-router";

export function Landing() {
  return (
    <div className="flex flex-col gap-2 text-lg py-8">
      <span>Welcome to the Game Library!</span>
      <Link
        to={"games"}
        className="text-sky-600 hover:underline">
        View All Games
      </Link>
    </div>
  );
}
