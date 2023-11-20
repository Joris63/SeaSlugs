import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import PredictionResult from "./components/PredictionResult";
import "./styles.scss";

function App() {
  const [mode, setMode] = useState("upload");
  const [ready, setReady] = useState(true);

  const predictSlug = () => {
    setMode(mode === "upload" ? "prediction" : "upload");
    setReady(false);
  };

  return (
    <div className="main_wrapper">
      <div className="title">
        Sea Slug Recognition
        <p className="subtitle">
          powered by{" "}
          <a href="https://blauwtipje.nl/" target="_blank" rel="noreferrer">
            Blauwtipje.nl
          </a>
        </p>
      </div>
      <div className="content_wrapper">
        <ImageUploader predictSlug={predictSlug}/>
      </div>
    </div>
  );
}

//<ImageUploader />
//<PredictionResult />

export default App;
