import styles from "./NavURLS.module.css";
function NavURLS({ en, ar }) {
  return (
    <ul className={styles.list}>
      {en && (
        <>
          <li>
            <a href="#">Main</a>
          </li>
          <li>
            <a href="#">Prices</a>
          </li>
          <li>
            <a href="#">Contact sales</a>
          </li>
        </>
      )}
      {ar && (
        <>
          <li>
            <a href="#">الرئيسية</a>
          </li>
          <li>
            <a href="#">الاسعار</a>
          </li>
          <li>
            <a href="#">كلم المبيعات</a>
          </li>
        </>
      )}
    </ul>
  );
}

export default NavURLS;
