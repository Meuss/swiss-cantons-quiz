import { useTranslation } from "react-i18next";
import GameActions from "./GameActions";
import Map from "./Map";

const Game = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">{t("title")}</h1>
      <h2 className="text-xl">{t("description")}</h2>
      <GameActions />
      <Map />
    </div>
  );
};

export default Game;
