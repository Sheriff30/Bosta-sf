import styles from "./Loader.module.css";

function Loader({ en }) {
  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}> {en ? "Loading..." : "تحميل..."}</div>
    </div>
  );
}

export default Loader;
