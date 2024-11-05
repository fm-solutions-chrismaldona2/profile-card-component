import PropTypes from "prop-types";
import styles from "./Label.module.css";

export default function Label({ htmlFor, required, children }) {
  return (
    <label className={styles.label} htmlFor={htmlFor}>
      {children}
      {required && <span className={styles["label--required"]}>*</span>}
    </label>
  );
}

Label.propTypes = {
  htmlFor: PropTypes.string,
  required: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
