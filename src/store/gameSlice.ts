import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../types/game";

const initialState: Game = {
  started: false,
};

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    set: (state, action: PayloadAction<Game>) => {
      return action.payload;
    },
  },
});

export const { set } = gameSlice.actions;
export default gameSlice.reducer;
