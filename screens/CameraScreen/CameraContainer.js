import React, { useState, useEffect } from "react";
import { Alert } from "react-native";
import CameraPresenter from "./CameraPresenter";
import { Camera } from "expo-camera";

const CameraContainer = () => {
  const [toggleMode, setToggleMode] = useState("big");
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const toggleStampMode = (prop) => {
    setToggleMode(prop);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null && hasPermission === false) {
    Alert.alert("알림", "카메라 권한을 설정해주세요.");
  }

  const changeCamera = () => {
    // console.log("실행");
    if (type === Camera.Constants.Type.back) {
      return setType(Camera.Constants.Type.front);
    } else if (type === Camera.Constants.Type.front) {
      return setType(Camera.Constants.Type.back);
    }
  };

  return (
    <CameraPresenter
      toggleStampMode={toggleStampMode}
      toggleMode={toggleMode}
      Camera={Camera}
      changeCamera={changeCamera}
      type={type}
    />
  );
};

export default CameraContainer;
