import React from 'react'
import { Helmet } from 'react-helmet';
import MainContentSection from './MainContentSection';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

const CheckoutPage = () => {
  return (
    <>
        <Helmet>
            <title>Checkout - Secure and Easy Payment Options</title>
            <meta name="desc" content="Complete your with our secure checkout process."/>
        </Helmet>
        <div className='flex w-full flex-col items-center gap-[100px] bg-[#f9f9f9] md:gap-[75px] sm:gap-[50px]'>
            <div className='container-xs mt-[50px] md:px-5'>
                <Header/>
            </div>
            <div className='flex flex-col gap-[120px] self-stretch md:gap-[90px] sm:gap-[60px]'>
                <MainContentSection/>
                <Footer/>
            </div>
        </div>
    </>
  )
}

export default CheckoutPage;