import styles from "./ButtonContainer.module.css";
import CalButton from "./CalButton.jsx";

function ButtonContainer({ buttonList, onClick }) {
  return (
    <div className={styles.buttonContainer}>
      {buttonList.map((b) => (
        <CalButton key={b} label={b} onClick={onClick} />
      ))}
    </div>
  );
}
export default ButtonContainer;
