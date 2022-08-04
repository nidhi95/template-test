import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineIndigo50: "bg-white_A700 border border-indigo_50 border-solid",
  FillDeeporange300: "bg-deep_orange_300",
  FillGray50: "bg-gray_50",
  OutlineIndigo501_2: "border border-indigo_50 border-solid",
  FillRed55: "bg-red_55",
  srcOutlineBluegray200:
    "bg-white_A700 border border-bluegray_200 border-solid",
  srcFillGray50: "bg-gray_50",
  srcOutlineBlack9000c: "bg-white_A700 shadow-bs1",
};
const shapes = {
  RoundedBorder4: "rounded-radius4",
  CircleBorder24: "rounded-radius24",
  RoundedBorder8: "rounded-radius8",
  CustomBorderBL4:
    "rounded-bl-[4px] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px]",
  srcRoundedBorder4: "rounded-radius4",
};
const sizes = {
  sm: "lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px]",
  md: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
  lg: "lg:pb-[27px] xl:pb-[31px] pb-[35px] 3xl:pb-[42px] lg:pt-[12px] xl:pt-[14px] pt-[16px] 3xl:pt-[19px] lg:px-[12px] xl:px-[14px] px-[16px] 3xl:px-[19px]",
  xl: "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
  smSrc: "xl:p-[10px] p-[12px] 3xl:p-[14px] lg:p-[9px]",
  mdSrc: "lg:p-[12px] xl:p-[14px] p-[16px] 3xl:p-[19px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "CircleBorder24",
    "RoundedBorder8",
    "CustomBorderBL4",
    "srcRoundedBorder4",
  ]),
  variant: PropTypes.oneOf([
    "OutlineIndigo50",
    "FillDeeporange300",
    "FillGray50",
    "OutlineIndigo501_2",
    "FillRed55",
    "srcOutlineBluegray200",
    "srcFillGray50",
    "srcOutlineBlack9000c",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "xl", "smSrc", "mdSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder4",
  variant: "OutlineIndigo50",
  size: "md",
};

export { Input };
