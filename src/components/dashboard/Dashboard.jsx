//import logoZen from "../../assets/logo-zen.svg";
import styled from "styled-components";
import DailyActivityGraph from "./DailyActivityGraph";

export default function Dashboard() {
  const DashboardDiv = styled.div`
    margin-left: 7.5vw;
  `;
  const DailyActivityGraphDiv = styled.div`
    width: 835px;
    height: 320px;
    background-color: #fbfbfb;
    font-size: 14px;
  `;
  return (
    <DashboardDiv>
      <h1>
        Bonjour <span>Thomas</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier </h2>
      <DailyActivityGraphDiv>
        <DailyActivityGraph />
      </DailyActivityGraphDiv>
    </DashboardDiv>
  );
}
