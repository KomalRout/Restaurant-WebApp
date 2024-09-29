import React from "react";

const sizes = {
    textts: "text-[12px] font-normal not-italic",
    texts: "text-[14px] font-normal not-italic",
    textmd: "text-[16px] font-normal not-italic",
    textxl: "text-[20px] font-normal not-italic",
    text3xl: "text-[30px] font-normal italic md:text-[28px] sm:text[26px]",
    text4xl: "text-[40px] font-normal not-italic md:text-[38px] sm:text[36px]",
};

const Text = ({ children, className = "", as, size = "textxl", ...restProps }) => {
    const Component = as || "p";

    return (
        <Component className={`text-[#5c4529] font-['Poppins'] ${className} ${sizes[size]}`} {...restProps} >
            {children}
        </Component>
    );
};

export default Text;