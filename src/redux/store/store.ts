import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "@/redux/slices/widgets";
import searchReducer from "@/redux/slices/query";
import filterReducer from "@/redux/slices/filter";

export const store = configureStore({
  reducer: {
    widgetReducer,
    searchReducer,
    filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
