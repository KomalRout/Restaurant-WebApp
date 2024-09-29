import React from "react";
import Img from "../../components/Img";
import Heading from "../../components/Heading";
import Button from "../../components/Button";
import SelectBox from "../../components/SelectBox";

const dropDownOptions = [
    {label: "Option1", value: "option1"},
    {label: "Option2", value: "option2"},
    {label: "Option3", value: "option3"},
];

const ReservationRow = () => {
    return (
        <div className="flex justify-center">
            <div className="container-xs flex items-center justify-center md:flex-col md:px-5">
                <div className="flex flex-1 flex-col items-start md:self-stretch">
                    <Img
                        src="images/img_rectangle_150.png"
                        alt="Restaurant Image"
                        className="h-[656px] w-[86%] rounded-[20px] object-contain"
                    />
                </div> 
                <div className="flex w-[42%] flex-col items-start gap-12 md:w-full">
                    <Heading 
                        size="heading5xl"
                        as="h1"
                        className="font-sans text-[70px] font-bold text-[#311f09] md:text-[48px]"
                    >
                     Book a table
                    </Heading>
                    <div className="flex flex-col gap-10 self-stretch">
                        <div className="flex flex-col gap-10">
                            <SelectBox 
                               shape="round"
                               name="Date Dropdown"
                               placeholder={`Date`}
                               options={dropDownOptions}
                               className="rounded-[20px] border border-solid border-[#c4c4c4] px-[34px] sm:p-5"
                            />
                            <SelectBox
                               shape="round"
                               name="Time Dropdown"
                               placeholder={`Time`}
                               options={dropDownOptions}
                               className="rounded-[20px] border border-solid border-[#c4c4c4] px-[34px] sm:p-5"
                            />
                            <SelectBox
                               shape="round"
                               name="Party Size Dropdown"
                               placeholder={`Party size`}
                               options={dropDownOptions}
                               className="rounded-[20px] border border-solid border-[#c4c4c4] px-[34px] sm:p-5"
                            />
                        </div>
                        <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                            <Button size="8xl" className="self-stretch rounded-[20px] px-8 font-semibold sm:px-5">
                                Book now
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReservationRow;