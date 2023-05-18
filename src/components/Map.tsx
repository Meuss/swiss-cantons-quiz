import { useSelector } from "react-redux";
import { useEffect } from "react";
import { selectGuessedCantons } from "../store/guessedCantonsSlice";
import { missingCantons } from "../store/remainingCantonsSlice";
import { RootState } from "../store";
import { createLabel, deleteLabels } from "../utils/createLabel";
import { ReactComponent as SwissMap } from "../assets/switzerland.svg";

const Map = () => {
  const guessedCantons = useSelector(selectGuessedCantons);
  const gameStatus = useSelector((state: RootState) => state.game.gameStatus);
  const remainingCantons = useSelector(missingCantons);

  useEffect(() => {
    guessedCantons.forEach((canton) => {
      const element = document.getElementById(canton);
      if (element) {
        element.classList.add("guessed");
        createLabel(canton);
      }
    });
  }, [guessedCantons]);

  useEffect(() => {
    if (gameStatus === "ended") {
      Object.keys(remainingCantons).forEach((canton) => {
        const element = document.getElementById(canton);
        if (element) {
          element.classList.add("missing");
          createLabel(canton);
        }
      });
    } else if (gameStatus === "idle") {
      document.querySelectorAll("#swiss-map path").forEach((element) => {
        element.classList.remove("guessed");
        element.classList.remove("missing");
        deleteLabels();
      });
    }
  }, [gameStatus, remainingCantons]);

  return (
    <div className="mx-auto lg:max-w-[70vw] xl:max-w-[60vw] 2xl:max-w-[50vw]">
      <SwissMap />
    </div>
  );
};

export default Map;
