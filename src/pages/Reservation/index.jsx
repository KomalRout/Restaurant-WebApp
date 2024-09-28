import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import ReservationRow from "./ReservationRow";
import React from "react";

const ReservationPage = () => {
    return (
        <>
            <Helmet>
                <title>Reserve Your Table - Book Your Dining Experience with Us</title>
                <meta
                    name="description"
                    content="Secure your dining spot at our restaurant by booking a table online. choose your preferred date, time, and party size for a memorable meal with friends or family."
                />
            </Helmet>
            <div className="flex w-full flex-col items-center gap-[90px] bg-[#f9f9f9] md:gap-[67px] sm:gap-[45px]">
                {/* header section */}
                <div className="container-xs mt-[50px] md:px-5">
                    <Header />
                </div>

                {/* reservation section */}
                <div className="flex flex-col gap-[120px] self-stretch md:gap-[90px] sm:gap-[60px]">
                    <ReservationRow />

                    {/* footer section */}
                    <Footer />
                </div>
            </div>
        </>
    );
};

export default ReservationPage;