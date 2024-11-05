import PropTypes from "prop-types";
import styles from "./HomePage.module.css";

export default function HomePage({ children }) {
  return (
    <main className={styles.home}>
      <div className={styles.home__content}>{children}</div>
    </main>
  );
}

HomePage.propTypes = {
  children: PropTypes.node.isRequired,
};
