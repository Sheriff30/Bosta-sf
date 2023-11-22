/* eslint-disable react/prop-types */
import styles from "./Address.module.css";
function Address({ TransitEvents, CurrentStatus, en }) {
  const CANCELLED = CurrentStatus?.state === "CANCELLED";

  const Branch = TransitEvents[9]?.hub;

  return (
    <div className={styles.Address}>
      {" "}
      {CANCELLED ? `${en ? "No Address" : "لا يوجد عنوان"}` : Branch}
    </div>
  );
}

export default Address;
