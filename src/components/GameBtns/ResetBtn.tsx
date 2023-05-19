import { useDispatch } from "react-redux";
import { reset } from "../../store/gameSlice";
import { reset as resetRemainingCantons } from "../../store/remainingCantonsSlice";
import { reset as resetGuessedCantons } from "../../store/guessedCantonsSlice";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import RestartIcon from "@mui/icons-material/Replay";

const ResetBtn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onReset = () => {
    dispatch(reset());
    dispatch(resetRemainingCantons());
    dispatch(resetGuessedCantons());
  };

  return (
    <Button onClick={onReset} variant="outlined" endIcon={<RestartIcon />}>
      {t("ui.restart")}
    </Button>
  );
};

export default ResetBtn;
