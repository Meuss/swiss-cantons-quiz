import { useSelector } from "react-redux";
import { ReactComponent as SwissMap } from "../assets/switzerland.svg";
import { selectGuessedCantons } from "../store/guessedCantonsSlice";
import { useEffect } from "react";

const Map = () => {
  const guessedCantons = useSelector(selectGuessedCantons);

  useEffect(() => {
    guessedCantons.forEach((canton) => {
      const element = document.getElementById(canton);
      if (element) {
        element.classList.add("guessed");
      }
    });
  }, [guessedCantons]);

  return (
    <div className="mx-auto lg:max-w-[70vw] xl:max-w-[60vw] 2xl:max-w-[50vw]">
      <SwissMap />
    </div>
  );
};

export default Map;
