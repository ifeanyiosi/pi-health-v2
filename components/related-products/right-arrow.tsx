import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";

interface RightArrowProps {
  onClick?: () => void;
}

const RightArrow = ({ onClick }: RightArrowProps) => {
  return (
    <div
      className="lg:w-14 lg:h-14 h-[30px] w-[30px] rounded-full text-white bg-black bg-opacity-40 hover:bg-opacity-100 duration-300 cursor-pointer flex justify-center items-center z-10 absolute top-[35%] lg:right-[-60px] right-[-40px] "
      onClick={onClick}
    >
      <span className="text-xl">
        <FaLongArrowAltRight />
      </span>
    </div>
  );
};

export default RightArrow;
