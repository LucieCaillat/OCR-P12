//import logoZen from "../../assets/logo-zen.svg";
import styled from "styled-components";
import DailyActivityGraph from "./DailyActivityGraph";

export default function Dashboard() {
  const DashboardDiv = styled.div``;
  const DailyActivityGraphDiv = styled.div`
    width: 835px;
    height: 320px;
    background-color: #fbfbfb;
  `;
  return (
    <DashboardDiv>
      <DailyActivityGraphDiv>
        <DailyActivityGraph />
      </DailyActivityGraphDiv>
    </DashboardDiv>
  );
}
