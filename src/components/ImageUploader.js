import { useEffect, useRef, useState } from "react";
import Loading from "./Loader";

const ImageUploader = ({
  hide = false,
  preview,
  setPreview,
  setSelectedFile,
  onPredict = () => {},
}) => {
  const [ready, setReady] = useState(false);
  const [uploading, setUploading] = useState(false);

  const refFileInput = useRef(null);

  const fileValidate = (fileType, fileSize) => {
    const imagesTypes = ["jpeg", "png"];

    // File Type Validation
    let isImage = imagesTypes.filter(
      (type) => fileType.indexOf(`image/${type}`) !== -1
    );

    // If The Uploaded File Is An Image
    if (isImage.length !== 0) {
      // Check, If File Size Is 2MB or Less
      if (fileSize <= 5000000) {
        return true;
      } else {
        return alert("Please Your File Should be 5 Megabytes or Less");
      }
    } else {
      return alert("Please make sure to upload An Image File Type");
    }
  };

  const uploadImage = (file) => {
    const fileReader = new FileReader();
    const fileType = file.type;
    const fileSize = file.size;

    if (fileValidate(fileType, fileSize)) {
      fileReader.addEventListener("load", function () {
        setUploading(true);
        setTimeout(function () {
          setUploading(false);
          setReady(true);
        }, 500);

        setPreview(fileReader.result);
      });

      fileReader.readAsDataURL(file);
      setSelectedFile(file);
    }
  };

  const onDrop = (event) => {
    event.preventDefault();

    const file = event.target.files[0];
    uploadImage(file);
  };

  const onClick = (event) => {
    refFileInput.current.click();
  };

  const onChange = (event) => {
    const file = event.target.files[0];
    uploadImage(file);
  };

  const onCancel = () => {
    setSelectedFile(null);
    setPreview("");
    setReady(false);
  };

  const onSubmit = () => {
    setReady(false);
    onPredict();
  }

  return (
    <div className={`uploader_wrapper${hide ? " hidden" : ""}`}>
      <div className="info">
        Upload your sea slug image now and find out what it is!
      </div>
      <div className="uploader">
        <div className="uploader_header">Upload an image</div>
        <div className="uploader_subtitle">Attach the file below</div>
        <div className="image_dropzone" onClick={onClick} onDrop={onDrop}>
          <input
            ref={refFileInput}
            type="file"
            className="image_dropzone_input"
            accept="image/*"
            onChange={onChange}
          />
          <div
            className={`image_preview_wrapper${
              ready && !uploading ? "" : " hidden"
            }`}
          >
            <img className="image_preview" src={preview} alt=""></img>
            <div className="text">you can always replace the image with</div>
            <strong>another one.</strong>
          </div>
          <div
            className={`image_dropzone_description_wrapper${
              ready || uploading ? " hidden" : ""
            }`}
          >
            <>
              <ion-icon name="image-outline"></ion-icon>
              <div className="header">Drag image here to upload.</div>
              <div className="text">
                Alternatively, you can select a file by
              </div>
              <strong>clicking here</strong>
            </>
          </div>
          <div className={`image_loader${uploading ? " shown" : ""}`}>
            <Loading />
          </div>
        </div>
        <div className="uploader_actions">
          <button className="cancel" disabled={!ready} onClick={onCancel}>
            Cancel
          </button>
          <button className="submit" disabled={!ready} onClick={onSubmit}>
            Predict Slug
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
