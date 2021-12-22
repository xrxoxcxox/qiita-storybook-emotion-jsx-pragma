/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  className,
  ...props
}) => {
  const mode = primary ? styles.primary : styles.secondary;
  return (
    <button
      type="button"
      css={[styles.button, styles[size], mode]}
      className={className}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

const styles = {
  button: css({
    fontFamily: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    fontWeight: 700,
    border: 0,
    borderRadius: "3em",
    cursor: "pointer",
    display: "inline-block",
    lineHeight: 1,
  }),
  primary: css({
    color: "white",
    backgroundColor: "#1ea7fd",
  }),
  secondary: css({
    color: "#333",
    backgroundColor: "transparent",
    boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset",
  }),
  small: css({
    fontSize: 12,
    padding: "10px 16px",
  }),
  medium: css({
    fontSize: 14,
    padding: "11px 20px",
  }),
  large: css({
    fontSize: 16,
    padding: "12px 24px",
  }),
};
