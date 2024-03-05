import styles from "./Display.module.css";
function Display({ value }) {
  return <input className={styles.display} value={value} readOnly />;
}
export default Display;
