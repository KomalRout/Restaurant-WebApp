import React from 'react'
import PropTypes from "prop-types";

const Button = ({children,classname="",leftIcon,rightIcon,shape,variant="fill",size = "4xl",color = "red_400",...restProps}) => {
  const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[16px]",
    circle: "rounded-[50%]"
  }

    return (
    <button
        className={`${classname} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape]} ${size && size} ${variant && variant}`}
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