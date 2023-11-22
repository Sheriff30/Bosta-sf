import ShipmentDetail from "./ShipmentDetail";
import styles from "./ShipmentDetails.module.css";

// eslint-disable-next-line react/prop-types

const formatDateString = (dateString) => {
  const options = {
    weekday: "long",
    month: "numeric",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };

  const formattedDate = new Date(dateString).toLocaleString("en-US", options);
  return formattedDate;
};

const formatDateString2 = (dateString) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const formattedDate = new Date(dateString).toLocaleString("en-US", options);
  return formattedDate;
};

function ShipmentDetails({ TrackingNumber, provider, CurrentStatus, en, ar }) {
  const DELIVERED = CurrentStatus?.state === "DELIVERED";
  const CANCELLED = CurrentStatus?.state === "CANCELLED";
  const DELIVEREDTOSENDER = CurrentStatus?.state === "DELIVERED_TO_SENDER";

  const formattedDate = formatDateString(CurrentStatus?.timestamp);
  const formattedDate2 = formatDateString2(CurrentStatus?.timestamp);

  return (
    <div className={styles.shipmentDetails}>
      {en && (
        <>
          <ShipmentDetail>
            <p>Shipment Number {TrackingNumber}</p>

            <p
              style={{
                color:
                  (DELIVERED && "#2acf2a") ||
                  (CANCELLED && "#e30613") ||
                  (DELIVEREDTOSENDER && "#f2c46f"),
              }}
            >
              {DELIVERED && "The shipment has been delivered"}
              {CANCELLED && "The shipment has been canceled by the merchant"}
              {DELIVEREDTOSENDER && "The shipment was not delivered"}
            </p>
          </ShipmentDetail>
          <ShipmentDetail>
            <p>Last Update</p>
            <p>at {formattedDate} </p>
          </ShipmentDetail>
          <ShipmentDetail>
            <p>Merchant name</p>
            <p>{provider}</p>
          </ShipmentDetail>
          <ShipmentDetail>
            <p>Delivery time within</p>
            <p>{formattedDate2}</p>
          </ShipmentDetail>
        </>
      )}
      {ar && (
        <>
          <ShipmentDetail>
            <p>رقم الشحنة {TrackingNumber}</p>

            <p
              style={{
                color:
                  (DELIVERED && "#2acf2a") ||
                  (CANCELLED && "#e30613") ||
                  (DELIVEREDTOSENDER && "#f2c46f"),
              }}
            >
              {DELIVERED && "تم تسليم الشحنة"}
              {CANCELLED && "تم الغاء الشحنة"}
              {DELIVEREDTOSENDER && "لم يتم تسليم الشحنة"}
            </p>
          </ShipmentDetail>
          <ShipmentDetail>
            <p>اخر تحديث</p>
            <p>at {formattedDate} </p>
          </ShipmentDetail>
          <ShipmentDetail>
            <p>اسم التاجر</p>
            <p>{provider}</p>
          </ShipmentDetail>
          <ShipmentDetail>
            <p>موعد تسليم خلال</p>
            <p>{formattedDate2}</p>
          </ShipmentDetail>
        </>
      )}
    </div>
  );
}

export default ShipmentDetails;
