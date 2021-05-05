import React, { useState, useEffect, useRef } from "react";
import { Alert } from "react-native";
import CameraPresenter from "./CameraPresenter";
import { Camera } from "expo-camera";
import * as Permissions from "expo-permissions";

const CameraContainer = () => {
  const [toggleMode, setToggleMode] = useState("small");
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  const toggleStampMode = (prop) => {
    setToggleMode(prop);
  };

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      const { _status } = await Permissions.askAsync(Permissions.CAMERA);
      const { __status } = await Permissions.askAsync(
        Permissions.MEDIA_LIBRARY
      );
      setHasPermission(status === "granted");
    })();
  }, []);

  useEffect(() => {
    console.log("토글실행");
  }, [toggleMode]);

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
