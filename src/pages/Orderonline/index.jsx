import { Helmet } from "react-helmet";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import Img from "../../components/Img";
import Input from "../../components/Input";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SpaghettiMenu from "../../components/SpaghettiMenu";
import userProfile1 from "./../../components/UserProfile1/userProfile1";
import OrderonlineColumn from "./OrderonlineColumn";
import React, { Suspense } from "react";
import UserProfile1 from './../../components/UserProfile1/userProfile1';

const orderGrid = [
    {
        userImage: "images/img_kisspng_italian.png",
        userTitle: "Spaghetti",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        two: "2",
    },
    {
        userImage: "images/img_picture.png",
        userTitle: "Linguine",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        two: "2",
    },
    {
        userImage: "images/img_picture_174x174.png",
        userTitle: "Capellini",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        two: "2",
    },
    {
        userImage: "images/img_picture_174x174.png",
        userTitle: "Fettuccine",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        two: "2",
    },
    {
        userImage: "images/img_kisspng_italian.png",
        userTitle: "Spaghetti",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        two: "2",
    },
    {
        userImage: "images/img_picture_1.png",
        userTitle: "Capellini",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        two: "0",
    },
    {
        userImage: "images/img_picture_174x174.png",
        userTitle: "Fusilli",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        two: "0",
    },
    {
        userImage: "images/img_picture.png",
        userTitle: "Farflle",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        two: "0",
    },
    {
        userImage: "images/img_picture_gray_400.png",
        userTitle: "Penne Alla Vadak",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        two: "0",
    }
];
const orderList = [
    { spaghettiTitle: "Spaghetti", quantityText: "2", priceText: "$24.1" },
    { spaghettiTitle: "Linguine", quantityText: "2", priceText: "$35.7" },
    { spaghettiTitle: "Capellini", quantityText: "2", priceText: "$18.5" },
];

