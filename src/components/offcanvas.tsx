import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetDescription,
  SheetTitle,
} from "@/components/ui/sheet";
import { FaPlus as AddIcon } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  CategoryType,
  WidgetCategoryType,
  WidgetCheckboxType,
} from "@/types/types";
import Tabs from "./tabs";
import { RootState } from "@/redux/store/store";
import { useDispatch, useSelector } from "react-redux";
import { updateWidgets } from "@/redux/slices/widgets";

const Offcanvas = () => {
  const dispatch = useDispatch();
  const [activeCategory, setActiveCategory] = useState<CategoryType>("CSPM");
  const data = useSelector((state: RootState) => state.widgetReducer.widgets);

  // adding default checkbox to each widget in every category
  const addCheckbox = () => {
    return Object.keys(data).reduce((acc, key) => {
      const categoryKey = key as CategoryType;
      acc[categoryKey] = data[categoryKey].map((item) => ({
        ...item,
        checked: true,
      }));
      return acc;
    }, {} as WidgetCheckboxType);
  };
  const [dataWithCheckbox, setDataWithCheckbox] = useState(addCheckbox());

  const onSubmit = () => {
    const updatedWidgets = {} as WidgetCategoryType;
    Object.keys(dataWithCheckbox).map((key) => {
      const categoryKey = key as CategoryType;
      updatedWidgets[categoryKey] = dataWithCheckbox[categoryKey].filter(
        (widget) => widget.checked
      );
    });
    dispatch(updateWidgets(updatedWidgets));
  };

  useEffect(() => {
    setDataWithCheckbox(addCheckbox());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="secondary" className="border">
          Add Widget <AddIcon className="inline-block ml-2" />
        </Button>
      </SheetTrigger>
      <SheetContent className="xl:w-[600px] xl:max-w-none sm:w-[400px] sm:max-w-[540px]">
        <SheetTitle className="absolute top-0 left-[-1px] px-6 py-[8px] text-white bg-blue-950 w-full">
          Add Widget
        </SheetTitle>
        <div className="relative h-full pt-7">
          <SheetHeader>
            <SheetDescription className="text-base py-2">
              Personalize your dashboard by adding the following widget.
            </SheetDescription>
            <SheetDescription asChild>
              <Tabs
                active={activeCategory}
                setActive={setActiveCategory}
                data={dataWithCheckbox}
                setData={setDataWithCheckbox}
              />
            </SheetDescription>
          </SheetHeader>
          <div className="flex absolute bottom-0 right-0">
            <SheetTrigger asChild>
              <Button variant="outline" className="border mr-2">
                Cancel
              </Button>
            </SheetTrigger>
            <SheetTrigger asChild>
              <Button
                variant="default"
                className="border bg-blue-950"
                onClick={onSubmit}
              >
                Confirm
              </Button>
            </SheetTrigger>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Offcanvas;
