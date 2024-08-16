import { Card } from "./ui/card";
import { CategoryType } from "@/types/types";
import { FaPlus as AddIcon } from "react-icons/fa6";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "./ui/dialog";
import { DialogHeader } from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { addWidget } from "@/redux/slices/widgets";
import { useState } from "react";

const AddWidget = ({ category }: { category: CategoryType }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  // add a new widget
  const onClickAdd = () => {
    const newWidget = {
      id: crypto.randomUUID(),
      widgetName: name,
      widgetText: text,
      date: new Date(new Date().getTime() + 5.5 * 60 * 60 * 1000) // Adjusting for IndianStandardTime
        .toISOString()
        .replace("Z", "+05:30"),
      category: category,
    };
    onClearInputs();
    dispatch(addWidget(newWidget));
  };

  // empty the input fields
  const onClearInputs = () => {
    setName("");
    setText("");
  };

  return (
    <Card className="flex justify-center items-center w-[300px] h-[130px] md:w-[400px] md:h-[180px] lg:w-[450px] lg:h-[200px] rounded-xl ">
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="secondary" className="border">
            <AddIcon className="inline-block mr-2" />
            Add Widget
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="mb-4">
              Add Widget to {category} dashboard
            </DialogTitle>
            <DialogDescription>
              <Label htmlFor="widgetName">Widget Name</Label>
              <Input
                type="text"
                id="widgetName"
                placeholder="Widget Name"
                className="mt-1 mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Label htmlFor="widgetText">Widget Text</Label>
              <Input
                type="text"
                id="widgetText"
                placeholder="Widget Text"
                className="mt-1 mb-4"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </DialogDescription>
            <DialogFooter>
              <DialogTrigger asChild>
                <Button type="submit" variant="outline" onClick={onClearInputs}>
                  Cancel
                </Button>
              </DialogTrigger>
              <DialogTrigger asChild>
                <Button type="submit" onClick={onClickAdd}>
                  Add
                </Button>
              </DialogTrigger>
            </DialogFooter>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </Card>
  );
};

export default AddWidget;
