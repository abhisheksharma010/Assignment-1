import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  time: string;
}

const initialState: CounterState = {
  time: "all",
};

export const filterByTimeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    updateTimeFilter: (state, action: PayloadAction<string>) => {
      state.time = action.payload;
    },
  },
});

export const { updateTimeFilter } = filterByTimeSlice.actions;
export default filterByTimeSlice.reducer;
