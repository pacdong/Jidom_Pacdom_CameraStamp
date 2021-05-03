import React, { useState } from "react";
import CameraPresenter from "./CameraPresenter";

const CameraContainer = () => {
  const [toggleMode, setToggleMode] = useState("big");

  const toggleStampMode = (prop) => {
    setToggleMode(prop);
  };

  return (
    <CameraPresenter
      toggleStampMode={toggleStampMode}
      toggleMode={toggleMode}
    />
  );
};

export default CameraContainer;
