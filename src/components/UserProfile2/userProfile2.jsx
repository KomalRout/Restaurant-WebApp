import { Heading, Img } from "./..";
import React from "react";

export default UserProfile2 = ({
    userImage = "images/img_image_1.png",
    userName = "Betran Komar",
    userTitle = "Head chef",
    ...props})=> {
   return (
    <div {...props} className={`${props.className} flex flex-col items-center w-[30%] md:w-full gap-[42px]`}>
    <div className="self-stretch rounded-[50px] bg-[#1b161d33]">
    <Img src={userImage} alt="Profile Image" className="h-[548px] w-full rounded -[50px] object-cover" />
    </div>
    <Heading as="h4" className="text-[25px] font-semibold text-[#311f09]">
        {userName}
    </Heading>
    <Heading size="text2xl" as="p" className="text-[25px] font-normal text-[#a08d76]">
        {userTitle}
    </Heading>
    </div>
   );
}