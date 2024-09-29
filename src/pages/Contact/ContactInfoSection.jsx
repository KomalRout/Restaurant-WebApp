import React from 'react'
import Button from '../../components/Button';
import TextArea from '../../components/TextArea';
import Input from '../../components/Input';
import Img from '../../components/Img';
import Heading from '../../components/Heading';

const ContactInfoSection = () => {
  return (
    <>
        <div className='flex flex-col items-center'>
            <div className='container-xs flex flex-col gap-[50px] md:px-5'>
                <div className='mx-[70px] flex flex-col items-center gap-4 md:mx-0'>
                    <a href="#" className='md:text-[48px]'>
                        <Heading size="text-[80px] font-bold md:text-[48px]" as="h1" className ="font-sans text-[80px] font-bold text-[#311f09]">
                            Contact us
                        </Heading>
                    </a>
                    <Heading size="text-[25px] font-medium md:text-[23px] sm:text-[21px]" as="h2" className ="self-stretch text-center text-[25px] font-normal leading-[37px] text-[#5c4529] md:text-[23px] sm:text[21px]">
                            We love hearing from our customers. Feel Free to share your experience.
                    </Heading>
                </div>
                <div className='flex gap-10 md:flex-col'>
                    <div className='relative h-[550px] w-full content-center md:h-auto'>
                        <Img src="" alt="LinkedIn" className="absolute bottom-[39%] left-0 right-0 m-auto h-[60px] w-[8%] object-contain"/>
                    </div>
                    <div className='flex w-full flex-col gap-9'>
                        <div className='flex flex-col gap-6'>
                            <Input
                                shape="round"
                                type="text"
                                name="First Name"
                                placeholder="First Name"
                                className="rounded-lg bordeer border-solid border-[#c4c4c4]"
                            />
                            <Input
                                shape="round"
                                type="text"
                                name="Last Name"
                                placeholder="Last Name"
                                className="rounded-lg bordeer border-solid border-[#c4c4c4]"
                            />
                            <Input
                                shape="round"
                                type="email"
                                name="Email"
                                placeholder="Email Id"
                                className="rounded-lg bordeer border-solid border-[#c4c4c4]"
                            />
                            <Input
                                shape="round"
                                name="Subject"
                                placeholder="Subject"
                                className="rounded-lg bordeer border-solid border-[#c4c4c4]"
                            />
                            <TextArea
                                shape="round"
                                name="Message"
                                placeholder="Message"
                                className="rounded-lg bordeer border-solid border-[#c4c4c4]"
                            />
                        </div>
                        <Button 
                            size="h-[80px] px-[34px] text-[25px]"
                            className="self-stretch rounded-[12px] px-[34px] sm:px-5"
                        >
                            Submit
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactInfoSection