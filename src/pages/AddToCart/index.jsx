import React from 'react';
import Heading from '../../components/Heading';
import { Suspense } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Img from '../../components/Img';
import { CartCard } from '../../components/CartCard';

const AddToCartPage = () => {
    const orderList = [
        { spaghettiTitle: "Spaghetti", quantityText: "2", priceText: "$24.1" },
        { spaghettiTitle: "Linguine", quantityText: "2", priceText: "$35.7" },
        { spaghettiTitle: "Capellini", quantityText: "2", priceText: "$18.5" },
      ];

  return (
    <div>
      <div className="flex flex-col items-center gap-[46px]">
        <Heading
          size="headingxl"
          as="h3"
          className="text-[30px] font-semibold text-[#311f09] md:text-[28px] sm:text-[26px]"
        >
          Order list
        </Heading>
        <div className="h-px w-full self-stretch" />
      </div>
      <div className="mx-[30px] flex flex-col gap-5 md:mx-0">
        <Suspense fallback={<div>Loading feed...</div>}>
          {orderList.map((d, index) => (
            <CartCard {...d} key={"orderItems" + index} />
          ))}
        </Suspense>
      </div>
      <div className="flex flex-col gap-11">
        <div className="flex flex-col gap-6">
          <div className="h-[0.5px] bg-[#d0cbc6]" />
          <div className="mx-[30px] flex flex-col items-start gap-5 md:mx-0">
            <Heading
              as="h4"
              className="text-[25px] font-semibold text-[#000000] md:text-[23px] sm:text-[21px]"
            >
              Voucher Code
            </Heading>
            <div className="flex gap-[22px] self-stretch">
              <Input
                color="gray_50_01"
                size="xl"
                name="Voucher Input"
                placeholder={`FREETOEAT`}
                className="flex-grow rounded-[14px] px-[34px] sm:px-5"
              />
              <Button
                color="bd-[#53a5e0]"
                className="w-[60px] rounded-[14px] px-5"
              >
                <Img src="images/img_plus.svg" />
              </Button>
            </div>
          </div>
          <div className="h-[0.5px] bg-[#d0cbc6]" />
        </div>
        <div className="mx-[30px] flex flex-col gap-16 md:mx-0 sm:gap-8">
          <div className="flex flex-col gap-[26px]">
            <div className="flex flex-wrap justify-between gap-5">
              <Heading
                as="h5"
                className="text-[25px] font-semibold text-[#000000] md:text-[23px] sm:text-[21px]"
              >
                Subtotal
              </Heading>
              <Heading
                size="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                as="h6"
                className="text-[25px] font-medium text-[#311f09] md:text-[23px] sm:text-[21px]"
              >
                $78.3
              </Heading>
            </div>
            <div className="flex flex-wrap justify-between gap-5">
              <Heading
                as="h4"
                className="text-[25px] font-semibold text-[#000000] md:text-[23px] sm:text-[21px]"
              >
                Tax fee
              </Heading>
              <Heading
                size="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                as="p"
                className="text-[25px] font-medium text-[#311f09] md:text-[23px] sm:text-[21px]"
              >
                $3.5
              </Heading>
            </div>
            <div className="flex flex-wrap justify-between gap-5">
              <Heading
                as="h4"
                className="text-[25px] font-semibold text-[#000000] md:text-[23px] sm:text-[21px]"
              >
                Voucher
              </Heading>
              <Heading
                size="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                as="p"
                className="text-[25px] font-medium text-[#311f09] md:text-[23px] sm:text-[21px]"
              >
                $5.0
              </Heading>
            </div>
            <div className="flex flex-wrap justify-between gap-5">
              <Heading
                as="h4"
                className="text-[25px] font-semibold text-[#000000] md:text-[23px] sm:text-[21px]"
              >
                Total
              </Heading>
              <Heading
                size="text-[25px] font-medium md:text-[23px] sm:text-[21px]"
                as="p"
                className="text-[25px] font-medium text-[#311f09] md:text-[23px] sm:text-[21px]"
              >
                $76.8
              </Heading>
            </div>
          </div>
          <Button className="rounded-[14px] px-[34px] self-stretch font-semibold sm:px-5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap undefined h-[60px] text-[25px] bg-[#f54748] text-[#ffffff]">
            Checkout
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddToCartPage;