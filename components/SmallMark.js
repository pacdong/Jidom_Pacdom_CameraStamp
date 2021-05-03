import React from "react";
import styled from "styled-components";
import styles from "../styles/styles";
import JIDONPACDOMIMAGE from "../assets/together.png";

const View = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const TopBox = styled.View`
  position: absolute;
  top: 16px;
  left: 16px;
  flex-direction: row;
`;
const Image = styled.Image`
  width: 80px;
  height: 140px;
`;

const TextBox = styled.View`
  margin-left: 8px;
`;
const TopText = styled.Text`
  font-weight: bold;
  color: ${styles.whiteColor};
  font-size: 22px;
`;

const BottomBox = styled.View`
  position: absolute;
  bottom: 16px;
  align-items: center;
  justify-content: center;
`;
const YearMonthText = styled.Text`
  font-weight: bold;
  color: ${styles.whiteColor};
  font-size: 32px;
  text-align: center;
`;
const TimeText = styled.Text`
  font-weight: bold;
  color: ${styles.whiteColor};
  font-size: 54px;
  text-align: center;
`;

function SmallMark() {
  const yearDate = new Date().getFullYear();
  const monthDate = new Date().getMonth();
  const dayDate = new Date().getDay();

  const hourDate = new Date().getHours();
  const minutesDate = new Date().getMinutes();

  return (
    <View>
      <TopBox>
        <Image source={JIDONPACDOMIMAGE} resizeMode="contain" />
        <TextBox>
          <TopText>지도니와</TopText>
          <TopText> 딱뽕이의 운동스탬프</TopText>
        </TextBox>
      </TopBox>
      <BottomBox>
        <YearMonthText>
          {yearDate}. {monthDate}. {dayDate}
        </YearMonthText>
        <TimeText>
          {hourDate < 12 ? "AM" : "PM"} {hourDate} :{" "}
          {minutesDate < 10 ? `0${minutesDate}` : minutesDate}
        </TimeText>
      </BottomBox>
    </View>
  );
}

export default React.memo(SmallMark);
