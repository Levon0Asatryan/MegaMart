import React from "react";
import Image from "next/image";

type Props = {
  mainText: string;
  blueText: string;
};

const MiddleText = ({ mainText, blueText }: Props) => {
  return (
    <div className=" mt-4 flex items-center justify-between px-8 w-full md:px-20 sm:mb-8 mb-4">
      <div className="flex items-center w-full justify-between border-b-2">
        <div className="flex border-b-4 border-primary lg:text-lg md:text-base sm:text-sm text-xs pb-2">
          <div className="text-text ">{mainText}</div>
          <div className="ml-1 text-primary font-semibold">{blueText}</div>
        </div>
        <div className="flex cursor-pointer">
          <div className="text-heading lg:text-base md:text-sm sm:text-xs text-xxs ">
            View All
          </div>
          <Image src="/Arrow-Right3.svg" width={18} height={18} alt="image 1" />
        </div>
      </div>
    </div>
  );
};

export default MiddleText;
