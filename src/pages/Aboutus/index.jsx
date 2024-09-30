import React from "react";
import { Helmet } from "react-helmet";
import Header from "./../../components/Header";
import Img from "../../components/Img";
import Heading from "../../components/Heading";
import Text from "../../components/Text";
import Button from "../../components/Button";
import ChefSection from "./ChefSection";
import Footer from "./../../components/Footer";

const AboutUsPage = () => {
  return (
    <>
      <Helmet>
        <title>
          About Our Restaurant - Discover Our Story and Culinary Delights
        </title>
        <meta name="description" content="Learn about restaurant" />
      </Helmet>
      <div className="flex w-full flex-col items-center gap-[78px] bg[#f9f9f9] md:gap-[58px] sm:gap-[39px]">
        <div className="container-xs mt-[50px] md:px-5">
          <Header />
        </div>
        <div className="flex flex-col gap-[104px] self-stretch md:gap-[78px] sm:gap-[52px]">
          <div className="flex flex-col items-center gap-[120px] md:gap-[90px] sm:gap-[60px]">
            <div className="container-xs md:px-5">
              <div className="flex flex-col gap-[120px] md:gap-[90px] sm:gap-[60px]">
                <div className="flex items-center justify-between gap-5 md:flex-col">
                  <div className="w-[48%] rounded-[270px] bg-[#d0ccc7333] p-[52px] md:w-full md:p-5">
                    <div className="rounded-[218px] ng-[#d0ccc7333] p-11 md:p-5">
                      <Img
                        src="images\img_unsplash_ebmyh7oo5wy.png"
                        alt="Featured Image"
                        className="h-[346px] w-[346px] rounded-[172px] object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex w-[38%] flex-col items-start gap-[34px] md:w-full">
                    <div className="flex flex-col gap-4 self-stretch">
                      <Heading
                        size="text-[52px] font-bold md:text-[44px] sm:text-[38px]"
                        as="h1"
                        className="font-sans text-[52px] font-bold leading-[110%] text-[#f54748] md:text-[44px] sm:text-[38px]"
                      >
                        <span className="text-[#301e08]">
                          <>
                            About Our <br />
                          </>
                        </span>
                        <span className="text-[#f54748]">Restaurant</span>
                      </Heading>
                      <Text
                        as="p"
                        className="text-[20px] font-normal leading-[200%] text-[#5c4529]"
                      >
                        This dish is full of flavor and nutritiona! Quinoa is a complete protein, providing all the essential amino acids your body needs, and is also a good source of fiber.
                      </Text>
                    </div>
                    <Button
                      size="h-[74px] px-[34px] text-[20px]"
                      shape="round"
                      classname="min-w-[232px] rounded-[16px] px-[34px] font-semifold sm:px-5"
                    >
                      Order now
                    </Button>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 md:flex-col">
                    <Text as="p" className="w-[40%] text-[20px] font-normal leading-[200%] text-[#5c4529] md:w-full">
                        Sed ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    </Text>
                    <div className="w-[50%] rounded-[280px] bg-[#d0ccc719] p-14 md:w-full md:p-5">
                        <div className="rounded-[222px] bg-[#d0ccc719] p-11 md:p-5">
                            <Img src="images/img_unsplash_5dszncvdhd0.png" alt="Secondaary Img" className="h-[354px] w-[354px] rounded-[176px] object-cover"/>
                        </div>
                    </div>
                </div>
              </div>
            </div>
            <ChefSection />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;
