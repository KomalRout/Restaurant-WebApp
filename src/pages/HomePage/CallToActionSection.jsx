import React from 'react';
import Heading from '../../components/Heading';
import Button from '../../components/Button';

const CallToActionSection = () => {
  return (
    <>
        <div className='flex justify-center'>
            <div className='container-xs flex justify-center md:px-5'>
                <div className='flex w-full flex-col items-center justify-center gap-10 rounded-[24px] bg-[#fdd9d9] px-14 py-[92px] md:p-5'>
                    <Heading size="text-[52px] font-bold md:text-[44px] sm:text-[38px]" as="h2" className="mt-1.5 font-sans text[52px] font-bold text-[#311f09] md:text-[44px] sm:text-[38px]">
                        Hungry ? We are open now..
                    </Heading>
                    <div className='flex gap-6'>
                        <a href="" target="_blank">
                            <Button size="h-[74px] px-[34px] text-[20px]" shape="round" className="min-w-[232px] rounded-[16px] px-[34px] font-semibold sm:px-5">
                                Order now
                            </Button>
                        </a>
                        <a href="" target="_blank">
                            <Button color="bg-[#ffffff7f] text-[#f54748]" size="h-[74px] px-[34px] text-[20px]" shape="round" className="min-w-[232px] rounded-[16px] px-[34px] font-semibold sm:px-5">
                                Order now
                            </Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CallToActionSection;