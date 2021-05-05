import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BigMark from "../../components/BigMark";
import SmallMark from "../../components/SmallMark";
import constants from "../../styles/constants";
import styles from "../../styles/styles";
import { Ionicons } from "@expo/vector-icons";
import ViewShot from "react-native-view-shot";
import * as MediaLibrary from "expo-media-library";
import { Alert, Platform } from "react-native";

const View = styled.View`
  flex: 1;
  background-color: ${styles.blackColor};
`;

const SafeAreaView = styled.SafeAreaView`
  flex: 1;
  background-color: ${styles.blackColor};
`;

const ToggleBox = styled.View`
  width: 100%;
  height: 66px;
  justify-content: center;
  flex-direction: row;
  margin-top: 40px;
`;

const Touch = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
`;

const Text = styled.Text`
  color: ${styles.whiteColor};
  font-size: 16px;
  ${(props) => props.active && `font-weight: bold; font-size: 18px;`}
`;

const CameraView = styled.View`
  width: ${constants.width};
  height: ${constants.width};
  /* position: relative; */
`;

const TempCameraView = styled.Image`
  width: ${constants.width};
  height: ${constants.width};
`;

const Bottom = styled.View`
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  flex-direction: row;
`;
const ChangeView = styled.View`
  position: absolute;
  right: 30px;
`;
const ChangeButton = styled.TouchableOpacity``;
const ShallButton = styled.TouchableOpacity`
  border: 2px solid ${styles.whiteColor};
  padding: 4px;
  border-radius: 100px;
`;
const ViewShotButton = styled.View`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  background-color: ${styles.whiteColor};
`;

const StampBox = styled.View`
  position: absolute;
  width: ${constants.width};
  height: ${constants.width};
`;

function CameraPresenter({
  toggleStampMode = () => null,
  toggleMode,
  Camera,
  changeCamera,
  type,
}) {
  const [tempURI, setTempURI] = useState("");
  const captureRef = useRef();
  const cameraRef = useRef();

  const getPhotoUri = async () => {
    console.log("겟포토 실행");
    const uri = await captureRef.current.capture();
    console.log("👂👂 Image saved to", uri);
    return uri;
  };

  const onCapture = async () => {
    console.log("캡쳐 실행");
    try {
      const uri = await getPhotoUri();
      await MediaLibrary.saveToLibraryAsync(uri);
      return Alert.alert("이미지가 저장되었습니다");
    } catch (e) {
      console.log("사진 저장에 실패했어요", e);
    } finally {
      setTempURI("");
    }
  };

  const takePhoto = async () => {
    try {
      const { uri } = await cameraRef.current.takePictureAsync({
        quality: 1,
      });
      if (uri) {
        await setTempURI(uri);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (tempURI !== "") {
      Alert.alert(
        "현재 사진을",
        "사진을 앨범에 저장하시겠어요?",
        [
          {
            text: "취소",
            onPress: () => setTempURI(""),
            style: "cancel",
          },
          {
            text: "동의하기",
            onPress: () => onCapture(),
          },
        ],
        { cancelable: false }
      );
    } else {
      return;
    }
  }, [tempURI]);

  return (
    <SafeAreaView>
      <View>
        <ToggleBox>
          <Touch onPress={() => toggleStampMode("small")}>
            <Text active={toggleMode === "small" && true}>작은 지동딱뽕</Text>
          </Touch>
          {Platform.OS === "ios" && (
            <Touch onPress={() => toggleStampMode("big")}>
              <Text active={toggleMode === "big" && true}>큰 지동딱뽕</Text>
            </Touch>
          )}
        </ToggleBox>

        {tempURI === "" ? (
          <CameraView>
            <Camera
              style={{
                width: constants.width,
                height: constants.width,
                flex: 1,
              }}
              ratio={"1:1"}
              type={type}
              ref={cameraRef}
            >
              {/* {toggleMode === "small" ? <SmallMark /> : <BigMark />} */}
              {toggleMode === "small" && <SmallMark />}
              {toggleMode === "big" && <BigMark />}
            </Camera>
          </CameraView>
        ) : (
          <ViewShot ref={captureRef} options={{ format: "jpg", quality: 0.9 }}>
            <CameraView>
              <TempCameraView source={{ uri: tempURI }} />
              <StampBox>
                {/* {toggleMode === "small" ? <SmallMark /> : <BigMark />} */}
                {toggleMode === "small" && <SmallMark />}
                {toggleMode === "big" && <BigMark />}
              </StampBox>
            </CameraView>
          </ViewShot>
        )}

        <Bottom>
          <ShallButton onPress={takePhoto}>
            <ViewShotButton />
          </ShallButton>
          <ChangeView>
            <ChangeButton onPress={changeCamera}>
              <Ionicons name="camera-reverse-outline" size={28} color="white" />
            </ChangeButton>
          </ChangeView>
        </Bottom>
      </View>
    </SafeAreaView>
  );
}

export default CameraPresenter;
