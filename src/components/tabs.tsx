import { CategoryType, WidgetCheckboxType } from "@/types/types"
import { Checkbox } from "./ui/checkbox"

export type TabsProps = {
   active: CategoryType
   setActive: React.Dispatch<React.SetStateAction<CategoryType>>
   data: WidgetCheckboxType
   setData: React.Dispatch<React.SetStateAction<WidgetCheckboxType>>
}

const Tabs = (props: TabsProps) => {
   const onClickSetActive = (category: CategoryType) => {
      props.setActive(category)
   }

   const toggleCheckBox = (id: string) => {
      const newData = props.data[props.active].map((widget) => {
         if (widget.id !== id) return widget
         return { ...widget, checked: !widget.checked }
      })
      props.setData((prev)=> ({...prev, [props.active]: newData}))
   }

   return (
      <main>
         <div className="pb-2 border-b border-neutral-400 text-base inline-block space-x-7">
            <ul className="flex flex-wrap -mb-2 gap-8">
               {Object.keys(props.data).map((category) => (
                  <li
                     key={category}
                     className={`${
                        props.active === category
                           ? "font-bold border-b-2 border-blue-900"
                           : ""
                     } cursor-pointer px-3 py-2`}
                     onClick={() => onClickSetActive(category as CategoryType)}
                  >
                     {category}
                  </li>
               ))}
            </ul>
         </div>
         <ul>
            {props.data[props.active].map((widget, index) => (
               <li key={index} className="text-base mt-4 flex items-center gap-2 border border-neutral-400 p-2 rounded-[4px]">
                  <Checkbox
                     checked={widget.checked}
                     onCheckedChange={() => toggleCheckBox(widget.id)}
                  />
                  {widget.widgetName}
               </li>
            ))}
         </ul>
      </main>
   )
}

export default Tabs
