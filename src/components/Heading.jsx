import React from 'react'

const Heading = ({children, className="", size='text-[25px] font-semibold md:text-[23px] sm:text-[21px]', as, ...restProps}) => {
  const Component = as || "h6";
    return (
        <Component className={`text-[311f09] font-['Poppins] ${className} ${size}`} {...restProps}>
            {children}
        </Component>
    )
}

export default Heading;