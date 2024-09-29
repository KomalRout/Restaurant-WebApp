import React, { Suspense, useMemo } from 'react'
import metadata from 'libphonenumber-js/metadata.full';
import Button from '../../components/Button';
import Radio from '../../components/Radio';
import Heading from '../../components/Heading';
import TextArea from '../../components/TextArea';
import Input from '../../components/Input';
import SelectBox from '../../components/SelectBox';
import Img from '../../components/Img';

const MainContentSection = () => {
    const dropDownOptions = [
        {label:"Option1", value:"option1"},
        {label:"Option3", value:"option2"},
        {label:"Option2", value:"option3"}

    ];

    const countryOptions = useMemo(() => {
        return Object.entries(metadata.countries).map(([code,data]) => {
            const callingCode = `${data[0]}`;
            const display = {
                code,
                callingCode: `+${callingCode}`,
                imgSrc: `${code}`
            }
            return{
                value: code,
                label: (
                    <>
                        <SelectBox
                            size="xs"
                            shape="square"
                            name="Country Dropdown"
                            options={dropDownOptions}
                            className="w-full px-5"
                        />
                    </>
                )
            }
        })
    },[]);
  return (
    <>
        <div className='flex justify-center'>
            <div className='container-xs flex items-start gap-[99px] md:flex-col md:px-5'>
                <Button color="bg-[#311fe0] text-[#ffffff]" size="lg" className="w-[50px] rounded-[24px] px-3.5">
                    <Img src=""/>
                </Button>
                <div className='flex w-[80%] flex-col items-center gap-7 self-center rounded-[16px] bg-[#ffffff] p-11 shadow-[0_12px_10px_#00000007] md:w-full md:p-5'>
                    <Heading
                        size="text-[36px] font-bold md:text-[34px] sm:text-[34px]"
                        as="h1"
                        className="font-sans text-[36px] font-bold text-[#311f09] md:text-[34px] sm:text-[32px]"
                    >
                        Checkout
                    </Heading>  
                    <div className='flex flex-col items-start gap-2 self-stretch'>
                        <Heading size="text-[18px] font-medium" as="h2" className="text-[18px] font-medium text[#311f09]">
                                Shipping Address
                        </Heading>
                        <div className='flex gap-4 self-stretch md:flex-col'>
                            <Input
                                shape="round"
                                name="Address Input"
                                placeholder="Enter Address"
                                className="flex-grow rounded-lg border border-solid border-[#c4c4c4] !text-[#311f09]"
                            />
                            <a href='' target='_blank'>
                                <Button color="bg-[#739fe0] text-[#ffffff]" size="h-[54px] px-[34px] text-[16px]" className="min-w-[166px] rounded-lg px-[34px] sm:px-5">
                                    Change
                                </Button>
                            </a>
                        </div>
                    </div>
                    <div className='flex flex-col gap-[30px] self-stretch'>
                        <div className='flex flex-col items-start gap-2.5'>
                            <Heading size="text-[18px] font-medium" as="h3" className="text-[18px] font-medium text-[#311f09]">
                                Order Data
                            </Heading>
                            <div className='flex gap-6 self-stretch flex-col'>
                                <div className='flex gap-4 md:flex-col'>
                                    <Input
                                        shape="round"
                                        type="text"
                                        name="First Name"
                                        placeholder="Enter First name"
                                        className="w-full rounded-lg border border-solid border-[#c4c4c4]"
                                    />
                                    <Input
                                        shape="round"
                                        type="text"
                                        name="Last Name"
                                        placeholder="Enter lAST name"
                                        className="w-full rounded-lg border border-solid border-[#c4c4c4]"
                                    />
                                </div>
                                <div className='flex gap-4 md:flex-col'>
                                    <div className='flex h-[52px] w-full items-center justify-center rounded-lg border border-solid border-[#c4c4c4] bg-[#ffffff] px-1'>
                                        <SelectBox
                                            options={countryOptions}
                                            defaultValue={countryOptions.find((option) => option.value === "IN")}
                                            className="max-h-[24px] flex-shrink-0 items-center justify-center bg-transparent pl-2.5"
                                        />
                                        <input
                                            type='tel'
                                            name="Phone no."
                                            placeholder='Phone Number'
                                            className='ml-4 flex h-[24px] flex-grow items-center justify-center pr-[34px] text-[16px] text-[#a0978c] sm:pr-5'
                                        />
                                    </div>
                                    <Input
                                        shape="round"
                                        type="email"
                                        name="Email"
                                        placeholder="Enter Email Id"
                                        className="w-full rounded-lg border border-solid border-[#c4c4c4]"
                                    />
                                </div>
                                <TextArea
                                    shape="round"
                                    name="Message"
                                    placeholder="Message"
                                    className="wrounded-lg !border border-[#c4c4c4] pl-4 pr-[34px] text-[#a0978c] sm:pb-5 sm:pr-5"
                                />
                            </div>
                        </div>
                        <div className='flex flex-col gap-8'>
                            <div className='flex flex-col items-start gap-2'>
                                <Heading size="text-[18px] font-medium" as="h4" className="text-[18px] font-medium text-[#311f09]">
                                    Payment Method
                                </Heading>
                                <div className='grid grid-cols-2 gap-4 self-stretch md:grid-cols-1'>
                                    <Suspense fallback={
                                        <div>
                                            Loading feed...
                                        </div>}>
                                        {[...Array(4)].map(([d,index]) => (
                                            <Radio
                                                key={'paymentOption'+index}
                                                value="cashdoneDelivery"
                                                name="cashOption"
                                                label="Cash On Delivery"
                                                className="w-full gap-2 rounded-lg bg-[#d0ccc719] pb-2.5 pr-[34px] pt-3.5 text-[18px] text-[#311f09] sm:pr-5"
                                            />
                                        ))}
                                    </Suspense>
                                </div>
                            </div>
                            <Button size='h-[60px] px-[34px] text[20px]' className="self-stretch rounded-[12px] px-[34px] font-medium sm:px-5">
                                Order now
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default MainContentSection