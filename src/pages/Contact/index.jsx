import React from 'react'
import { Helmet } from 'react-helmet';
import Header from '../../components/Header';
import ContactInfoSection from './ContactInfoSection';
import Footer from '../../components/Footer';

const ContactPage = () => {
  return (
    <>
        <Helmet>
            <title>Contact Us - Share Your Experience or Ask Questions</title>
            <meta name="desc" content='Get In Touch'/>
        </Helmet>
        <div className='flex w-full flex-col items-center gap-[120px] bg-[#f9f9f9] sm:gap-[51px]'>
            <div className='container-xs mt-[50px] md:px-5'>
                <Header/>
            </div>
            <div className='flex flex-col gap-[120px] self-stretch md:gap-[90px] sm:gap-[60px]'>
                <ContactInfoSection/>
                <Footer/>
            </div>
        </div>
    </>
  )
}

export default ContactPage;