export type WidgetType = {
  id: string;
  widgetName: string;
  widgetText: string;
};

export type WidgetCategoryType = {
  CSPM: WidgetType[];
  CWPP: WidgetType[];
  Registry: WidgetType[];
};

export type CategoryType = "CSPM" | "CWPP" | "Registry";

export type WidgetReducerType = WidgetType & { category: CategoryType };

export type WidgetCheckboxType = {
  CSPM: (WidgetType & { checked: boolean })[];
  CWPP: (WidgetType & { checked: boolean })[];
  Registry: (WidgetType & { checked: boolean })[];
};
