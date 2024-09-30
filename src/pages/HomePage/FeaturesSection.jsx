import React from 'react'
import Button from '../../components/Button';
import Heading from '../../components/Heading';
import Text from '../../components/Text';
import Img from '../../components/Img';

const FeaturesSection = () => {
  return (
    <>
        <div>
            <div className='flex justify-center bg-[#e7f7ed] py-3.5'>
                <div className='container-xs flex items-start justify-center gap-3 md:flex-col md:px-5'>
                    <div className='relative h-[646px] flex-1 slef-center md:w-full md:flex-none md:self-stretch'>
                        <div className='absolute bottom-[-0.02px] left-0 right-0 m-auto flex flex-1 flex-col items-center'>
                            <div className='flex items-center self-stretch sm:flex-col'>
                                <Img
                                    src=""
                                    alt="Leaf Image"
                                    className="relative z-[1] h-[174px] w-[22%] self-end object-contain sm:w-full sm:self-auto"
                                />
                                <Img
                                    src=""
                                    alt="Kindpng Image"
                                    className="relative ml-[-160px] h-[558px] w-[68%] self-end object-contain sm:w-full sm:ml-0"
                                />
                            </div>
                            <Img
                                    src=""
                                    alt="Small Leaf Image"
                                    className="relative  mt-[-74px] h-[116px] w-[16%] object-contain"
                            />
                        </div>
                        <Img
                                    src=""
                                    alt="Large Leaf Image"
                                    className="absolute right-[0.26px] top-0 m-auto h-[158px] w-[27%] object-contain"
                        />
                    </div>
                    <div className='mt-[90px] flex w-[40%] flex-col items-start gap-[34px] md:w-full'>
                        <div className='flex flex-col gap-4 self-stretch'>
                            <Heading>
                                <span>
                                    <>
                                        Our Most <br/>
                                        Popular&nbsp;
                                    </>
                                </span>
                                <span className='text-[#f54748]'>Dish .</span>
                            </Heading>
                            <Text as="p" className="text-[20px] font-normal leading-[200%] text-[#5c44529]">
                                This dish is full of flavor and nutrition!
                            </Text>
                        </div>
                        <a href='' target="_blank">
                            <Button
                                size="h-[74px] px-[34px] text-[20px]"
                                shape="round"
                                className="min-w-[232px] rounded-[16px] px-[34px] font-semibold sm:px-5"
                            >
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

export default FeaturesSection;