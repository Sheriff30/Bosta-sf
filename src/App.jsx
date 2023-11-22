import { useEffect } from "react";
import Header from "./Components/Header";
import Shipment from "./Components/Shipment";
import Delivery from "./Components/Delivery";
import { useReducer } from "react";
import StartScreen from "./Components/StartScreen";
import Loader from "./Components/Loader";

// const trackingNumber = [7234258, 13737343, 67151313];

const initialTodos = {
  status: "start",
  trackingData: {},
  TrackingNumber: "",
  delivery: "",
  en: true,
  ar: false,
  number: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "numberChange":
      return {
        ...state,
        number: Number(action.payload),
        status: "load",
      };
    case "data":
      return {
        ...state,
        number: null,
        trackingData: { ...action.payload },
        status: "ready",
      };

    case "ar":
      return {
        ...state,
        ar: action.payload,
        en: !action.payload,
      };
    case "en":
      return {
        ...state,
        en: action.payload,
        ar: !action.payload,
      };
    default:
      throw new Error("Unknown");
  }
};

function App() {
  const [{ trackingData, status, number, en, ar }, dispatch] = useReducer(
    reducer,
    initialTodos
  );

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          `https://tracking.bosta.co/shipments/track/${number}`
        );

        if (res.ok) {
          const data = await res.json();

          dispatch({ type: "data", payload: data });
        } else {
          console.error(
            `Failed to fetch tracking information for ${7234258}. Status code: ${
              res.status
            }`
          );
        }
      } catch (error) {
        console.error("Error fetching tracking information:", error);
      }
    }

    fetchData();
  }, [number]);
  const { CurrentStatus, TrackingNumber, provider, TransitEvents } =
    trackingData;

  const ready = status === "ready";
  const load = status === "load";
  const start = status === "start";

  return (
    <div dir={(ar && "rtl") || (en && "ltr")}>
      <Header dispatch={dispatch} en={en} ar={ar} />
      {ready && (
        <>
          <Shipment
            CurrentStatus={CurrentStatus}
            TrackingNumber={TrackingNumber}
            provider={provider}
            ar={ar}
            en={en}
          />
          <Delivery
            CurrentStatus={CurrentStatus}
            TransitEvents={TransitEvents}
            ar={ar}
            en={en}
          />
        </>
      )}

      {!number && <StartScreen en={en} ar={ar} />}
      {load && number && <Loader en={en} />}

      {}
    </div>
  );
}

export default App;
