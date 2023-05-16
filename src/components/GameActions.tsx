import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RestartIcon from "@mui/icons-material/Replay";
import PlayIcon from "@mui/icons-material/PlayArrow";
import Stack from "@mui/material/Stack";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame, giveUp, countdown, restartGame } from "../store/gameSlice";
import { RootState } from "../store";

const GameActions = () => {
  const dispatch = useDispatch();
  const gameStatus = useSelector((state: RootState) => state.game.gameStatus);
  const countdownValue = useSelector(
    (state: RootState) => state.game.countdown
  );
  const countdownRef = useRef<NodeJS.Timeout | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (gameStarted && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameStarted]);

  useEffect(() => {
    if (gameStatus === "running" && countdownValue > 0) {
      countdownRef.current = setInterval(() => {
        dispatch(countdown());
      }, 1000);
    } else if (countdownRef.current) {
      clearInterval(countdownRef.current);
    }

    return () => {
      if (countdownRef.current) {
        clearInterval(countdownRef.current);
      }
    };
  }, [gameStatus, countdownValue, dispatch]);

  const onStartGame = () => {
    dispatch(startGame());
    setGameStarted(true);
  };

  const onGiveUp = () => {
    dispatch(giveUp());
  };

  const onRestart = () => {
    dispatch(restartGame());
  };

  const displayTime = () => {
    const minutes = Math.floor(countdownValue / 60);
    const seconds = countdownValue % 60;
    return `0${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };
  return (
    <div className="mt-8 flex items-center justify-between">
      <div>
        {gameStatus === "idle" && (
          <Button
            variant="contained"
            endIcon={<PlayIcon />}
            onClick={onStartGame}
          >
            Play
          </Button>
        )}
        {gameStatus === "running" && (
          <TextField
            label="Enter Canton"
            variant="outlined"
            className="w-[300px]"
            InputProps={{ inputRef: inputRef }}
          />
        )}
        {gameStatus === "ended" && (
          <Button
            onClick={onRestart}
            variant="outlined"
            endIcon={<RestartIcon />}
          >
            Restart
          </Button>
        )}
      </div>
      <div className="flex items-center gap-4">
        {gameStatus === "running" && (
          <Stack direction="row" spacing={2}>
            <Button onClick={onGiveUp} variant="outlined">
              Give Up
            </Button>
            <Button
              onClick={onRestart}
              variant="outlined"
              endIcon={<RestartIcon />}
            >
              Restart
            </Button>
          </Stack>
        )}
        <div className="text-4xl font-bold">{displayTime()}</div>
        {/* <h1>Game Status: {gameStatus}</h1> */}
      </div>
    </div>
  );
};

export default GameActions;
