import styles from "./CalButton.module.css";
function CalButton({ label, onClick }) {
  return (
    <button className={styles.button} onClick={() => onClick(label)}>
      {label}
    </button>
  );
}
export default CalButton;
