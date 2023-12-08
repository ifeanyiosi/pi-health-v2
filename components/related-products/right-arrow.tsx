import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface RightArrowProps {
  onClick?: () => void;
}

const RightArrow = ({ onClick }: RightArrowProps) => {
  return (
    <div
      className="lg:w-14 lg:h-14 h-[30px] mt-4 w-[30px] rounded-full text-[#000]  bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center absolute z-10 bottom-[-55px] right-[20px]"
      onClick={onClick}
    >
      <span className="text-xl">
        <FaLongArrowAltRight />
      </span>
    </div>
  );
};

export default RightArrow;
