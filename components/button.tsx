import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

export const button = cva(
  "flex flex-row items-center gap-2.5 rounded-full font-medium",
  {
    variants: {
      intent: {
        primary: "bg-ink text-on-ink",
        secondary: "bg-transparent text-ink border border-line-hover",
      },
      size: {
        small: "py-2 px-2.5 text-sm",
        medium: "py-3 px-6 text-sm",
      },
      disabled: {
        false: null,
        true: "opacity-50 cursor-not-allowed",
      },
    },
    compoundVariants: [],
    defaultVariants: {
      disabled: false,
      intent: "primary",
      size: "medium",
    },
  },
);

export interface ButtonProps
  extends
    Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {}

const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  disabled,
  ...props
}) => (
  <button
    className={button({ intent, size, disabled, className })}
    disabled={disabled || undefined}
    {...props}
  />
);

export default Button;
