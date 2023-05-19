import { useDispatch } from "react-redux";
import { startGame } from "../../store/gameSlice";
import { useTranslation } from "react-i18next";
import Button from "@mui/material/Button";
import PlayIcon from "@mui/icons-material/PlayArrow";

const PlayBtn = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onStartGame = () => {
    dispatch(startGame());
    // don't run in yarn dev mode
    if (window.location.href !== "http://127.0.0.1:5173/") {
      recordPlay().catch((error) => {
        console.error("Failed to record play:", error);
      });
    }
  };

  interface ResponseData {
    message?: string;
    error?: string;
  }

  const recordPlay = async () => {
    const response = await fetch("/.netlify/functions/recordPlay", {
      method: "POST",
    });
    const data = (await response.json()) as ResponseData;

    if (!response.ok) {
      console.error("Failed to record play:", data.error);
      return;
    }
    console.log("Play recorded successfully");
  };

  return (
    <Button variant="contained" endIcon={<PlayIcon />} onClick={onStartGame}>
      {t("ui.play")}
    </Button>
  );
};

export default PlayBtn;
