import styles from "./ShipmentCanceld.module.css";
import CheckIcon from "../assets/CheckIcon";
import Shipping from "../assets/Shipping";
import AddressIcon from "../assets/AddressIcon";

function ShipmentCanceld({ ar, en }) {
  return (
    <>
      <ul className={styles.ShipmentCanceld}>
        <li>
          <CheckIcon />
        </li>
        <li></li>
        <li>
          <CheckIcon />
        </li>
        <li></li>
        <li>
          <Shipping />
        </li>
        <li></li>
        <li>
          <AddressIcon />
        </li>
      </ul>

      {en && (
        <ul className={styles.progress}>
          <li>Shipment created</li>
          <li>Shipment received from the merchant</li>
          <li>
            Shipment is out for delivery <br />{" "}
            <span>The customer is not present at the address</span>
          </li>
          <li>Sent delivered handed</li>
        </ul>
      )}
      {ar && (
        <ul className={styles.progress}>
          <li>تم انشاء الشحنة</li>
          <li>تم استلام الشحنة من التاجر</li>
          <li>
            الشحنة خرجت للتسليم
            <br /> <span>تم الغاء الشحنة من التاجر</span>
          </li>
          <li>تم التسليم</li>
        </ul>
      )}
    </>
  );
}

export default ShipmentCanceld;
