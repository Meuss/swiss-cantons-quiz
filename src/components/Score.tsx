import { useSelector } from "react-redux";
import { RootState } from "../store";

const Score = () => {
  const guessedCantons = useSelector(
    (state: RootState) => state.guessedCantons
  );
  const score = guessedCantons.length;

  return (
    <div>
      <div className="text-xl font-bold sm:text-4xl">
        <span className="text-primary-500">{score}</span>/26
      </div>
    </div>
  );
};

export default Score;
