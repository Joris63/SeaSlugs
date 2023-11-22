import { useEffect, useState } from "react";
import Loading from "./Loader";

const PredictionResult = ({
  hide,
  data,
  preview,
  changeMode = () => {},
}) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (data !== null) {
      setTimeout(() => {
        setReady(true);
      }, 250);
    } else {
      setReady(false);
    }
  }, [data]);

  const retryPrediction = () => {
    changeMode();
    setReady(false);
  };

  return (
    <div className={`prediction_wrapper${hide ? " hidden" : ""}`}>
      <div className={`loading_bar${ready ? " loaded" : ""}`}>
        <Loading />
        {!hide && <div className="loading_text">Getting Prediction...</div>}
      </div>
      <div className={`uploaded_image_wrapper${ready ? " loaded" : ""}`}>
        <img
          className="uploaded_image"
          src={preview}
          alt=""
        ></img>
      </div>
      <div className="prediction_results_wrapper">
        <div className={`prediction_results_text${ready ? " loaded" : ""}`}>
          <div className="header">Sea slug matches</div>
          <div className="subtitle">Top 3 matches</div>
        </div>
        <ul className={`prediction_results${ready ? " loaded" : ""}`}>
          {data?.map((slug) => (
            <li className="result_probability" key={slug.label}>
              <div className="slug_name">{slug.label}</div>
              <div className="probability">
                <div
                  className="percentage_bar"
                  style={{ width: `${slug.probability}%` }}
                />
                <span className="percentage_value">{slug.probability}%</span>
              </div>
            </li>
          ))}
        </ul>
        <div className={`prediction_actions${ready ? " loaded" : ""}`}>
          <button
            className="submit"
            onClick={() => {
              retryPrediction();
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
