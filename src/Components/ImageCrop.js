import React, { useCallback, useState } from "react";
import "./ImageCrop.css";
import Cropper from "react-easy-crop";

function ImageCrop({ image, updateDimensions }) {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [dimensions, setDimension] = useState({});

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setDimension(croppedAreaPixels);
  }, []);

  return (
    <>
      <Cropper
        image={image}
        crop={crop}
        zoom={zoom}
        aspect={1 / 1}
        onCropChange={setCrop}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />

      <button
        type="button"
        onClick={() => updateDimensions(dimensions)}
        className="cropComplete"
      >
        Complete
      </button>
    </>
  );
}

export default ImageCrop;
