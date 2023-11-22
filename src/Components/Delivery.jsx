/* eslint-disable react/prop-types */
import styles from "./Delivery.module.css";

import DeliveryDetails from "./DeliveryDetails";
import DeliveryAddress from "./DeliveryAddress";

function Delivery({ CurrentStatus, TransitEvents, ar, en }) {
  return (
    <div className={styles.Delivery}>
      <DeliveryDetails
        CurrentStatus={CurrentStatus}
        TransitEvents={TransitEvents}
        en={en}
        ar={ar}
      />
      <DeliveryAddress
        TransitEvents={TransitEvents}
        CurrentStatus={CurrentStatus}
        en={en}
        ar={ar}
      />
    </div>
  );
}

export default Delivery;
