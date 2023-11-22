import { useState } from "react";
import LogoEn from "../assets/LogoEn";
import ActionButtons from "./ActionButtons";
import styles from "./Header.module.css";
import MenuBar from "./MenuBar";
import NavURLS from "./NavURLS";
import ResponsiveMenuBar from "./ResponsiveMenuBar";
import LogoAr from "../assets/LogoAr";

function Header({ dispatch, en, ar }) {
  const [showList, setShowList] = useState("hide");

  function HandleShowMenu() {
    setShowList((show) => {
      return show === "hide" ? "active" : "hide";
    });
  }

  return (
    <header className={styles.header}>
      {en && <LogoEn />}
      {ar && <LogoAr />}
      <NavURLS en={en} ar={ar} />

      <div className={styles.flex}>
        <ActionButtons dispatch={dispatch} ar={ar} en={en} />
        <MenuBar HandleShowMenu={HandleShowMenu} />
        {showList === "active" && (
          <ResponsiveMenuBar en={en} ar={ar} dispatch={dispatch} />
        )}
      </div>
    </header>
  );
}

export default Header;
