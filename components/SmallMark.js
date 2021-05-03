import React from "react";
import styled from "styled-components";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const Text = styled.Text``;

function SmallMark() {
  return (
    <View>
      <Text>SmallMark</Text>
    </View>
  );
}

export default React.memo(SmallMark);
