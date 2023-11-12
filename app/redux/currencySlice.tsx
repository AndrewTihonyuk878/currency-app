import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface RatesProps {
  [x: string]: number;
}

export interface CurrencyState {
  rates: RatesProps;
  amount: number;
  currency: string;
}

const initialState: CurrencyState = {
  rates: {},
  amount: 1,
  currency: "USD",
};

const currencySlice = createSlice({
  name: "currency",
  initialState,
  reducers: {
    getAllRates: (state, action: PayloadAction<RatesProps>) => {
      state.rates = action.payload;
    },
    setAmount: (state, action: PayloadAction<number>) => {
      state.amount = action.payload;
    },
    setCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export const currency = (state: RootState) => state.currency;
export const { getAllRates, setAmount, setCurrency } = currencySlice.actions;
export const currReducer = currencySlice.reducer;
