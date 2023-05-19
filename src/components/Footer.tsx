import LanguageIcon from "@mui/icons-material/LanguageOutlined";
import Github from "./Footer/Github";
import LangSwitcher from "./Footer/LangSwitcher";
import PlayCount from "./Footer/PlayCount";

const Footer = () => {
  return (
    <div className="sticky bottom-2 mt-4 flex flex-col items-center justify-between gap-8 text-center lg:flex-row">
      <div className="flex items-center gap-2">
        <LanguageIcon color="primary" />
        <LangSwitcher />
      </div>
      <div className="flex flex-col items-center justify-between gap-2 lg:flex-row lg:gap-8">
        <PlayCount />
        <Github />
      </div>
    </div>
  );
};

export default Footer;