const OrderonlinePage = () => {
    return (
        <>
            <Helmet>
                <Title>Order Online - Delicious Pasta, Pizza, and More</Title>
                <meta
                    name="description"
                    content="Indulge in our mouth-watering menu with a variety of pasta, pizza, and desserts. Order online now for a delectable dining experience at your convenience."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[102px] bg-[#f9f9f9] md:gap-[76px] sm:gap-[51px]">
                {/* header section */}
                <div className="container-xs mt-[50px] md:px-5">
                    <Header />
                </div>
                <div className="flex flex-col gap-[138px] self-stretch md:gap-[103px] sm:gap-[69px]">
                    {/* menu section */}
                    <div className="flex flex-col items-center gap-[68px] sm:gap-[34px]">
                        <OrderonlineColumn />

                        {/* featured dishes section */}
                        <div className="container-xs md:px-5">
                            <div className="flex items-center gap-[46px] md:flex-col">
                                <div className="flex flex-col items-center gap-[50px] md:self-stretch">
                                    <div className="flex flex-col gap-12 self-stretch">
                                        <div className="flex flex-col items-start gap-2.5">
                                            <Heading
                                                size="headingxl"
                                                as="h2"
                                                className="text-[30px] font-semibold text-[#311f09] md:text-[28px] sm:text-[26px]"
                                            >
                                                PASTA
                                            </Heading>
                                            <div className="h-[2px] w-[18%] bg-[#f54748]" />
                                        </div>
                                        <div className="grid grid-cols-3 justify-center gap-y-6 md:grid-cols-2 sm:grid-cols-1">
                                        <Suspense fallback={<div>Loadind feed...</div>}>
                                            {orderGrid.map((d, index) => (
                                                <UserProfile1 {...d} key={"onlineGrid" + index} />
                                            ))}
                                        </Suspense>
                                    </div>
                                </div>
                                <div className="flex w-[30%] items-center justify-center gap-2.5 md:w-full">
                                    <Img src="images/img_arrow_left_blck_900.svg" alt="Left Arrow" className="h-[14px] w-[14px]" />
                                    <div className="flex flex-1 justify-center gap-2.5">
                                        <Button
                                            color="gray_900"
                                            size="sm"
                                            className="min-w-[34px] rounded px-3.5 font-['Inter'] font-semibold tracking-[-0.50px]"
                                        >
                                            1
                                        </Button>
                                        <Button
                                            color="gray_200"
                                            size="sm"
                                            className="min-w-[34px] rounded px-2.5 font-['Inter'] font-semibold tracking-[-0.50px]"
                                        >
                                            2
                                        </Button>
                                        <Button
                                            color="gray_200"
                                            size="sm"
                                            className="min-w-[34px] rounded px-3 font-['Inter'] font-semibold tracking-[-0.50px]"
                                        >
                                            3
                                        </Button>
                                        <Img src="images/img_grid.svg" alt="Grid Icon" className="h-[34px] w-[34px]" />
                                    </div>
                                    <Img src="images/img_arrow_right.svg" alt="Right Arrow" className="h-[14px] w-[14px]" />
                                </div>
                            </div>

                            {/* order summary section */}
                            <div className="w-[32px] md:w-full">
                                <div className="flex flex-col gap-[50px] rounded-[20px] bg-[#ffffff] py-11 shadow-[0_4px_29px_0_#60676933] md:py-5">
                                    <div className="flex flex-col items-center gap-[46px]">
                                        <Heading
                                            size="headingxl"
                                            as="h3"
                                            className="text-[30px] font-semibold text-[#311f09] md:text-[28px] sm:text-[26px]"
                                        >
                                            Order list
                                        </Heading>
                                        <div className="h-px w-full self-stretch bg-[#d1cccc]" />
                                    </div>
                                    <div className="mx-[30px] flex flex-col gap-16 md:mx-0">
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                            {orderList.map((d, index) => (
                                                <SpaghettiMenu {...d} key={"orderItems" + index} />
                                            ))}
                                        </Suspense>
                                    </div>
                                    <div className="flex flex-col gap-11">
                                        <div className="flex flex-col gap-6">
                                            <div className="h-[0.5px] bg-[#d0cbc6]" />
                                            <div className="mx-[30px] flex flex-col items-start gap-5 md:mx-0">
                                                <Heading
                                                    as="h4"
                                                    className="text-[25px] font-semibold text-[#000000] md:text-[23px] sm:text-[21px]"
                                                >
                                                    Voucher Code
                                                </Heading>
                                                <div className="flex gap-[22px] self-stretch">
                                                    <Input
                                                        color="gray_50_01"
                                                        size="xl"
                                                        name="Voucher Input"
                                                        placeholder={`FREETOEAT`}
                                                        className="flex-grow rounded-[14px] px-[34px] sm:px-5"
                                                    />
                                                    <Button color="blue_400" className="w-[60px] rounded-[14px] px-5">
                                                        <Img src="images/img_plus.svg" />
                                                    </Button>
                                                </div>
                                            </div>
                                            <div className="h-[0.5px] bg-[#d0cbc6]" />
                                        </div>
                                        <div className="mx-[30px] flex flex-col gap-16 md:mx-0 sm:gap-8">
                                            <div className="flex flex-col gap-[26px]">
                                                <div className="flex flex-wrap justify-between gap-5">
                                                    <Heading
                                                        as="h5"
                                                        className="text-[25px] font-semibold text-[#000000] md:text-[23px] sm:text-[21px]"
                                                    >
                                                        Subtotal
                                                    </Heading>
                                                    <Heading
                                                        size="text2xl"
                                                        as="h6"
                                                        className="text-[25px] font-medium text-[#311f09] md:text-[23px] sm:text-[21px]"
                                                    >
                                                        $78.3
                                                    </Heading>
                                                </div>
                                                <div className="flex flex-wrap justify-between gap-5">
                                                    <Heading
                                                        as="h4"
                                                        className="text-[25px] font-semibold text-[#000000] md:text-[23px] sm:text-[21px]"
                                                    >
                                                        Tax fee
                                                    </Heading>
                                                    <Heading
                                                        size="text2xl"
                                                        as="p"
                                                        className="text-[25px] font-medium text-[#311f09] md:text-[23px] sm:text-[21px]"
                                                    >
                                                        $3.5
                                                    </Heading>
                                                </div>
                                                <div className="flex flex-wrap justify-between gap-5">
                                                    <Heading
                                                        as="h4"
                                                        className="text-[25px] font-semibold text-[#000000] md:text-[23px] sm:text-[21px]"
                                                    >
                                                        Voucher
                                                    </Heading>
                                                    <Heading
                                                        size="text2xl"
                                                        as="p"
                                                        className="text-[25px] font-medium text-[#311f09] md:text-[23px] sm:text-[21px]"
                                                    >
                                                        $5.0
                                                    </Heading>
                                                </div>
                                                <div className="flex flex-wrap justify-between gap-5">
                                                    <Heading
                                                        as="h4"
                                                        className="text-[25px] font-semibold text-[#000000] md:text-[23px] sm:text-[21px]"
                                                    >
                                                        Total
                                                    </Heading>
                                                    <Heading
                                                        size="text2xl"
                                                        as="p"
                                                        className="text-[25px] font-medium text-[#311f09] md:text-[23px] sm:text-[21px]"
                                                    >
                                                        $76.8
                                                    </Heading>
                                                </div>
                                            </div>
                                            <a href="https://www.youtube.com/embed/bv8Fxk0sz7I" target="_blank">
                                                <Button size="3xl" className="self-stretch rounded-[14px] px-[34px] font-semibold sm:px-5">
                                                    checkout
                                                </Button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                    {/* footer section */}
                    <Footer />
                </div>
            </div>
        </>
    );
}

export default OrderonlinePage;