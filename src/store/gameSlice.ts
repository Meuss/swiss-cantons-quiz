import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  gameStatus: "idle" | "running" | "ended";
  countdown: number;
}

const initialState: GameState = {
  gameStatus: "idle",
  countdown: 5 * 60,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    startGame: (state) => {
      state.gameStatus = "running";
    },
    endGame: (state) => {
      state.gameStatus = "ended";
      state.countdown = 0;
    },
    giveUp: (state) => {
      state.gameStatus = "ended";
    },
    restartGame: (state) => {
      state.gameStatus = "running";
      state.countdown = 5 * 60;
    },
    countdown: (state) => {
      if (state.countdown > 0) {
        state.countdown--;
      } else {
        state.gameStatus = "ended";
      }
    },
  },
});

export const { startGame, endGame, giveUp, countdown, restartGame } =
  gameSlice.actions;

export default gameSlice.reducer;
