import React from 'react'
import Img from './Img';
import Heading from './Heading';
import Button from './Button';
import Text from './Text';

const Footer = ({...props}) => {
  return (
    <footer {...props} className={`${props.className} flex justify-center items-center py-[70px] md:py-5 bg-[#1b1919]`}>
        <div className='container-xs flex justify-center md:px-5'>
            <div className='flex w-full flex-col items-center gap-[60px] sm:gap-[30px]'>
                <div className='flex items-center justify-between gap-5 self-stretch md:flex-col'>
                    <div className='flex w-[32%] flex-col gap-[42px] md:w-full'>
                        <Img src="images\img_footer_logo.png" alt="Footer Logo" className="h-[50px] w-[124px] object-contain"/>
                        <Text as="p" className="text-[20px] font-normal leading-[200%] text-[#e3e1df]">
                            Footer Desc.
                        </Text>
                        <div className="flex w-[68%] justify-between gap-5 md:w-full">
                            <Button color='gray_300' shape="circle" classname='w-[60px] rounded-[30px] px-3.5'>
                                <Img src="images\img_twitter.png" alt="twitter"/>
                            </Button>
                            <Button color='gray_300' shape="circle" classname='w-[60px] rounded-[30px] px-3.5'>
                                <Img src="images\img_instagram.png" alt="instagram"/>
                            </Button>
                            <Button color='gray_300' shape="circle" classname='w-[60px] rounded-[30px] px-3.5'>
                                <Img src="images\img_facebook.png" alt="facebook"/>
                            </Button>
                        </div>
                    </div>
                    <div className='mt-1 flex w-[62%] items-start justify-between gap-5 md:w-full md:flex-col'>
                        <div className='flex w-[28%] flec-col items-start gap-[30px] self-center md:w-full'>
                            <Heading as="h4" className='text-[25px] font-semibold text-[#f54748] md:text-[23px] sm:text-[21px]'>
                                Page
                            </Heading>  
                            <ul className='flex flex-col items-start gap-5'>
                                <li>
                                    <a href="Home" target="_blank" rel="noreferrer">
                                        <Text as="p" className='text-[20px] font-normal text-[#e3e1df]'>
                                            Home
                                        </Text>
                                    </a>
                                </li>
                                <li>
                                    <a href="Menu" target="_blank" rel="noreferrer">
                                        <Text as="p" className='text-[20px] font-normal text-[#e3e1df]'>
                                            Menu
                                        </Text>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <Text as="p" className='text-[20px] font-normal text-[#e3e1df]'>
                                            Order online
                                        </Text>
                                    </a>
                                </li>
                                <li>
                                    <a href="Home" target="_blank" rel="noreferrer">
                                        <Text as="p" className='text-[20px] font-normal text-[#e3e1df]'>
                                            Catering
                                        </Text>
                                    </a>
                                </li>
                                <li>
                                    <a href="Home" target="_blank" rel="noreferrer">
                                        <Text as="p" className='text-[20px] font-normal text-[#e3e1df]'>
                                            Resevation
                                        </Text>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer