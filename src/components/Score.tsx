import { useSelector } from "react-redux";
import { RootState } from "../store";

const Score = () => {
  const guessedCantons = useSelector(
    (state: RootState) => state.guessedCantons
  );
  const score = guessedCantons.length;

  return (
    <div>
      <div className="text-4xl font-bold">{score}/26</div>
    </div>
  );
};

export default Score;
