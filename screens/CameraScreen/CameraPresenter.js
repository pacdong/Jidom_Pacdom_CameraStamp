import React, { useEffect } from "react";
import styled from "styled-components";
import BigMark from "../../components/BigMark";
import SmallMark from "../../components/SmallMark";
import constants from "../../styles/constants";
import styles from "../../styles/styles";
import { Ionicons } from "@expo/vector-icons";

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
  background-color: yellowgreen;
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

function CameraPresenter({
  toggleStampMode = () => null,
  toggleMode,
  Camera,
  changeCamera,
  type,
}) {
  useEffect(() => {
    console.log(toggleMode);
  }, [toggleMode]);
  return (
    <SafeAreaView>
      <View>
        <ToggleBox>
          <Touch onPress={() => toggleStampMode("small")}>
            <Text active={toggleMode === "small" && true}>작은 스탬프</Text>
          </Touch>
          <Touch onPress={() => toggleStampMode("big")}>
            <Text active={toggleMode === "big" && true}>큰 스탬프</Text>
          </Touch>
        </ToggleBox>
        <CameraView>
          <Camera
            style={{ width: constants.width, height: constants.width }}
            type={type}
          >
            {toggleMode === "small" ? <SmallMark /> : <BigMark />}
          </Camera>
        </CameraView>
        <Bottom>
          <ShallButton>
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
