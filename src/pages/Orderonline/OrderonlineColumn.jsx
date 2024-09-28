import { Button, Heading } from "../../components";
import React from "react";

const OrderonlineColumn = () => {
    return (
        <div className="flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col item-center gap-[68px] md:px-5 sm:gap-[34px]">
                <Heading
                    size="heading6xl"
                    as="h1"
                    className="font-['open_Sans'] text-[80px] font-bold text-[#311f09] md:text-[48px]"
                >
                    Menu
                </Heading>
                <div className="flex justify-center gap-7 self-stretch md:flex-col">
                    <button
                      color="gray_400_19_01"
                      size="5xl"
                      shape="round"
                      className="flex-1 rounded-[16px] px-[26px] md:self-stretch sm:px-5"
                    >
                        All Categories
                    </button>
                    <button size="5xl" shape="round" className="min-w-[232px] rounded-[16px] px-[34px] font-semibold sm:px-5"
                    >
                        Pasta
                    </button>
                    <button
                      color="gray_400_19_01"
                      size="5xl"
                      shape="round"
                      className="flex-1 rounded-[16px] px-[34px] md:self-stretch sm:px-5"
                    >
                        Pizza
                    </button>
                    <button
                      color="gray_400_19_01"
                      size="5xl"
                      shape="round"
                      className="flex-1 rounded-[16px] px-[34px] md:self-stretch sm:px-5"
                    >
                        Dessert
                    </button>
                    <button
                      color="gray_400_19_01"
                      size="5xl"
                      shape="round"
                      className="flex-1 rounded-[16px] px-[34px] md:self-stretch sm:px-5"
                    >
                        Drink
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OrderonlineColumn;