import { useState } from "react";
import styles from "./ResponsiveMenuBar.module.css";

function ResponsiveMenuBar({ dispatch, en, ar }) {
  return (
    <div className={styles.ResponsiveMenuBar}>
      {en && (
        <ul>
          <li>
            <a href="#">Main</a>
          </li>
          <li>
            <a href="#">Prices</a>
          </li>
          <li>
            <a href="#">Contact sales</a>
          </li>
          <li>
            <a href="#">Sign up</a>
          </li>
          <li>
            <a
              href="#"
              onClick={function () {
                dispatch({ type: "ar", payload: true });
              }}
            >
              AR
            </a>
          </li>
        </ul>
      )}
      {ar && (
        <ul>
          <li>
            <a href="#">الرئيسية</a>
          </li>
          <li>
            <a href="#">الاسعار</a>
          </li>
          <li>
            <a href="#">كلم المبيعات</a>
          </li>
          <li>
            <a href="#">تسجيل دخول</a>
          </li>
          <li>
            <a
              href="#"
              onClick={function () {
                dispatch({ type: "en", payload: true });
              }}
            >
              EN
            </a>
          </li>
        </ul>
      )}
    </div>
  );
}

export default ResponsiveMenuBar;
