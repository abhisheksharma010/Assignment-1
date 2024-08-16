import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

// import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-neutral-950 dark:focus-visible:ring-neutral-300",
  {
    variants: {
      variant: {
        default:
          "bg-neutral-900 text-neutral-50 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90",
        destructive:
          "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-700 border border-gray-300",
        outline:
          "border border-gray-300 bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-700 dark:border-gray-800 dark:bg-neutral-950 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300",
        secondary:
          "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-700 border border-gray-300 dark:bg-neutral-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-300",
        ghost:
          "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-700 border border-gray-300 dark:bg-neutral-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-300",
        link: "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-700 border border-gray-300 dark:bg-neutral-900 dark:text-gray-400 dark:hover:bg-neutral-800 dark:hover:text-gray-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
