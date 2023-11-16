import React from "react";
import type { Smartphone } from "../page";
import Image from "next/image";

//morder buttomy hanel
const SmartPhoneCard = (props: Smartphone) => {
  const realPrice = props.price - (props.price * props.discount) / 100;

  return (
    <div className=" sm:h-72 sm:w-56 h-48 w-36 inline-block bg-white  rounded-2xl active:border-primary active:border-2 cursor-pointer  border-2 border-border mr-5 ">
      <div className="flex justify-center items-center sm:h-48 h-28 w-full bg-border rounded-t-xl relative">
        <div className="absolute h-12 w-11 bg-primary right-0 top-0 border-2 border-primary rounded-tr-xl rounded-bl-xl text-white sm:text-sm text-xs flex flex-col items-center justify-center">
          <div>{props.discount}%</div>
          <div>OFF</div>
        </div>
        <Image
          src={props.photo}
          height={120}
          width={120}
          alt={props.name}
          className="sm:h-36 h-18 w-auto"
        />
      </div>
      <div className="p-3  flex-col items-between justify-between w-full h-full">
        <div className="text-heading sm:text-sm text-xs font-medium">
          {props.name}
        </div>
        <div className="flex border-b-2  pb-1">
          <div className="text-heading sm:text-sm text-xs font-medium">
            ${realPrice}
          </div>
          <div className="ml-1 text-heading sm:text-sm text-xs line-through">
            ${props.price}
          </div>
        </div>
        <div className=" text-save sm:text-sm text-xs font-medium">
          Save - ${props.price - realPrice}
        </div>
      </div>
    </div>
  );
};

export default SmartPhoneCard;
