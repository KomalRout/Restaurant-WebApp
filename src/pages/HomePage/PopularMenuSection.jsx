import React, { Suspense } from 'react'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Img from "../../components/Img";
import UserProfile from'../../components/UserProfile/userProfile';

const PopularMenuSection = () => {
    const menuItemsGrid = [
        {
            userImage:"",
            userName:"Spaghetti",
            userDescription:"",
            userPrice:"$12.05",
            orderButton:"Order now"
        },
        {
            userImage:"",
            userName:"Gnocchi",
            userDescription:"",
            userPrice:"$12.05",
            orderButton:"Order now"
        },
        {
            userImage:"",
            userName:"Rovioli",
            userDescription:"",
            userPrice:"$12.05",
            orderButton:"Order now"
        },
        {
            userImage:"",
            userName:"Penne Alla Vodak",
            userDescription:"",
            userPrice:"$12.05",
            orderButton:"Order now"
        },
        {
            userImage:"",
            userName:"Risoto",
            userDescription:"",
            userPrice:"$12.05",
            orderButton:"Order now"
        },
        {
            userImage:"",
            userName:"Splitza Signature",
            userDescription:"",
            userPrice:"$12.05",
            orderButton:"Order now"
        }
    ]
  return (
    <>
        <div className='flex flex-col items-center'>
            <div className='container-xs flex flex-col items-center gap-[70px] md:gap-[52px] md:px-5 sm:gap-[35px]'>
                <Heading 
                    size="heading4xl"
                    as="h2"
                    className="font-['Open_Sans'] text-[52px] font-bold text-[#311f09] md:text-[44px] sm:text-[38px]"
                    >
                    Our Popular Menu
                </Heading>
                <Tabs className="flex flex-col items-center gap-[50px] self-stretch"
                    selectedTabClassName='!text-[#ffffff] font-semibold bg-[#f54748] rounded-[16px]'
                    selectedTabPanelClassName='!relative tab-panel--selected'
                >
                    <TabList className="flex flex-wrap gap-11 md:flex-col">
                        <Tab className="w-[22%] px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:w-full md:px-5 sm:p-5">
                            All category
                        </Tab>
                        <Tab className="px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:w-full md:px-5 sm:p-5">
                            Dinner
                        </Tab>
                        <Tab className="px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:w-full md:px-5 sm:p-5">
                            Lunch
                        </Tab>
                        <Tab className="px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:w-full md:px-5 sm:p-5">
                            Dessert
                        </Tab>
                        <Tab className="px-[54px] py-6 text-[20px] font-normal leading-[200%] text-[#311f09] md:w-full md:px-5 sm:p-5">
                            Drink
                        </Tab>
                    </TabList>
                    <div className='flex flex-col items-center gap-12 self-stretch'>
                        {[...Array(5)].map((_,index) => (
                            <TabPanel key={`tab-panel${index}`} className="absolute items-center self-stretch">
                                <div className='w-full self-stretch'>
                                    <div className='grid grid-cols-3 justify-center gap-[34px] md:grid-cols-2 sm:grid-cols-1'>
                                        <Suspense fallback={<div>Loading feed...</div>}>
                                            {menuItemsGrid?.map((d,index) => (
                                                <UserProfile {...d} key={"menuGrid" + index}/>
                                            ))}
                                        </Suspense>
                                    </div>
                                </div>
                            </TabPanel>
                        ))}
                        <div className='flex w-[20%] items-center justify-center gap-2.5 md:w-full'>
                            <Img src="" alt="Left Arrow" className="h-[14px] w-[14px]"/>
                            <div className='flex flex-1 justify-center gap-2.5'>
                                <Button 
                                    color="bg-[#311f09] text-[#fffffff]"
                                    size="h-[34px] px-3.5px text-[14px]"
                                    className="min-w-[34px] rounded px-3.5 font-serif font-semibold tracking-[-0.50px]"
                                >
                                    1
                                </Button>
                                <Button 
                                    color="bg-[#311f09] text-[#fffffff]"
                                    size="h-[34px] px-3.5px text-[14px]"
                                    className="min-w-[34px] rounded px-3.5 font-serif font-semibold tracking-[-0.50px]"
                                >
                                    2
                                </Button>
                                <Button 
                                    color="bg-[#311f09] text-[#fffffff]"
                                    size="h-[34px] px-3.5px text-[14px]"
                                    className="min-w-[34px] rounded px-3.5 font-serif font-semibold tracking-[-0.50px]"
                                >
                                    3
                                </Button>
                                <Img src="" alt="Grid Icon" className="h-[34px] w-[34px]"/>
                            </div>
                            <Img src="" alt="Left Arrow" className="h-[14px] w-[14px]"/>
                        </div>
                    </div>
                </Tabs>
            </div>
        </div>
    </>
  )
}

export default PopularMenuSection;