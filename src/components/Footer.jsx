import React from 'react'

const Footer = ({...props}) => {
  return (
    <footer {...props} className={`${props.className} flex justify-center items-center py-[70px] md:py-5 bg-[#1b1919]`}>
        <div className='container-xs flex justify-center md:px-5'>
            <div className='flex w-full flex-col items-center gap-[60px] sm:gap-[30px]'>
                <div className='flex items-center justify-between gap-5 self-stretch md:flex-col'>
                    <div className='flex w-[32%] flex-col gap-[42px] md:w-full'>
                        <Img src="" alt="Footer Logo" className="h-[50px] w-[124px] object-contain"/>
                        <Text as="p" className="text-[20"/>
                    </div>
                </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer