import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import LanguageIcon from "@mui/icons-material/LanguageOutlined";
import store from "./store";
import Game from "./components/Game";
import LangSwitcher from "./components/LangSwitcher";

const darkTheme = createTheme({
  typography: {
    fontFamily: ["Avenir", "Roboto"].join(","),
  },
  palette: {
    mode: "dark",
  },
});

const App = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-cover bg-fixed bg-center text-primary-50">
      <BrowserRouter>
        <Provider store={store}>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <div className="flex-1 bg-black bg-opacity-60">
              <div className="container py-8">
                <div className="flex justify-end gap-4">
                  <LanguageIcon color="primary" />
                  <LangSwitcher />
                </div>
                <Routes>
                  <Route path="/" element={<Game />} />
                </Routes>
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
