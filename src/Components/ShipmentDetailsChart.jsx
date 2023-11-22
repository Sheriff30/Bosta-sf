/* eslint-disable react/prop-types */
import ShipmentDeliverd from "./ShipmentDeliverd";
import styles from "./ShipmentDetailsChart.module.css";
import ShipmentNotDelivred from "./ShipmentNotDelivred";
import ShipmentCanceld from "./ShipmentCanceld";
function ShipmentDetailsChart({ CurrentStatus, ar, en }) {
  const DELIVERED = CurrentStatus.state === "DELIVERED";
  const CANCELLED = CurrentStatus.state === "CANCELLED";
  const DELIVEREDTOSENDER = CurrentStatus?.state === "DELIVERED_TO_SENDER";

  return (
    <div className={styles.shipmentDetailsChart}>
      {DELIVERED && <ShipmentDeliverd ar={ar} en={en} />}
      {DELIVEREDTOSENDER && <ShipmentNotDelivred ar={ar} en={en} />}{" "}
      {CANCELLED && <ShipmentCanceld ar={ar} en={en} />}
    </div>
  );
}

export default ShipmentDetailsChart;
