import PropTypes from "prop-types";
import Label from "./Label";
import styles from "./Input.module.css";
import React from "react";

export const Input = React.forwardRef(function Input(
  { id, name, type = "text", label, placeholder, isRequired, ...props },
  ref
) {
  return (
    <>
      {label && (
        <Label htmlFor={id} required={isRequired}>
          {label}
        </Label>
      )}
      <input
        className={styles.input}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
    </>
  );
});

Input.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  isRequired: PropTypes.bool,
  placeholder: PropTypes.string,
};

export default Input;
