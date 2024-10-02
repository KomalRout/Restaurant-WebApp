
import React, { useState } from "react";
import Img from "../Img";
import Text from "../Text";
import Heading from "../Heading";
import RatingBar  from "../RatingBar";

const UserProfile1 = ({
    userImage = "images/img_kisspng_italian.png",
    userTitle = "Spaghetti",
    userDescription = "Lorem",
    userPrice = "$12.05",
    two = "2",
    ...props }) => {
    const [quantity, setQuantity] = useState(1);
    return (
        <div {...props} className={`${props.className} flex flex-col items-center w-full p-5 bg-[#ffffff] rounded-[44px]`}>
            <Img src={userImage} alt="Spaghetti Image" className="h-[172px] w-[172px] rounded -[86px] object-cover" />
            <Heading size="headingmd" as="h5" className="mt-5 text-[20px] font-semibold text-[#311f09]">
                {userTitle}
            </Heading>
            <RatingBar
                value={5}
                isEditable={true}
                color="#f54748"
                activeColor="#f54748"
                size={14}
                className="mt-1 flex gap-2.5"
            />
            <Text
                size="textxs"
                as="p"
                className="mt-2.5 self-stretch text-center text-[12px] font-normal leading-[18px] text-[#5c4529]"
            >
                {userDescription}
            </Text>
            <Heading size="headings" as="h6" className="mt-[22px] text-[18px] font-semibold text-[#311f09]">
                {userPrice}
            </Heading>
            <div className="ml-6 mr-[30px] mt-2.5 flex item-center jutify-center rounded-[16px] bg-[#ffffff] px-2.5 py-3.5 shadow-[3.32px_3.32px_4px_0px_#ff4e4e111]"
            >
                <Img src="images/imp_vector_25.svg" alt="Minus Icon" classNam="h-px" />
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
        </div>
    );
};

export default UserProfile1;