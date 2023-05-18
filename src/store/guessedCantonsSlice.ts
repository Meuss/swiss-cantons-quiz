import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";

const initialState: string[] = [];

const guessedCantonsSlice = createSlice({
  name: "guessedCantons",
  initialState,
  reducers: {
    addGuessedCanton: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    reset: () => initialState,
  },
});

export const selectGuessedCantons = (state: RootState) => state.guessedCantons;

export const { addGuessedCanton, reset } = guessedCantonsSlice.actions;

export default guessedCantonsSlice.reducer;
