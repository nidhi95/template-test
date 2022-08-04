import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";
const variants = {
  FillBluegray400: "bg-bluegray_400",
  FillBluegray900: "bg-bluegray_900",
  FillGreen700: "bg-green_700",
  FillIndigo401: "bg-indigo_401",
  FillAmber300: "bg-amber_300",
  FillRed600: "bg-red_600",
  FillWhiteA700: "bg-white_A700",
  FillBluegray800: "bg-bluegray_800",
  FillRed6001_2: "bg-red_600",
  FillGreen7001_2: "bg-green_700",
  FillBluegray9001_2: "bg-bluegray_900",
};

const Radio = React.forwardRef(
  (
    {
      inputClassName = "",
      className,
      name,
      children,
      label = "",
      checked = false,
      errors = [],
      variant,
      ...restProps
    },
    ref
  ) => {
    const [value, setValue] = React.useState(checked);

    React.useEffect(() => {
      setValue(checked);
    }, [checked]);

    const handleChange = (event) => {
      setValue(event.target.checked);
    };

    return (
      <>
        <div className={className}>
          <input
            className={`${inputClassName}  ${variants[variant] || ""} `}
            ref={ref}
            type="radio"
            name={name}
            aria-checked={!!value}
            checked={!!value}
            onChange={handleChange}
            {...restProps}
          />
          {label}
        </div>
        <ErrorMessage errors={errors} />
        {children}
      </>
    );
  }
);
Radio.propTypes = {
  inputClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  variant: PropTypes.oneOf([
    "FillBluegray400",
    "FillBluegray900",
    "FillGreen700",
    "FillIndigo401",
    "FillAmber300",
    "FillRed600",
    "FillWhiteA700",
    "FillBluegray800",
    "FillRed6001_2",
    "FillGreen7001_2",
    "FillBluegray9001_2",
  ]),
};

Radio.defaultProps = {
  inputClassName: "",
  className: "",
  name: "",
  label: "",
  variant: "",
};

export { Radio };
