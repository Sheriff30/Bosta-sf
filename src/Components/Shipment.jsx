import ShipmentDetails from "./ShipmentDetails";
import styles from "./Shipment.module.css";
import ShipmentDetailsChart from "./ShipmentDetailsChart";

// eslint-disable-next-line react/prop-types
function Shipment({ TrackingNumber, CurrentStatus, provider, ar, en }) {
  return (
    <div className={styles.shipment}>
      <ShipmentDetails
        TrackingNumber={TrackingNumber}
        provider={provider}
        CurrentStatus={CurrentStatus}
        ar={ar}
        en={en}
      />
      <ShipmentDetailsChart CurrentStatus={CurrentStatus} ar={ar} en={en} />
    </div>
  );
}

export default Shipment;
