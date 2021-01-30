import React from "react";
import styled from "styled-components";
import styles from "../../styles/styles";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${styles.blackColor};
`;
const Text = styled.Text`
  color: ${styles.whiteColor};
`;

function CameraPresenter() {
  return (
    <View>
      <Text>카메라 프레젠터</Text>
    </View>
  );
}

export default CameraPresenter;
