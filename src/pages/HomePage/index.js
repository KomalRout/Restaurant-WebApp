import React from 'react'
import TestimonialSection from './TestimonialSection';

const HomePage = () => {
  return (
    <>
        <Helmet>
            <title>Best Restaurant in Town - Delicious Menu and Reservations</title>
            <meta name='description' content="Discover our popular dishes like Spaghettin, Gnocchi, ans Penne Pasta"/>
        </Helmet>
        <div className='flex w-full flex-col gap-32 bg-[#f9f9f9] md:gap-24 sm:gap-16'>
            <div className='flex flex-col items-center gap-[70px] bg-gradient-to-b from-[#f447482b] to-[#f5474800] py-[50px] md:gap-[52px] md:py-5 sm:gap-[35px]'>
                <div className='container-xs md:px-5'>
                    <Header/>
                </div>
                <HomepageRowbestrestaurant/>
            </div>
            <FeaturesSection/>
            <PopularMenuSection/>
            <OurChefsSection/>
            <TestimonialSection/>
            <CallToActionSection/>
            <Footer/>
    </div>
    </>
  )
}

export default HomePage;