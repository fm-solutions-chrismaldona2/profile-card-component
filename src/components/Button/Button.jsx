import PropTypes from "prop-types";
import styles from "./Button.module.css";

export default function Button({
  type = "button",
  onClick,
  children,
  ...props
}) {
  return (
    <button className={styles.button} type={type} onClick={onClick} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};
