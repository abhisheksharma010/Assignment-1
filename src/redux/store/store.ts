import { configureStore } from "@reduxjs/toolkit";
import widgetReducer from "@/redux/slices/widgets";
import searchReducer from "@/redux/slices/query";

export const store = configureStore({
  reducer: {
    widgetReducer,
    searchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
