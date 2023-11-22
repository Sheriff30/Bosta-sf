import SearchIcon from "../assets/SearchIcon";
import styles from "./StartScreen.module.css";

function StartScreen({ en, ar }) {
  return (
    <div className={styles.StartScreen}>
      {en && <p>Start tracking your shipment</p>}
      {ar && <p>ابدأ بتتبع شحنتك</p>}
    </div>
  );
}

export default StartScreen;
