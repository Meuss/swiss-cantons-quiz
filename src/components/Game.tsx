import GameActions from "./GameActions";
import Map from "./Map";

const Game = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Swiss Canton Game</h1>
      <h2 className="text-xl">Can you name all 26 Swiss Cantons?</h2>
      <GameActions />
      <Map />
    </div>
  );
};

export default Game;
