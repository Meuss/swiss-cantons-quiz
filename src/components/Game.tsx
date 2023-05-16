import Countdown from "./Countdown";
import GameActions from "./GameActions";
import Map from "./Map";

const Game = () => {
  return (
    <div>
      <GameActions />
      <Countdown />
      <Map />
    </div>
  );
};

export default Game;
