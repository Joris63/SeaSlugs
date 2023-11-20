import { useEffect, useState } from "react";
import Loading from "./Loader";

const PredictionResult = (props) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {setReady(true)}, 1500)
  }, [])

  return (
    <div className="prediction_wrapper">
      <div className={`loading_bar${ready ? " loaded" : ""}`}>
        <Loading />
        <div className="loading_text">Getting Prediction...</div>
      </div>
      <div className={`uploaded_image_wrapper${ready ? " loaded" : ""}`}>
        <img
          className="uploaded_image"
          src={process.env.PUBLIC_URL + "slug.jpg"}
          alt=""
        ></img>
      </div>
      <div className="prediction_results_wrapper">
        <div className={`prediction_results_text${ready ? " loaded" : ""}`}>
          <div className="header">Sea slug matches</div>
          <div className="subtitle">Top 3 matches</div>
        </div>
        <ul className={`prediction_results${ready ? " loaded" : ""}`}>
          <li className="result_probability">
            <div className="slug_name">Aeolidiella glauca</div>
            <div className="probability">
              <div className="percentage_bar" style={{ width: "64%" }} />
              <span className="percentage_value">64%</span>
            </div>
          </li>
          <li className="result_probability">
            <div className="slug_name">Aeolidiella filomenae</div>
            <div className="probability">
              <div className="percentage_bar" style={{ width: "23%" }} />
              <span className="percentage_value">23%</span>
            </div>
          </li>
          <li className="result_probability">
            <div className="slug_name">Aeolidiella papillosa</div>
            <div className="probability">
              <div className="percentage_bar" style={{ width: "13%" }} />
              <span className="percentage_value">13%</span>
            </div>
          </li>
        </ul>
        <div className={`prediction_actions${ready ? " loaded" : ""}`}>
          <button
            className="submit"
            onClick={() => {
              setReady(!ready);
            }}
          >
            Try another
          </button>
        </div>
      </div>
    </div>
  );
};

export default PredictionResult;
