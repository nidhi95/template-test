import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder4: "rounded-radius4",
  CircleBorder28: "rounded-radius28",
  CircleBorder24: "rounded-radius24035",
  CircleBorder20: "rounded-radius20",
  RoundedBorder10: "rounded-radius10",
  RoundedBorder16: "rounded-radius16",
  icbCircleBorder24: "rounded-radius24",
  icbRoundedBorder4: "rounded-radius4",
  icbRoundedBorder6: "rounded-radius6665",
  icbCircleBorder28: "rounded-radius28",
  icbCircleBorder16: "rounded-radius16",
  icbCircleBorder20: "rounded-radius20",
  icbCircleBorder40: "rounded-radius40",
  icbCircleBorder31: "rounded-radius31",
  icbCircleBorder9: "rounded-radius9165",
};
const variants = {
  FillGray103: "bg-gray_103 text-indigo_401",
  FillDeeporange300: "bg-deep_orange_300 text-white_A700",
  FillGreen70063: "bg-green_700_63 text-green_700",
  FillRed60063: "bg-red_600_63 text-red_600",
  FillGray50: "bg-gray_50 text-bluegray_800",
  OutlineBluegray200:
    "bg-white_A700 border border-bluegray_200 border-solid shadow-bs1 text-bluegray_800",
  FillWhiteA700: "bg-white_A700 text-deep_orange_300",
  FillRed600: "bg-red_600 text-white_A700",
  OutlineIndigo50: "border border-indigo_50 border-solid text-bluegray_800",
  FillBluegray900: "bg-bluegray_900 text-white_A700",
  FillIndigo401: "bg-indigo_401 text-white_A700",
  FillRed40019: "bg-red_400_19 text-red_600",
  FillIndigo40019: "bg-indigo_400_19 text-indigo_401",
  OutlineBluegray900:
    "border border-bluegray_900 border-solid text-bluegray_900",
  FillDeeporange50: "bg-deep_orange_50 text-deep_orange_300",
  FillBlack90066: "bg-black_900_66 text-white_A700",
  OutlineDeeporange300:
    "bg-white_A700 border border-deep_orange_300 border-solid shadow-bs text-bluegray_800",
  FillGreen700: "bg-green_700 text-white_A700",
  FillAmber300: "bg-amber_300 text-white_A700",
  icbFillGray50: "bg-gray_50",
  icbFillWhiteA700: "bg-white_A700",
  icbOutlineDeeporange300:
    "bg-white_A700 outline outline-[0.9px] outline-deep_orange_300",
  icbFillRed50: "bg-red_50",
  icbFillGray104: "bg-gray_104",
  icbFillYellow50: "bg-yellow_50",
  icbFillGray105: "bg-gray_105",
  icbFillGray51: "bg-gray_51",
  icbFillDeeporange300: "bg-deep_orange_300",
  icbOutlineIndigo50: "border border-indigo_50 border-solid",
  icbOutlineBlack9000c: "bg-white_A700 shadow-bs1",
  icbOutlineWhiteA700:
    "bg-deep_orange_300 outline outline-[4px] outline-white_A700",
  icbOutlineBluegray400:
    "bg-white_A700 outline outline-[0.9px] outline-bluegray_400",
  icbOutlineGreen700: "border-2 border-green_700 border-solid",
  icbOutlineBluegray800:
    "bg-white_A700 outline outline-[0.9px] outline-bluegray_800",
};
const sizes = {
  sm: "lg:p-[4px] xl:p-[5px] p-[6px] 3xl:p-[7px]",
  md: "3xl:p-[10px] lg:p-[7px] xl:p-[8px] p-[9px]",
  lg: "lg:p-[10px] xl:p-[11px] p-[13px] 3xl:p-[15px]",
  xl: "lg:p-[13px] xl:p-[15px] p-[17px] 3xl:p-[20px]",
  "2xl": "lg:p-[15px] xl:p-[17px] p-[20px] 3xl:p-[24px]",
  smIcn: "p-[4px]",
  mdIcn: "lg:p-[5px] xl:p-[6px] p-[7px] 3xl:p-[8px]",
  lgIcn: "p-[10px] 3xl:p-[12px] lg:p-[7px] xl:p-[8px]",
  xlIcn: "lg:p-[10px] xl:p-[12px] p-[14px] 3xl:p-[16px]",
  "2xlIcn": "lg:p-[14px] xl:p-[16px] p-[18px] 3xl:p-[21px]",
  "3xlIcn": "lg:p-[20px] xl:p-[23px] p-[26px] 3xl:p-[31px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder4",
    "CircleBorder28",
    "CircleBorder24",
    "CircleBorder20",
    "RoundedBorder10",
    "RoundedBorder16",
    "icbCircleBorder24",
    "icbRoundedBorder4",
    "icbRoundedBorder6",
    "icbCircleBorder28",
    "icbCircleBorder16",
    "icbCircleBorder20",
    "icbCircleBorder40",
    "icbCircleBorder31",
    "icbCircleBorder9",
  ]),
  variant: PropTypes.oneOf([
    "FillGray103",
    "FillDeeporange300",
    "FillGreen70063",
    "FillRed60063",
    "FillGray50",
    "OutlineBluegray200",
    "FillWhiteA700",
    "FillRed600",
    "OutlineIndigo50",
    "FillBluegray900",
    "FillIndigo401",
    "FillRed40019",
    "FillIndigo40019",
    "OutlineBluegray900",
    "FillDeeporange50",
    "FillBlack90066",
    "OutlineDeeporange300",
    "FillGreen700",
    "FillAmber300",
    "icbFillGray50",
    "icbFillWhiteA700",
    "icbOutlineDeeporange300",
    "icbFillRed50",
    "icbFillGray104",
    "icbFillYellow50",
    "icbFillGray105",
    "icbFillGray51",
    "icbFillDeeporange300",
    "icbOutlineIndigo50",
    "icbOutlineBlack9000c",
    "icbOutlineWhiteA700",
    "icbOutlineBluegray400",
    "icbOutlineGreen700",
    "icbOutlineBluegray800",
  ]),
  size: PropTypes.oneOf([
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "smIcn",
    "mdIcn",
    "lgIcn",
    "xlIcn",
    "2xlIcn",
    "3xlIcn",
  ]),
};
Button.defaultProps = {
  className: "",
  shape: "",
  variant: "icbFillGray50",
  size: "xlIcn",
};

export { Button };
