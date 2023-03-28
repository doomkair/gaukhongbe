import { twcx } from "@/shared/utils";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonProps = PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>;

export const Button = ({ children, className, ...rest }: ButtonProps) => {
  return (
    <button
      className={twcx(
        "rounded-full px-6 py-3 bg-primary text-white shadow-button",
        "hover:text-gray-800 hover:bg-white",
        "duration-300",
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
