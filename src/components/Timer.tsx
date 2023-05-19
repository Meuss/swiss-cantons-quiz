import { useSelector } from "react-redux";
import { useRef } from "react";
import { RootState } from "../store";

const Timer = () => {
  const counterRef = useRef<HTMLInputElement | null>(null);
  const countdownValue = useSelector(
    (state: RootState) => state.game.countdown
  );

  const displayTime = () => {
    const minutes = Math.floor(countdownValue / 60);
    const seconds = countdownValue % 60;
    if (countdownValue < 46 && countdownValue > 15) {
      counterRef.current?.classList.add("text-amber-500");
    } else if (countdownValue < 16 && countdownValue > 0) {
      counterRef.current?.classList.add("text-secondary-500");
    } else if (countdownValue === 0) {
      counterRef.current?.classList.remove("text-amber-500");
      counterRef.current?.classList.remove("text-secondary-500");
    }
    return `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div ref={counterRef} className="text-xl font-bold sm:text-4xl">
      {displayTime()}
    </div>
  );
};

export default Timer;
