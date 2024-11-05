import PropTypes from "prop-types";
import styles from "./Error.module.css";

export default function Error({ children }) {
  return <p className={styles.error}>{children}</p>;
}

Error.propTypes = {
  children: PropTypes.node.isRequired,
};
