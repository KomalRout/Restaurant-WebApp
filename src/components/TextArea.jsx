import React, { forwardRef } from "react";
import PropTypes from "prop-types";

const shapes = {
    rounded: "rounded-lg",
};
const variants = {
    tarOutlineGray400: "!border-[#c4c4c4] border border-solid bg-[#ffffff]",
};
const sizes = {
    sm: "h-[150px] p-4 text-[20px]",
    xs: "h-[130px] p-6 text-[16px]",
};

const TextArea = forwardRef(
    (
        {
            className = "",
            name = "",
            placeholder = "",
            shape,
            size = "xs",
            variant = "tarOutlineGray400",
            onChange,
            ...restProps
        },
        ref,) => {
        const handlechange = (e) => {
            if (onchange) onchange(e?.target?.value);
        };

        return (
            <textarea
                ref={ref}
                className={`${className} ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]}`}
                name={name}
                onChange={handlechange}
                placeholder={placeholder}
                {...restProps}
            />
        );
    },
);

TextArea.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    shape: PropTypes.oneof(["round"]),
    size: PropTypes.oneof(["sm", "xs"]),
    variant: PropTypes.oneof(["tarOutlineGray400"]),
};

export { TextArea };