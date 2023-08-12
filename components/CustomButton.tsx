"use client";
import { CustomButtonProps } from "@/types";
import Image from "next/image";
const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  rightIcon,
  textStyles,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} fill className="object-contain" alt="icon" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
