import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import RestartIcon from "@mui/icons-material/Replay";
import PlayIcon from "@mui/icons-material/PlayArrow";
import Stack from "@mui/material/Stack";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGame, giveUp, countdown, restartGame } from "../store/gameSlice";
import { RootState } from "../store";
import { removeCanton } from "../store/remainingCantonsSlice";
import { addGuessedCanton } from "../store/guessedCantonsSlice";
import Score from "./Score";
import Timer from "./Timer";

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

  // Managing text input
  const [input, setInput] = useState<string>("");
  const remainingCantons = useSelector(
    (state: RootState) => state.remainingCantons.remainingCantons
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };
  useEffect(() => {
    // Check if input matches any of the translations in remainingCantons
    const matchFound = Object.values(remainingCantons).some((translations) =>
      translations.includes(input)
    );

    if (matchFound) {
      // Find the canton abbreviation for the matching translation
      const abbreviation = Object.keys(remainingCantons).find((key) =>
        remainingCantons[key].includes(input)
      );
      if (abbreviation) {
        dispatch(removeCanton(abbreviation));
        dispatch(addGuessedCanton(abbreviation));
      }
      setInput("");
    }
  }, [input, dispatch, remainingCantons]);

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
            onChange={handleInputChange}
            value={input}
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
        <div>
          <Score />
        </div>
        <Timer />
        {/* <h1>Game Status: {gameStatus}</h1> */}
      </div>
    </div>
  );
};

export default GameActions;
