import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "../styles/styles";
import JIDONPACDOMIMAGE from "../assets/together.png";
import constants from "../styles/constants";

const View = styled.View`
  flex: 1;
`;

const TopBox = styled.View`
  /* position: absolute; */
  left: 16px;
  flex-direction: row;
`;
const Image = styled.Image`
  width: ${constants.width * 0.44};
  height: ${constants.width};
`;

const TextBox = styled.View`
  margin-left: 0px;
  margin-top: 16px;
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
  width: ${constants.width};
`;
const YearMonthText = styled.Text`
  font-weight: bold;
  color: ${styles.whiteColor};
  font-size: 32px;
`;
const TimeText = styled.Text`
  font-weight: bold;
  color: ${styles.whiteColor};
  font-size: 54px;
`;

function BigMark() {
  const [timeDate, setTimeDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      const newTimeDate = new Date();
      if (timeDate.getMinutes() !== newTimeDate.getMinutes()) {
        return setTimeDate(newTimeDate);
      }
    }, 30000);
  }, [timeDate]);

  const yearDate = timeDate.getFullYear();
  const monthDate = timeDate.getMonth() + 1;
  const dayDate = timeDate.getDate();

  const hourDate = timeDate.getHours();
  const minutesDate = timeDate.getMinutes();

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

export default React.memo(BigMark);
