import { removeWidget } from "@/redux/slices/widgets";
import { Card, CardTitle } from "./ui/card";
import { CategoryType, WidgetReducerType, WidgetType } from "@/types/types";
import { RxCross2 as X } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { selectRandomImage } from "@/lib/utils";
import { useMemo } from "react";

const Widget = ({
  widget,
  category,
}: {
  widget: WidgetType;
  category: CategoryType;
}) => {
  const dispatch = useDispatch();
  const deleteWidget = () => {
    const new_widget: WidgetReducerType = { ...widget, category };
    dispatch(removeWidget(new_widget));
  };

  // to generate a random image for the widget
  const image = useMemo(() => selectRandomImage(), []);

  return (
    <Card className="flex flex-col relative w-[300px] h-[130px] md:w-[400px] md:h-[180px] lg:w-[450px] lg:h-[200px] rounded-xl px-5 py-3">
      <span
        className="absolute top-2 right-2 cursor-pointer"
        onClick={deleteWidget}
      >
        <X className="text-neutral-400" />
      </span>

      <CardTitle className="text-base">{widget.widgetName}</CardTitle>

      <div className="flex grow items-center gap-2 lg:gap-4">
        <img
          src={image}
          className="flex items-center justify-center h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] mr-5"
        />
        <h2>{widget.widgetText}</h2>
      </div>
    </Card>
  );
};

export default Widget;
