import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import remainingCantonsReducer from "./remainingCantonsSlice";
import guessedCantonsReducer from "./guessedCantonsSlice";

const store = configureStore({
  reducer: {
    game: gameReducer,
    remainingCantons: remainingCantonsReducer,
    guessedCantons: guessedCantonsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
