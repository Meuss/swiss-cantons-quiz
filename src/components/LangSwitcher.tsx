import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language).catch((error) => {
      console.error("Error changing language:", error);
    });
  };

  const langBtn = (language: string) => {
    return (
      <button
        className={
          i18n.language === language ? "font-bold text-primary-500" : ""
        }
        onClick={() => changeLanguage(language)}
      >
        {language.toUpperCase()}
      </button>
    );
  };

  return (
    <div className="flex gap-2">
      {langBtn("en")}
      {langBtn("fr")}
      {langBtn("de")}
      {langBtn("it")}
    </div>
  );
};

export default LanguageSwitcher;
