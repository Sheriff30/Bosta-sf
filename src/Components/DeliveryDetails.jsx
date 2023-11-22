/* eslint-disable react/prop-types */
import styles from "./DeliveryDetails.module.css";

const formatDateString = (dateString) => {
  const dateObject = new Date(dateString);

  const year = dateObject.getFullYear();
  const month = String(dateObject.getMonth() + 1).padStart(2, "0");
  const day = String(dateObject.getDate()).padStart(2, "0");

  const formattedDateString = `${month}/${day}/${year}`;

  return formattedDateString;
};

const formatTimeString = (dateString) => {
  const dateObject = new Date(dateString);

  const hours = dateObject.getHours();
  const minutes = String(dateObject.getMinutes()).padStart(2, "0");

  const amPm = hours >= 12 ? "pm" : "am";

  const formattedHours = hours % 12 || 12;

  const formattedTimeString = `${formattedHours}:${minutes} ${amPm}`;

  return formattedTimeString;
};

function DeliveryDetails({ CurrentStatus, TransitEvents, en, ar }) {
  const DELIVERED = CurrentStatus?.state === "DELIVERED";
  const CANCELLED = CurrentStatus?.state === "CANCELLED";
  const DELIVEREDTOSENDER = CurrentStatus?.state === "DELIVERED_TO_SENDER";
  const createdDate = formatDateString(TransitEvents[0]?.timestamp);
  const createdTime = formatTimeString(TransitEvents[0]?.timestamp);
  const Branch = TransitEvents[9]?.hub;
  const reason = TransitEvents[8]?.reason;

  return (
    <div>
      {en && (
        <>
          <span className={styles.DeliveryDetailsH1}>Shipment details</span>
          <ul className={styles.TH}>
            <li>Branch</li>
            <li>Date</li>
            <li>Time</li>
            <li>Details</li>
          </ul>
          <ul className={styles.TD}>
            <li>{CANCELLED ? "No address" : Branch}</li>
            <li>{createdDate}</li>
            <li>{createdTime}</li>
            <li>Shipment created</li>
          </ul>
          <ul className={styles.TD}>
            <li>{CANCELLED ? "No address" : Branch}</li>
            <li>{createdDate}</li>
            <li>{createdTime}</li>
            <li>Shipment received from the merchant</li>
          </ul>
          <ul className={styles.TD}>
            <li>{CANCELLED ? "No address" : Branch}</li>
            <li>{createdDate}</li>
            <li>{createdTime}</li>
            <li>{CANCELLED ? "The shipment is out for delivery" : reason}</li>
          </ul>
          <ul className={styles.TD}>
            <li>{CANCELLED ? "No address" : Branch}</li>
            <li>{createdDate}</li>
            <li>{createdTime}</li>
            <li>
              {DELIVERED && "  Sent delivered handed"}
              {CANCELLED && (
                <>
                  <p style={{ marginBottom: "1rem" }}>
                    The shipment was not delivered
                  </p>
                  <p style={{ color: "#e30613" }}>
                    The shipment has been canceled by the merchant
                  </p>
                </>
              )}
              {DELIVEREDTOSENDER && (
                <>
                  <p style={{ marginBottom: "1rem" }}>
                    The shipment was not delivered
                  </p>
                  <p style={{ color: "#f2c46f" }}>
                    The customer is not present at the address
                  </p>
                </>
              )}
            </li>
          </ul>
        </>
      )}
      {ar && (
        <>
          <span className={styles.DeliveryDetailsH1}>تفاصيل الشحنة</span>
          <ul className={styles.TH}>
            <li>الفرع</li>
            <li>التاريخ</li>
            <li>الوقت</li>
            <li>تفاصيل</li>
          </ul>
          <ul className={styles.TD}>
            <li>{CANCELLED ? "لا يوجد عنوان" : Branch}</li>
            <li>{createdDate}</li>
            <li dir="ltr">{createdTime}</li>
            <li>تم انشاء الشحنة</li>
          </ul>
          <ul className={styles.TD}>
            <li>{CANCELLED ? "لا يوجد عنوان" : Branch}</li>
            <li>{createdDate}</li>
            <li dir="ltr">{createdTime}</li>
            <li>تم استلام الشحنة من التاجر</li>
          </ul>
          <ul className={styles.TD}>
            <li>{CANCELLED ? "لا يوجد عنوان" : Branch}</li>
            <li>{createdDate}</li>
            <li dir="ltr">{createdTime}</li>
            <li>{CANCELLED ? "الشحنة خرجت للتسليم" : reason}</li>
          </ul>
          <ul className={styles.TD}>
            <li>{CANCELLED ? "لا يوجد عنوان" : Branch}</li>
            <li>{createdDate}</li>
            <li dir="ltr">{createdTime}</li>
            <li>
              {DELIVERED && " تم التسليم"}
              {CANCELLED && (
                <>
                  <p style={{ marginBottom: "1rem" }}>لم يتم تسليم الشحنة</p>
                  <p style={{ color: "#e30613" }}>تم الغاء الشحنة من التاجر</p>
                </>
              )}
              {DELIVEREDTOSENDER && (
                <>
                  <p style={{ marginBottom: "1rem" }}>لم يتم تسليم الشحنة</p>
                  <p style={{ color: "#f2c46f" }}>
                    العميل غير متواجد في العنوان
                  </p>
                </>
              )}
            </li>
          </ul>
        </>
      )}
    </div>
  );
}

export default DeliveryDetails;
