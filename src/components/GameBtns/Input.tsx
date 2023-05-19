import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { removeCanton } from "../../store/remainingCantonsSlice";
import { addGuessedCanton } from "../../store/guessedCantonsSlice";
import { useTranslation } from "react-i18next";
import {
  normalizeDiacritics,
  replaceSpecialChars,
} from "../../utils/specialChars";
import TextField from "@mui/material/TextField";

const Input = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const gameStarted = useSelector(
    (state: RootState) =>
      state.game.gameStatus === "running" || state.game.gameStatus === "ended"
  );
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (gameStarted && inputRef.current) {
      inputRef.current.focus();
    }
  }, [gameStarted]);

  const [input, setInput] = useState<string>("");
  const remainingCantons = useSelector(
    (state: RootState) => state.remainingCantons
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const normalizedInput = normalizeDiacritics(
      replaceSpecialChars(input.toLowerCase())
    );

    const matchFound = Object.values(remainingCantons).some((translations) =>
      translations
        .map((translation) =>
          normalizeDiacritics(replaceSpecialChars(translation.toLowerCase()))
        )
        .includes(normalizedInput)
    );

    if (matchFound) {
      const abbreviation = Object.keys(remainingCantons).find((key) =>
        remainingCantons[key]
          .map((translation) =>
            normalizeDiacritics(replaceSpecialChars(translation.toLowerCase()))
          )
          .includes(normalizedInput)
      );
      if (abbreviation) {
        dispatch(removeCanton(abbreviation));
        dispatch(addGuessedCanton(abbreviation));
      }
      setInput("");
    }
  }, [input, dispatch, remainingCantons]);

  return (
    <TextField
      label={t("ui.name")}
      variant="outlined"
      className="w-full max-w-[300px] uppercase"
      size="small"
      inputMode="text"
      InputProps={{ inputRef: inputRef }}
      onChange={handleInputChange}
      value={input}
    />
  );
};

export default Input;
