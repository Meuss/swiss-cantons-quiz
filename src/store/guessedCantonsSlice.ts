import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: string[] = [];

const guessedCantonsSlice = createSlice({
  name: "guessedCantons",
  initialState,
  reducers: {
    addGuessedCanton: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
  },
});

export const { addGuessedCanton } = guessedCantonsSlice.actions;

export default guessedCantonsSlice.reducer;
