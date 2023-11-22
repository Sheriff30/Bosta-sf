import ReportIcon from "../assets/ReportIcon";
import styles from "./Report.module.css";
function Report({ en }) {
  return (
    <div className={styles.Report}>
      <div>
        <ReportIcon />
      </div>
      <div>
        <p>
          {en
            ? "Is there a problem with your shipment?!"
            : "  هل توجد مشكلة في شحنتك ؟! "}
        </p>
        <button>{en ? "Report a problem" : "ابلاغ عن مشكلة"}</button>
      </div>
    </div>
  );
}

export default Report;
