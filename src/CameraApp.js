import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import './CameraApp.css'; 

const CameraApp = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  // Function to capture image
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImageSrc(imageSrc);
  }, [webcamRef]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        style={{ width: '100%' }}
      />
      <button onClick={capture}>Capture Photo</button>

      {imageSrc && (
        <div className="captured-image">
            <h3>Captured Image:</h3>
            <img src={imageSrc} alt="Captured" />
        </div>
        )}
    </div>
  );
};

export default CameraApp;
