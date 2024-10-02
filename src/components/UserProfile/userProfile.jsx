import RatingBar from "../RatingBar";
import React from "react";
import Button from "../Button";
import Img from "../Img";
import Text from "../Text";
import Heading from "../Heading";

export default function UserProfile({
    userImage = "images/img_pngitem_41084.png",
    userName = "Spaghetti",
    userDescription = "Lorem",
    userPrice = "$12.05",
    orderButton = "Oreder now",
    ...props }){
    return (
        <div
            {...props}
            className={`${props.className} flex flex-col items-center w-full gap-[34px] px-[30px] py-9 sm:p-5 bg-[#ffffff] rounded-[44px]`}
        >
            <Img src={userImage} alt="Product Image" className="mx-2 h-[270px] w-[270px] object-cover" />
            <div className="flex flex-col items-center self-stretch">
                <div className="flex flex-col items-center gap-2.5 self-stretch">
                    <Heading size="headingxl" as="h3" className="text-[30px] font-semibold text-[#311f09]">
                        {userName}
                    </Heading>
                    <Text
                        size="textxs"
                        as="p"
                        className="self-stretch text-center text-[14px] font-normal leading-[200%] text-[#59442b]"
                    >
                        {userDescription}
                    </Text>
                </div>
                <RatingBar
                    value={5}
                    isEditable={true}
                    color="#f54748"
                    activeColor="#f54748"
                    size={14}
                    className="mt-3 flex gap-2.5"
                />
                <div className="mx-2 mt-[30px] flex items-center justify-between gap-5 self-stretch">
                    <Heading as="h4" className="text-[25px] font-semibold text-[#311f09]">
                        {userPrice}
                    </Heading>
                    <Button size="xl" className="min-w-[158px] rounded-lg px-[34px] font-semibold sm:px-5">
                        {orderButton}
                    </Button>
                </div>
            </div>
        </div>
    );
}