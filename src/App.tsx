import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LanguageIcon from "@mui/icons-material/LanguageOutlined";
import store from "./store";
import Game from "./components/Game";
import Github from "./components/Github";
import LangSwitcher from "./components/LangSwitcher";
import PlayCount from "./components/PlayCount";

const darkTheme = createTheme({
  typography: {
    fontFamily: ["Avenir", "Roboto"].join(","),
  },
  palette: {
    mode: "dark",
    primary: {
      light: "#f1f5f9",
      main: "#cbd5e1",
      dark: "#334155",
      contrastText: "#0f172a",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden">
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="flex-1">
              <div className="container py-8">
                <Routes>
                  <Route path="/" element={<Game />} />
                </Routes>
              </div>
            </div>
            <div className="sticky bottom-2 flex items-center justify-between px-10">
              <PlayCount />
              <div className="flex items-center justify-between gap-8">
                <div className="flex gap-4">
                  <LanguageIcon color="primary" />
                  <LangSwitcher />
                </div>
                <Github />
              </div>
            </div>
          </ThemeProvider>
        </Provider>
      </BrowserRouter>
      {process.env.NODE_ENV === "development" && (
        <div className="mq-helper pointer-events-none fixed bottom-2 left-2 bg-primary-500 p-1 text-xs font-normal text-black" />
      )}
    </div>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("Could not find root container");
}
const root = createRoot(container);
root.render(<App />);
