import { Button } from "./ui/button";
import { json_data } from "@/redux/data/data";
import { HiOutlineRefresh as RefreshIcon } from "react-icons/hi";
import { CiMenuKebab as MenuIcon } from "react-icons/ci";
import { CategoryType, WidgetCategoryType } from "@/types/types";
import Widget from "./widget";
import AddWidget from "./addWidget";
import Offcanvas from "./offcanvas";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store/store";
import { useMemo } from "react";
import { updateWidgets } from "@/redux/slices/widgets";
import { updateQuery } from "@/redux/slices/query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineAccessTimeFilled as TimeIcon } from "react-icons/md";

const Content = () => {
  const data = useSelector((state: RootState) => state.widgetReducer.widgets);
  const query = useSelector((state: RootState) => state.searchReducer.query);
  const dispatch = useDispatch();

  // Reset the dashboard
  const onClickReset = () => {
    dispatch(updateWidgets(json_data));
    dispatch(updateQuery(""));
  };

  // Filtering data based on query
  const filterData = () => {
    if (query === "") return data;

    const newData: WidgetCategoryType = {} as WidgetCategoryType;

    Object.keys(data).forEach((key) => {
      const categoryKey = key as CategoryType;
      const filteredWidgets = data[categoryKey].filter((widget) => {
        const matchesQuery =
          query === "" ||
          widget.widgetName.toLowerCase().includes(query.toLowerCase()); // Using includes for partial matches

        return matchesQuery;
      });

      if (filteredWidgets.length > 0) {
        newData[categoryKey] = filteredWidgets;
      }
    });

    return newData;
  };

  // Memoize the filtered data
  const filteredData = useMemo(() => filterData(), [query, data]);

  const timeOptions = [
    { name: "Last 2 days", value: "2" },
    { name: "Last 30 days", value: "30" },
    { name: "All Time", value: "all" },
  ];

  return (
    <div className="h-[calc(100vh-50px)] bg-blue-300/10 overflow-y-scroll px-4 py-1 md:px-7 md:py-3 lg:px-10 lg:py-5">
      <div className="flex justify-between mb-5">
        <h1 className="font-semibold text-lg">CNAPP Dashboard</h1>
        <div className="flex gap-2">
          <Offcanvas />
          <Button variant="secondary" className="border" onClick={onClickReset}>
            <RefreshIcon className="inline-block text-lg" />
          </Button>
          <Button variant="secondary" className="border">
            <MenuIcon className="inline-block text-lg" />
          </Button>
          <Select>
            <SelectTrigger className="w-[150px] bg-neutral-100 border border-blue-900 text-blue-900 outline-none">
              <TimeIcon className="text-lg text-blue-900" />
              <SelectValue placeholder="All" className="text-blue-900" />
            </SelectTrigger>
            <SelectContent className="border border-blue-900 outline-none">
              {timeOptions.map((option, index) => (
                <SelectItem
                  key={index}
                  value={option.value}
                  className="text-blue-900"
                >
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="px-5">
        {Object.keys(filteredData).map((key) => {
          const typedKey = key as keyof WidgetCategoryType;
          return (
            <div key={key}>
              <h2 className="font-semibold mb-2">{key} Dashboard</h2>
              <div className="flex flex-wrap justify-start gap-3 md:gap-4 lg:gap-5 mb-10">
                {filteredData[typedKey].map((widget, index) => (
                  <Widget key={index} widget={widget} category={typedKey} />
                ))}
                <AddWidget category={typedKey} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
