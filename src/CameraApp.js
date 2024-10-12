import React, { useRef, useCallback, useState } from "react";
import Webcam from "react-webcam";
import './CameraApp.css';

const CameraApp = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);

  // Function to capture image
  const capture = useCallback(() => {
    const image = webcamRef.current.getScreenshot();
    setImageSrc(image);
  }, [webcamRef]);

  // Set constraints for back camera
  const videoConstraints = {
    facingMode: "environment" // Use "environment" for the rear camera
  };

  return (
    <div className="webcam-container">
      {/* Webcam component with video constraints */}
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints} // Applying constraints for the back camera
        style={{ width: '100%' }}
      />
      <button onClick={capture}>Capture Photo</button>

      {/* Display the captured image */}
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
