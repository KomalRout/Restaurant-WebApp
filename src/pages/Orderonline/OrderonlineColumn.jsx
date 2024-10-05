import React from "react";
import Button from "../../components/Button";
import Heading from "../../components/Heading";

const OrderonlineColumn = () => {
    return (
        <div className="flex flex-col items-center self-stretch">
            <div className="container-xs flex flex-col item-center gap-[68px] md:px-5 sm:gap-[34px]">
                <Heading
                    size="text-[80px] fon-bold md:text-[48px]"
                    as="h1"
                    className="font-sans text-[80px] font-bold text-[#311f09] md:text-[48px]"
                >
                    Menu
                </Heading>
                <div className="flex justify-center gap-7 self-stretch md:flex-col">
                    <Button
                      color="bg-[#d0c7c719] text-[#311f09]"
                      size="h-[74px] px-[34px] text-[20px]"
                      shape="round"
                      className="flex-1 rounded-[16px] px-[26px] md:self-stretch sm:px-5"
                    >
                        All Categories
                    </Button>
                    <Button size="h-[74px] px-[34px] text-[20px]" shape="round" className="min-w-[232px] rounded-[16px] px-[34px] font-semibold sm:px-5"
                    >
                        Pasta
                    </Button>
                    <Button
                      color="bg-[#d0c7c719] text-[#311f09]"
                      size="h-[74px] px-[34px] text-[20px]"
                      shape="round"
                      className="flex-1 rounded-[16px] px-[34px] md:self-stretch sm:px-5"
                    >
                        Pizza
                    </Button>
                    <Button
                      color="bg-[#d0c7c719] text-[#311f09]"
                      size="h-[74px] px-[34px] text-[20px]"
                      shape="round"
                      className="flex-1 rounded-[16px] px-[34px] md:self-stretch sm:px-5"
                    >
                        Dessert
                    </Button>
                    <Button
                      color="bg-[#d0c7c719] text-[#311f09]"
                      size="h-[74px] px-[34px] text-[20px]"
                      shape="round"
                      className="flex-1 rounded-[16px] px-[34px] md:self-stretch sm:px-5"
                    >
                        Drink
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default OrderonlineColumn;