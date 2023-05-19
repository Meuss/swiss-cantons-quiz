import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { countdown, endGame } from "../store/gameSlice";
import { RootState } from "../store";
import Map from "./Map";
import Score from "./Score";
import Timer from "./Timer";
import ResetBtn from "./GameBtns/ResetBtn";
import PlayBtn from "./GameBtns/PlayBtn";
import GiveUpBtn from "./GameBtns/GiveUpBtn";
import Input from "./GameBtns/Input";

const Game = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const gameStatus = useSelector((state: RootState) => state.game.gameStatus);
  const countdownValue = useSelector(
    (state: RootState) => state.game.countdown
  );
  const countdownRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (gameStatus === "running" && countdownValue > 0) {
      countdownRef.current = setInterval(() => {
        dispatch(countdown());
      }, 1000);
    } else if (gameStatus !== "idle" && countdownRef.current) {
      clearInterval(countdownRef.current);
      dispatch(endGame());
    }

    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, [gameStatus, countdownValue, dispatch]);

  return (
    <div className="flex flex-col text-center sm:text-left">
      <h1 className="text-lg font-bold sm:text-2xl">{t("title")}</h1>
      <h2 className="texl-md sm:text-xl">{t("description")}</h2>
      <div className="mt-8 flex flex-col items-center justify-between gap-4">
        <div className="flex flex-col items-center justify-between gap-4 sm:w-full sm:flex-row sm:justify-between">
          {gameStatus === "idle" && <PlayBtn />}
          {gameStatus === "running" && <Input />}
          {gameStatus === "ended" && <ResetBtn />}
          <div className="flex gap-4 sm:gap-8">
            <Score />
            <Timer />
          </div>
        </div>
        <Map />
        {gameStatus === "running" && <GiveUpBtn />}
      </div>
    </div>
  );
};

export default Game;
