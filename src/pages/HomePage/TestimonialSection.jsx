import React from 'react'
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Img from '../../components/Img';

const TestimonialSection = () => {
  return (
    <>
        <div className='flex justify-center'>
            <div className='container-xs flex justify-center px-14 md:px-5'>
                <div className='flex w-[78%] flex-col items-center gap-[42px] md:w-full'>
                    <Heading 
                        size="text-[52px] font-bold md:text-[44px] sm:text-[36px]"
                        as="h2"
                        className="font-sans text-[52px] font-bold text-[#311f09] md:text-[44px] sm:text-[38px]"
                    >
                        What Our Customers Say
                    </Heading>
                    <div className='relative h-[394px] self-stretch'>
                        <div className='absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 justify-between gap-5'>
                            <Button 
                                color="bg-[#ffffff]"
                                shape="circle"
                                className="w-[60px] rotate-[-180deg] rounded-[30px] px-[18px] shadow-[0_4px_11px_0_#0a0a0a0f]"
                            >
                                <Img src=""/>
                            </Button>
                        </div>
                        <div className='absolute bottom-0 left-0 right-0 top-0 m-auto flex items-center justify-center rounded-[16px] bg-[#ffffff]'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}

export default TestimonialSection;