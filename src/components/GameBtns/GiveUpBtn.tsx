import { useDispatch } from "react-redux";
import { giveUp } from "../../store/gameSlice";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";

const GiveUpBtn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onGiveUp = () => {
    dispatch(giveUp());
  };

  return (
    <Button onClick={onGiveUp} variant="outlined">
      {t("ui.giveup")}
    </Button>
  );
};

export default GiveUpBtn;
