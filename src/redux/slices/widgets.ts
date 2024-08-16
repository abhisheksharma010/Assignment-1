import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { json_data } from "@/redux/data/data";
import {
  WidgetCategoryType,
  WidgetReducerType,
  WidgetType,
} from "@/types/types";

export interface CounterState {
  widgets: WidgetCategoryType;
}

const initialState: CounterState = {
  widgets: json_data,
};

export const widgetSlice = createSlice({
  name: "widgets",
  initialState,
  reducers: {
    addWidget: (state, action: PayloadAction<WidgetReducerType>) => {
      const widget: WidgetType = {
        id: action.payload.id,
        widgetName: action.payload.widgetName,
        widgetText: action.payload.widgetText,
        date: action.payload.date,
      };
      state.widgets[action.payload.category].push(widget);
    },
    removeWidget: (state, action: PayloadAction<WidgetReducerType>) => {
      const category = action.payload.category;
      state.widgets[category] = state.widgets[category].filter(
        (item) => item.id !== action.payload.id
      );
    },
    updateWidgets: (state, action: PayloadAction<WidgetCategoryType>) => {
      state.widgets = action.payload;
    },
  },
});

export const { addWidget, removeWidget, updateWidgets } = widgetSlice.actions;
export default widgetSlice.reducer;
