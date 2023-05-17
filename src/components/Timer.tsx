import { useSelector } from "react-redux";
import { RootState } from "../store";

const Timer = () => {
  const countdownValue = useSelector(
    (state: RootState) => state.game.countdown
  );

  const displayTime = () => {
    const minutes = Math.floor(countdownValue / 60);
    const seconds = countdownValue % 60;
    return `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return <div className="text-4xl font-bold">{displayTime()}</div>;
};

export default Timer;
