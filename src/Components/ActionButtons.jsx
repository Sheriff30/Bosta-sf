import { useState } from "react";
import SearchIcon from "../assets/SearchIcon";
import styles from "./ActionButtons.module.css";

function ActionButtons({ dispatch, ar, en }) {
  return (
    <ul className={styles.list}>
      {en && (
        <>
          <li className={styles.track}>
            Track Shipment
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className={styles.ArrowIcon}
              >
                <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
              </svg>
            </span>
            <div className={styles.input}>
              <p>Track your shipment</p>
              <div>
                <input
                  type="text"
                  placeholder="Tracking Number"
                  onChange={function (e) {
                    dispatch({ type: "numberChange", payload: e.target.value });
                  }}
                />
                <button>
                  {" "}
                  <SearchIcon />
                </button>
              </div>
            </div>
          </li>
          <li>Sign up</li>
          <li
            onClick={function () {
              dispatch({ type: "ar", payload: true });
            }}
          >
            AR
          </li>
        </>
      )}
      {ar && (
        <>
          <li className={styles.artrack}>
            تتبع شحنتك
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 448 512"
                className={styles.ArrowIcon2}
              >
                <path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z" />
              </svg>
            </span>
            <div className={styles.input2}>
              <p> تتبع شحنتك</p>
              <div>
                <button>
                  {" "}
                  <SearchIcon />
                </button>
                <input
                  dir=""
                  type="text"
                  placeholder="رقم التتبع"
                  onChange={function (e) {
                    dispatch({ type: "numberChange", payload: e.target.value });
                  }}
                />
              </div>
            </div>
          </li>
          <li>تسجيل الدخول</li>
          <li
            onClick={function () {
              dispatch({ type: "en", payload: true });
            }}
          >
            EN
          </li>
        </>
      )}
    </ul>
  );
}

export default ActionButtons;
