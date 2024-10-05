import React, { useState } from "react";
import Img from "./Img";
import Text from "./Text";

export const CartCard = ({ 
    spaghettiTitle = "Spaghetti",
    quantityText = 2,
    priceText = "$24.1",
    ...props }) => {
        const [quantity, setQuantity] = useState(parseInt(quantityText));
  return (
        <div className="flex flex-row items-center w-full bg-gray-200 gap-[2px] rounded h-[70px] shadow-lg p-5 justify-between">
            <h2>{spaghettiTitle}</h2>
            <div className="rounded-[16px] bg-[#FFFFFF] mr-[30px] ml-6 flex items-center justify-between gap-5 self-stretch h-8"
            >
               <div
                    onClick={(event) => {
                        event.stopPropagation();
                        setQuantity((quantity < 1 ? 0 : quantity - 1));
                    }}
                    className="flex cursor-pointer flex-col items-center rounded-[16px] bg-[#ffffff] p-2.5 shadow-[3.32px_3.32px_4px_0px_#3fc56d11]"
                >
                    <Img src="images/img_vector_25.svg" alt="Plus Icon" className="h-[10px] w-[10px]" />
                </div>
                <Text size="textmd" as="p" className="text-[16.62px] font-normal text-[#311f09]">
                    {quantity}
                </Text>
                <div
                    onClick={(event) => {
                        event.stopPropagation();
                        setQuantity((quantity) => quantity + 1);
                    }}
                    className="flex cursor-pointer flex-col items-center rounded-[16px] bg-[#ffffff] p-2.5 shadow-[3.32px_3.32px_4px_0px_#3fc56d11]"
                >
                    <Img src="images/img_group_7721.svg" alt="Plus Icon" className="h-[10px] w-[10px]" />
                </div>
            </div>
            <h2>{priceText}</h2>
        </div>
  );
};
