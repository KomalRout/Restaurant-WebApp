import React from 'react'
import PropTypes from "prop-types";

const Button = ({children,className="",leftIcon,rightIcon,shape,variant="fill",size = "h-[60px] px-3.5",color = "bg-[#f54748] text-[#ffffff]",...restProps}) => {
  const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[16px]",
    circle: "rounded-[50%]"
  }

    return (
    <button
        className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size} ${color}`}
        {...restProps}
    >
        {!!leftIcon && leftIcon}
        {children}
        {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
    classname: PropTypes.string,

}

export default Button;