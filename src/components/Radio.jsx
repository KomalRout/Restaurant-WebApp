import React from 'react'

const variants = {
    primary: "border-[#311f09] border border-solid checked:border-[#311f09] checked:border-[3px] checked:border-solid checked:focus:border-[#311f09]"
};

const sizes = {
    xs: "h-[24px] w-[24px]"
};

const Radio = React.forwardRef((
    {className="",name="",label="",id="radio_id",variant="primary",size="xs",...restProps},
    ref
) => {
  return (
    <label className={className+"flex items-center gap-[5px] cursor-pointer"}>
        <input 
            className={`${(size && sizes[size]) || ""} ${(variant && variants[variant]) || ""}`}
            ref={ref}
            type="radio"
            name={name}
            {...restProps}
            id={id}
        />
        <span>{label}</span>
    </label>
  )
}
);

export default Radio