import React, { Suspense } from 'react'
import Button from '../../components/Button';
import Heading from '../../components/Heading';

const OurChefsSection = () => {
    const chefProfilesList = {

    };
  return (
    <>
        <div className='flex felx-col items-center'>
            <div className='container-xs flex flex-col items-start gap-[88px] md:gap-[66px] md:px-5 sm:gap-11'>
                <div className='flex flex-col items-center gap-[52px] self-stretch sm:gap-[26px]'>
                    <Heading size="text-[52px] font-bold md:text-[44px] sm:text-[38px]" as="h2" className="font-sans text-[52px] font-bold text-[#311f09] md:text-[44px] sm:text-[38px"> 
                        Our Popular Chef
                    </Heading>
                    <div className='flex gap-10 self-stretch md:flex-col'>
                        <Suspense fallback={<div>Loading feed .... </div>}>
                        {chefProfilesList?.map((d,index) => (
                            <UserProfile2 {...d} key={'chefList'+index}/>
                        ))}
                        </Suspense>
                    </div>
                </div>
                <Button size="h-[74px] px-[34px] text-[20px]" shape="round" className="min-w-[234px] rounded-[16px] px-[34px] font-semibold sm:px-5">
                    View All
                </Button>
            </div>
        </div>
    </>
  )
}

export default OurChefsSection;