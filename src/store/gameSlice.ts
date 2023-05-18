import { createSlice } from "@reduxjs/toolkit";

interface GameState {
  gameStatus: "idle" | "running" | "ended";
  countdown: number;
}

const timer = 1 * 10;

const initialState: GameState = {
  gameStatus: "idle",
  countdown: timer,
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
    countdown: (state) => {
      if (state.countdown > 0) {
        state.countdown--;
      } else {
        state.gameStatus = "ended";
      }
    },
    reset: () => initialState,
  },
});

export const { startGame, endGame, giveUp, countdown, reset } =
  gameSlice.actions;

export default gameSlice.reducer;
