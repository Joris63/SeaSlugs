import { useState } from "react";
import ImageUploader from "./components/ImageUploader";
import PredictionResult from "./components/PredictionResult";
import { requestPrediction } from "./api/prediction-services";

import "./styles.scss";

function App() {
  const [mode, setMode] = useState("upload");
  const [prediction, setPrediction] = useState(null);
  const [preview, setPreview] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const changeMode = () => {
    if (mode === "upload") {
      setMode("prediction");
    } else {
      setPreview("");
      setSelectedFile(null);
      setMode("upload");
    }
  };

  const handlePrediction = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("image", selectedFile);

      setMode("prediction");
      setPrediction(null);

      requestPrediction(formData).then((response) => {
        setPrediction(response.data?.probabilities);
      });
    } else {
      console.error("No file selected");
    }
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
          hide={mode !== "upload"}
          onPredict={handlePrediction}
          preview={preview}
          setPreview={setPreview}
          setSelectedFile={setSelectedFile}
        />
        <PredictionResult
          hide={mode !== "prediction"}
          data={prediction}
          preview={preview}
          changeMode={changeMode}
        />
      </div>
    </div>
  );
}

export default App;
