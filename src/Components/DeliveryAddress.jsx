/* eslint-disable react/prop-types */
import Address from "./Address";
import styles from "./DeliveryAddress.module.css";
import Report from "./Report";

function DeliveryAddress({ TransitEvents, CurrentStatus, en, ar }) {
  return (
    <div className={styles.DeliveryAddress}>
      <span className={styles.DeliveryAddressH1}>
        {en ? "Delivery address" : "عنوان التسليم"}
      </span>
      <Address
        TransitEvents={TransitEvents}
        CurrentStatus={CurrentStatus}
        en={en}
        ar={ar}
      />
      <Report en={en} />
    </div>
  );
}

export default DeliveryAddress;
