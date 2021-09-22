import React, { useEffect, useState } from "react";
import styled from "styled-components";
import styles from "../styles/styles";
import JIDONPACDOMIMAGE from "../assets/together.png";
import constants from "../styles/constants";

const View = styled.View`
  flex: 1;
`;

const TopBox = styled.View`
  top: 16px;
  flex-direction: row;
  position: relative;
  width: ${constants.width};
  height: ${Math.round(constants.height / 2)};

  justify-content: center;
`;
const SmallTogetherImage = styled.Image`
  position: absolute;
  left: 20px;
  width: 80px;
  height: 80px;
`;

const TextBox = styled.View`
  align-items: center;
`;

const TextDiv = styled.View`
  justify-content: center;
  align-items: center;
  padding-top: 16px;
`;
const TopText = styled.Text`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${styles.whiteColor};
  font-size: 20px;
`;

const BottomBox = styled.View`
  position: absolute;
  bottom: 16px;
  align-items: center;
  width: ${constants.width};
`;
const YearMonthText = styled.Text`
  font-weight: bold;
  color: ${styles.whiteColor};
  font-size: 22px;
`;
const TimeText = styled.Text`
  font-weight: bold;
  color: ${styles.whiteColor};
  font-size: 34px;
`;

function SmallMark() {
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
        <SmallTogetherImage source={JIDONPACDOMIMAGE} resizeMode="contain" />
        <TextBox>
          <TextDiv>
            <TopText>지도니 & 딱뽕이</TopText>
            <TopText>운동스탬프</TopText>
          </TextDiv>
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
