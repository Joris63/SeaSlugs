import { useState } from "react";

const ImageUploader = ({ predictSlug = () => {} }) => {
  const [ready, setReady] = useState(true);

  return (
    <div className="uploader_wrapper">
      <div className="info">
        Upload your sea slug image now and find out what it is!
      </div>
      <div className="uploader">
        <div className="uploader_header">Upload an image</div>
        <div className="uploader_subtitle">Attach the file below</div>
        <div className="image_dropzone">
          <input type="file" className="image_dropzone_input" />
          {ready ? (
            <div className="image_preview_wrapper">
              <img
                className="image_preview"
                src={process.env.PUBLIC_URL + "slug.jpg"}
                alt=""
              ></img>
              <div className="text">you can always replace the image with</div>
              <strong>another one.</strong>
            </div>
          ) : (
            <div className="image_dropzone_description_wrapper">
              <>
                <ion-icon name="image-outline"></ion-icon>
                <div className="header">Drag image here to upload.</div>
                <div className="text">
                  Alternatively, you can select a file by
                </div>
                <strong>clicking here</strong>
              </>
            </div>
          )}
        </div>
        <div className="uploader_actions">
          <button className="cancel" disabled={!ready}>
            Cancel
          </button>
          <button className="submit" disabled={!ready}>
            Predict Slug
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
