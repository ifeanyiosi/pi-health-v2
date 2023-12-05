import React from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";

interface LeftArrowProps {
  onClick?: () => void;
}

const LeftArrow = ({ onClick }: LeftArrowProps) => {
  return (
    <div
      className="lg:w-14 lg:h-14 h-[30px] w-[30px] rounded-full mt-4 text-[#000]  bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 bottom-[-55px] right-[70px] "
      onClick={onClick}
    >
      <span className="text-xl">
        <FaLongArrowAltLeft />
      </span>
    </div>
  );
};

export default LeftArrow;
