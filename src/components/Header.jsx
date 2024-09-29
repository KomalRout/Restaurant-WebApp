import React from 'react';
import Img from'./Img';
import Button from './Button';
import Text from './Text';

const Header = ({...props}) => {
  return (
    <header {...props} className={`flex sm:flex-row justify-between items-center gap-5`}>
        <Img src="images\img_header_logo.svg" alt="Header Logo" className="h-[50px] w-[124px] object-contain"/>
        <ul className='!mt-2 flex items-start gap-[30px] self-start sm:flex-row sm:self-auto'>
            <li>
                <a href='#' className='cursor-pointer'>
                    <Text size="textmd" as="p" className="font-sans text-[16px] font-normal text=[#311f09cc] hover:text-[#f54748]">
                        Home
                    </Text>
                </a>
            </li>
            <li>
                <a href='#' className='cursor-pointer'>
                    <div className='flex flex-col items-center gap-0.5'>
                        <Text size="textmd" as="p" className="font-sans text-[16px] font-normal text=[#311f09cc] hover:text-[#f54748]">
                            Menu
                        </Text>
                    </div>
                </a>
            </li>
            <li>
                <a href='#' className='cursor-pointer'>
                    <div className='flex'>
                        <Text size="textmd" as="p" className="font-sans text-[16px] font-normal text=[#311f09cc] hover:text-[#f54748]">
                            About us
                        </Text>
                    </div>
                </a>
            </li>
            <li>
                <a href='#' className='cursor-pointer'>
                    <Text size="textmd" as="p" className="font-sans text-[16px] font-normal text=[#311f09cc] hover:text-[#f54748]">
                        Order online
                    </Text>
                </a>
            </li>
            <li>
                <a href='#' className='cursor-pointer'>
                    <Text size="textmd" as="p" className="font-sans text-[16px] font-normal text=[#311f09cc] hover:text-[#f54748]">
                        Reservation
                    </Text>
                </a>
            </li>
            <li>
                <a href='#' className='cursor-pointer'>
                    <Text size="textmd" as="p" className="font-sans text-[16px] font-normal text=[#311f09cc] hover:text-[#f54748]">
                        Contact us
                    </Text>
                </a>
            </li>
        </ul>
        <div className='flex gap-6'>
            <a href='#'>
                <Button color='' size="h-[50px] px-3" classname='w-[50px] rounded-[24px] px-3'>
                    <Img src="images\img_cart.svg"/>
                </Button>
            </a>
            <Button size='h-[50px] px-[34px] text[14px]' shape="round" classname='min-w-[112px] rounded-[16px] px-[34px] font-semibold sm:px-5'> 
                Login
            </Button>
        </div>
    </header>
  )
}

export default Header;