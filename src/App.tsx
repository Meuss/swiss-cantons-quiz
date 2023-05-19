import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import "./i18n";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import store from "./store";
import Game from "./components/Game";
import Footer from "./components/Footer";

const darkTheme = createTheme({
  typography: {
    fontFamily: ["Inter", "Avenir", "Roboto", "sans-serif"].join(","),
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
            <div className="container flex h-full flex-1 flex-col justify-between py-8">
              <Routes>
                <Route path="/" element={<Game />} />
              </Routes>
              <Footer />
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
