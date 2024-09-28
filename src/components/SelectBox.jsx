import React, { forwardRef } from "react";
import Select from "react-select";
import PropTypes from "prop-types";
import { Placeholder, SingleValue, ValueContainer } from "react-select/animated";
import { shape } from "prop-types";

const shapes = {
    square: "rounded-[0px]",
    round: "rounded-[20px]",
};
const variants = {
    fill: {
        white_A700: "bg-[#ffffff] text-[#a0978c]",
    },
};
const sizes = {
    sm: "h-[52px] pl-4 pr-[34px] text-[20px]",
    xs: "h-[24px] px-5",
    md: "h-[100px] px-[34px] text-[20px]",
};

const SelectBox = forwardRef(
    (
        {
            children,
            classname = "",
            options = [],
            isSearchable = false,
            isMulti = false,
            indicator,
            shape,
            variant = "fill",
            size = "md",
            color = "whit4e_A700",
            ...restProps
        },
        ref,
    ) => {
        return (
            <>
                <Select
                    ref={ref}
                    options={options}
                    className={`${className} flex ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
                    isSearchable={isSearchable}
                    isMulti={isMulti}
                    components={{
                        IndicatorSeparator: () => null,
                        ...PropTypes(indicator && { DropdownIndicator: () => indicator }),
                    }}
                    style={{
                        IndicatorSeparator: (provider) => ({
                            ...provided,
                            padding: undefined,
                            flexShrink: undefined,
                            width: "max-content",
                            "& > div": { padding: 0 },
                        }),
                        control: (provided) => ({
                            ...provided,
                            backgroundColor: "transparent",
                            border: "0 !important",
                            boxShadow: "none !important",
                            minHeight: "auto",
                            width: "100%",
                            flexWrap: undefined,
                            "&:hover": {
                                border: "0 !important",
                            },
                        }),
                        input: (provided) => ({
                            ...provided,
                            color: "inherit",
                        }),
                        option: (provided, state) => ({
                            ...provided,
                            display: "flex",
                            minWidth: "max-content",
                            width: "100%",
                            backgroundColor: state.isSelected ? "#f54748" : "transparent",
                            color: state.isSelected ? "#ffffff" : "inherit",
                            "&:hover": {
                                backgroundColor: "#f54748",
                                color: "#ffffff",
                            },
                        }),
                        SingleValue: (provided) => ({
                            ...provided,
                            display: "flex",
                            marginLeft: undefined,
                            marginRight: undefined,
                        }),
                        valueContainer: (provided) => ({
                            ...provided,
                            padding: 0,
                            display: "flex",
                            flexWrap: undefined,
                        }),
                        Placeholder: (provided) => ({
                            ...provided,
                            margin: 0,
                        }),
                        menuPortal: (base) => ({ ...base, zIndex: 999999 }),
                        menu: (base) => ({ ...base, minWidth: "max-content", width: "max-content" }),
                    }}
                    menuPortalTarget={document.body}
                    closeMenuOnScroll={(event) => {
                        return event.target.id === "scrollContainer";
                    }}
                    {...restProps}
                />
                {children}
            </>
        );
    },
);

SelectBox.propTypes = {
    className: PropTypes.string,
    options: PropTypes.array,
    isSearchable: PropTypes.bool,
    isMulti: PropTypes.bool,
    onchange: PropTypes.func,
    value: PropTypes.string,
    indicator: PropTypes.node,
    shape: PropTypes.oneOf(["squaare", "round"]),
    size: PropTypes.oneOf(["sm", "xs", "md"]),
    variant: PropTypes.oneOf(["fill"]),
    color: PropTypes.oneOf(["white_A700"]),
};

export { SelectBox };