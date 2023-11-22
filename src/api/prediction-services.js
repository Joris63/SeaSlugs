import axios from "./axios";

async function requestPrediction(data) {
  return await axios
    .post("/seaslugs/predict", data)
    .then((response) => {
        return response;
    })
    .catch((err) => {
        console.log(err);
    });
}

export { requestPrediction };
