import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import PredictionResult from "./components/PredictionResult";
import "./styles.scss";

function App() {
  const [mode, setMode] = useState("prediction");

  const changeMode = () => {
    setMode(mode === "upload" ? "prediction" : "upload");
  };

  return (
    <div className={`main_wrapper${mode === "upload" ? "" : " result"}`}>
      <div className="title">
        Sea Slug Recognition
        <p className="subtitle">
          powered by{" "}
          <a href="https://blauwtipje.nl/" target="_blank" rel="noreferrer">
            Blauwtipje.nl
          </a>
        </p>
      </div>
      <div className={`content_wrapper${mode === "upload" ? "" : " wide"}`}>
        <ImageUploader
          changeMode={changeMode}
          hide={mode !== "upload"}
        />
        <PredictionResult
          hide={mode !== "prediction"}
          changeMode={changeMode}
        />
      </div>
    </div>
  );
}

//<ImageUploader />
//<PredictionResult />

export default App;
