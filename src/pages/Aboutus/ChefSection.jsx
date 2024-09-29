import Heading from './../../components/Heading';
import React from 'react'
import Img from "./../../components/Img";
import Text from '../../components/Text';

const ChefSection = () => {
  return (
    <>
        <div className='flex justify-center self-stretch'>
            <div className='container-xs flex items-center justify-between gap-5 md:flex-col md:px-5'>
                <Img src="images\img_unsplash_lrawct7uwhy.png" alt="Unsplash Image" className="h-[628px] w-[40%] object-contain md:w-full"/>
                <div className='flex w-[48%] flex-col gap-[34px] md:w-full'>
                    <div className='flex flex-col items-start gap-1.5'>
                        <Heading
                            size="text-[52px] font-bold md:text-[44px] sm:text-[38px]"
                            as="h2"
                            className="w-full font-['Open-sans'] text-[52px] font-bold leading-[140%] text-[#311f0p] md:text-[44px] sm:text-[38px]"
                        >
                            <span className='text-[#f54748]'>Owner</span>
                            <span className='text-[#311f09]'>& Executive Chef</span>
                        </Heading>
                        <Text
                            size="text4xl"
                            as="p"
                            className="text-[40px] font-normal text-[#5c4529] md:text-[38px] sm:text-[36px]"
                        >
                            Ismail Marzuki
                        </Text>
                    </div>
                    <div className='flex w-[90%] flex-col items-end md:w-full'>
                        <div className='relative h-[308px] self-stretch'>
                        <Heading
                            size="text-[80px] font-bold md:text-[48px]"
                            as="h3"
                            className="absolute left-0 top-0 m-auto font-['Tinos] text[80px] font-bold text-[#ff8c0033] md:text-[48px]"
                        >
                           "
                        </Heading>
                        <Text
                                size="text3xl"
                                as="p"
                                className="absolute bottom-[-0.11px] left-0 right-0 m-auto w-full text-[30px] font-light italic leading-[200%] text-[#5c4529] md:text-[28px] sm:text-[26px]"
                            >
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                            </Text>
                        <Heading
                            size="text-[40px] font-normal text-[#5c4529] md:text-[38px] sm:text-[36px]"
                            as="h4"
                            className="rotate-[-180deg] left-0 top-0 m-auto font-['Tinos] text[80px] font-bold text-[#ff8c0033] md:text-[48px]"
                        >
                            "
                        </Heading>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChefSection;