import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./index";
import it from "../locales/it/it.json";
import en from "../locales/en/en.json";
import fr from "../locales/fr/fr.json";
import de from "../locales/de/de.json";

interface CantonType {
  [key: string]: string;
}

// localization data type
interface LocalizationDataType {
  cantons?: CantonType;
}

const getAllCantonsFromAllLanguages = () => {
  const localizationData: LocalizationDataType[] = [it, en, fr, de];

  const allCantons: { [key: string]: string[] } = {};

  localizationData.forEach((data) => {
    if (data.cantons) {
      Object.entries(data.cantons).forEach(([key, value]) => {
        if (allCantons[key]) {
          // Only add the value if it is not already in the array.
          if (!allCantons[key].includes(value)) {
            allCantons[key].push(value);
          }
        } else {
          allCantons[key] = [value];
        }
      });
    }
  });

  return allCantons;
};

const initialState = getAllCantonsFromAllLanguages();

const remainingCantonsSlice = createSlice({
  name: "cantons",
  initialState,
  reducers: {
    removeCanton: (state, action: PayloadAction<string>) => {
      const abbreviation = action.payload;
      delete state[abbreviation];
    },
    reset: () => initialState,
  },
});

export const missingCantons = (state: RootState) => state.remainingCantons;

export const { removeCanton, reset } = remainingCantonsSlice.actions;

export default remainingCantonsSlice.reducer;
