import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  query: string;
}

const initialState: CounterState = {
  query: "",
};

export const searchTextSlice = createSlice({
  name: "searchText",
  initialState,
  reducers: {
    updateQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
  },
});

export const { updateQuery } = searchTextSlice.actions;
export default searchTextSlice.reducer;
