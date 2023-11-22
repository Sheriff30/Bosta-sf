import CheckIcon from "../assets/CheckIcon";
import styles from "./ShipmentDeliverd.module.css";
function ShipmentDeliverd({ ar, en }) {
  return (
    <>
      <ul className={styles.ShipmentDeliverd}>
        <li>
          <CheckIcon />
        </li>
        <li></li>
        <li>
          <CheckIcon />
        </li>
        <li></li>
        <li>
          <CheckIcon />
        </li>
        <li></li>
        <li>
          <CheckIcon />
        </li>
      </ul>

      {en && (
        <ul className={styles.progress}>
          <li>Shipment created</li>
          <li>Shipment received from the merchant</li>
          <li>Shipment is out for delivery</li>
          <li>Sent delivered handed</li>
        </ul>
      )}
      {ar && (
        <ul className={styles.progress}>
          <li>تم انشاء الشحنة</li>
          <li>تم استلام الشحنة من التاجر</li>
          <li>الشحنة خرجت للتسليم</li>
          <li>تم التسليم</li>
        </ul>
      )}
    </>
  );
}

export default ShipmentDeliverd;
