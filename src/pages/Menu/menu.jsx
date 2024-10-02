import { Helmet } from "react-helmet";
import Img from "../../components/Img";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserProfile from "../../components/UserProfile/userProfile";
import React, { Suspense } from "react";
import Heading from "../../components/Heading";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

const menuGrid = [
    {
        userImage: "images/img_pngitem_41084.png",
        userName: "Spaghetti",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        orderButton: "Order now",
    },
    {
        userImage: "images/img_pngitem_1447549.png",
        userName: "Gnocchi",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        orderButton: "Order now",
    },
    {
        userImage: "images/img_pngegg.png",
        userName: "Rovioli",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        orderButton: "Order now",
    },
    {
        userImage: "images/img_pngwing.png",
        userName: "Penne Alla Vodak",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        orderButton: "Order now",
    },
    {
        userImage: "images/img_pngitem_5290903.png",
        userName: "Risoto",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        orderButton: "Order now",
    },
    {
        userImage: "images/img_pngwing_270x270.png",
        userName: "Splitza Signature",
        userDescription: "Lorem ipsum",
        userPrice: "$12.05",
        orderButton: "Order now",
    }
];

const MenuPage = () => {
    return (
        <>
            <Helmet>
                <title>Explore our Popular Menu - Order Delicious Meals Online</title>
                <meta 
                    name="description"
                    content="Dive into our popular menu featuring Spaghetti, Gnocchi, Ravioli, and more. Enjoy exquisite Italian cuisine with easy online ordering. Perfect for lunch, dinner, or drinks."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[138px] bg-[#f9f9f9] md:gap-[103px] sm:gap-[69px]">
                {/* main content section */}
                <div className="container-xs mt-[50px] md:px-5">
                    {/* navigation section */}
                    <div className="flex flex-col gap-[92px] md:gap-[69px] sm:gap-[46px]">
                        {/* header section */}
                        <Header />

                        {/* menu section */}
                        <Tabs
                            className="flex flex-col gap-[50px]"
                            selectedTabClassName="!text-[#ffffff] font-semibold bg-[#f54748] rounded-[16px]"
                            selectedTabPanelClassName="!relative tab-panel--selected"
                        >
                            <div className="flex flex-col items-center gap-[70px] md:gap-[52px] sm:gap-[35px]">
                                <Heading
                                    size="heading4xl"
                                    as="h1"
                                    className="font-['Open_Sans'] text-[52px] font-bold text-[#311f09] md:text-[44px] sm:text-[38px]"
                                >
                                    Our Popular Menu
                                </Heading>
                                <TabList className="flex flex-wrap gap-11 md:flex-col">
                                    <Tab className="w-[22%] px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:w-full md:px-5 sm:p-5">
                                        All catagory
                                    </Tab>
                                    <Tab className="w-[22%] px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:w-full md:px-5 sm:p-5">
                                        Dinner
                                    </Tab>
                                    <Tab className="w-[22%] px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:w-full md:px-5 sm:p-5">
                                        Lunch
                                    </Tab>
                                    <Tab className="w-[22%] px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:w-full md:px-5 sm:p-5">
                                        Dessert
                                    </Tab>
                                    <Tab className="w-[22%] px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:w-full md:px-5 sm:p-5">
                                        Drink
                                    </Tab>
                                </TabList>
                            </div>

                            {/* menu items section */}
                            <div className="flex flex-col items-center gap-12">
                                {[...Array(5)].map((_,index) => (
                                    <TabPanel key={`tab-panel${index}`} className="absolute items-center self-stretch">
                                        {/* menu tab content section */}
                                        <div className="w-full self-stretch">
                                            {/* menu grid section */}
                                            <div className="grid grid-cols-3 justify-center gap-[34px] md:grid-cols-2 sm:grid-cols-1">
                                                <Suspense fallback={<div>Loading feed..</div>}>
                                                    {menuGrid.map((d,index) => (
                                                        <UserProfile {...d} key={"menuGrid1" + index} />
                                                    ))}
                                                </Suspense>
                                            </div>
                                        </div>
                                    </TabPanel>
                               ))}

                               {/* pagination controls section */}
                               <div className="flex w-[20%] items-center justify-center gap-2.5 md:w-full">
                                 <Img src="" alt="Left Arrow" className="h-[14px] w-[14px]" />
                                 <div className="flex flex-1 justify-center gap-2.5">
                                    <Button
                                        color="gray_900"
                                        size="sm"
                                        className="min-w-[34px] rounded px-3.5 font-['Inter'] font-semibold tracking-[-0.50px]"
                                    >
                                        1
                                    </Button>
                                    <Button
                                        color="gray_900"
                                        size="sm"
                                        className="min-w-[34px] rounded px-3.5 font-['Inter'] font-semibold tracking-[-0.50px]"
                                    >
                                        2
                                    </Button>
                                    <Button
                                        color="gray_900"
                                        size="sm"
                                        className="min-w-[34px] rounded px-3.5 font-['Inter'] font-semibold tracking-[-0.50px]"
                                    >
                                        3
                                    </Button>
                                    <Img src="images/img_grid.svg" alt="Grid Icon" className="h-[34px] w-[34px]" />
                                 </div>
                                 <Img src="images/img_arrow_right.svg" alt="Right Arrow" className="h-[14px] w-[14px]" />
                               </div>
                            </div>
                        </Tabs>
                    </div>
                </div>

                {/* footer section */}
                <Footer className="self-stretch" />
            </div>
        </>
    );
};

export default MenuPage;