import React from 'react'
import Heading from '../../components/Heading';
import Button from '../../components/Button';
import Text from '../../components/Text';
import Img from '../../components/Img';

const HomepageRowbestrestaurant = () => {
  return (
    <div className='mb-5 flex items-center justify-center self-stretch px-14 md:flex-col md:px-5'>
        <div className='flex w-[48%] flex-col gap-9 md:w-full'>
            <div className='flex flex-col items-start gap-3.5'>
                <Heading
                    size="text-[70px] font-bold md:text-[48px]"
                    as="h1"
                    className="font-sans text-[70px] font-bold leading-[95px] text-[#301e08] md:text-[48px]"
                >
                <span className='text-[#301e08]'>
                    <>
                        Best Restaurant
                        <br/>
                        In&nbsp;
                    </>
                </span>
                <span className='text-[#f54748]'>Town.</span>
                </Heading>
                <Text as="p" className="w-[80%] text-[20px] font-normal leading-[200%] text-[#5c4429] md:w-full">
                    We provide best food in town, we provide home delivery and dine in services.
                </Text>
            </div>
            <div className='flex gap-6'>
                <a href="" target='_blank'>
                    <Button size="h-[74px] px-[34px] text-[20px]" shape="round" className="min-w-[232px] rounded-[16px] px-[34px] font-semibold sm:px-5">
                        Order now
                    </Button>
                </a>
                <a href='' target='_blank'>
                    <Button color="bg-[#ff000019] text-[#ea1010]" size="h-[74px] px-[34px] text-[20px]" shape="round"
                        className ="min-w-[232px] rounded-[16px] px-[34px] font-semibold sm:px-5"
                    >
                        Reservation
                    </Button>
                </a>
            </div>
        </div>
        <Img src="" alt="Illustration Image" className="h-[502px] w-[44%] object-contain md:w-full"/>
    </div>
  )
}

export default HomepageRowbestrestaurant;