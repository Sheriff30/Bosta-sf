import styles from "./ShipmentDetail.module.css";

function ShipmentDetail({ children }) {
  return <div className={styles.shipmentDetail}>{children}</div>;
}

export default ShipmentDetail;
