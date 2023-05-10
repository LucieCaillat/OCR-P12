import styled from "styled-components";
import colors from "../utils/style/colors";
import DailyActivityGraph from "./onDashboard/DailyActivityGraph";
import KeyFiguresCard from "./onDashboard/KeyFiguresCard";
import AverageSessionsGraph from "./onDashboard/AverageSessionsGraph";
import ActivitiesGraph from "./onDashboard/ActivitiesGraph";
import ScoreGraph from "./onDashboard/ScoreGraph";
import { useContext } from "react";
import { DataContext } from "../utils/context/Context";
import PropTypes from "prop-types";

const DashboardDiv = styled.div`
  height: 100%;
  padding-left: 8%;
  padding-right: 6.8%;
  & h1 {
    margin: 0;
    padding-top: 6vh;
    margin-bottom: 4vh;
    font-size: 48px;
    font-weight: 500;
    & span {
      color: ${colors.primary};
    }
  }
  & h2 {
    font-size: 18px;
    font-weight: 400;
    margin: 0;
    margin-bottom: 7.5vh;
  }
`;
const FiguresBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 65.7%;
  & .graph-box {
    width: 74%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & .bottom-part {
      display: flex;
      justify-content: space-between;
    }
  }
  & .key-figures {
    width: 23%;
    max-width: 450px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const DailyActivityGraphBox = styled.div`
  width: 100%;
  height: 31vh;
  font-size: 14px;
  background-color: ${colors.backgroundItems};
  border-radius: 5px;
  & h3 {
    font-weight: 500;
    font-size: 15px;
    height: 0;
    position: relative;
    top: 24px;
    left: 32px;
  }
`;

const SquarelBox = styled.div`
  position: relative;
  width: 31%;
  height: 25.6vh;
  border-radius: 5px;
  background-color: ${({ color }) => color};
  font-size: 12px;
  & h3 {
    font-weight: 500;
    font-size: 15px;
    margin: 0;
  }
  & .average-session-title {
    width: 147px;
    margin-top: 2.8vh;
    margin-left: 13%;
    color: rgba(255, 255, 255, 0.4);
  }
  & .score-graph-title {
    height: 0;
    position: relative;
    top: 24px;
    left: 30px;
    color: ${colors.graph.darkTitle};
  }
  & .score-box {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;

    & .score {
      font-size: 16px;
      width: 70px;
      color: ${colors.graph.lightGrey};
      text-align: center;
      & span {
        font-size: 26px;
        color: ${colors.graph.darkTitle};
      }
    }
  }
`;

export default function Dashboard() {
  const { user } = useContext(DataContext);
  const score = user.score === undefined ? user.todayScore : user.score;

  return (
    <DashboardDiv>
      <h1>
        Bonjour <span>{user.userInfos.firstName}</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏 </h2>
      <FiguresBox>
        <div className="graph-box">
          <DailyActivityGraphBox>
            <h3>Activité quotidienne</h3>
            <DailyActivityGraph />
          </DailyActivityGraphBox>
          <div className="bottom-part">
            <SquarelBox color={colors.graph.backgroundred}>
              <h3 className="average-session-title">
                Durée moyenne des sessions
              </h3>
              <AverageSessionsGraph />
            </SquarelBox>
            <SquarelBox color={colors.graph.darkGrey}>
              <ActivitiesGraph />
            </SquarelBox>
            <SquarelBox color={colors.backgroundItems}>
              <div className="score-box">
                <p className="score">
                  <span>{score * 100}%</span> de votre objectif
                </p>
              </div>
              <h3 className="score-graph-title"> Score </h3>
              <ScoreGraph />
            </SquarelBox>
          </div>
        </div>
        <div className="key-figures">
          <KeyFiguresCard
            type={"calorie"}
            data={Number(user.keyData.calorieCount)}
          />
          <KeyFiguresCard
            type={"protein"}
            data={Number(user.keyData.proteinCount)}
          />
          <KeyFiguresCard
            type={"carbohydrate"}
            data={Number(user.keyData.carbohydrateCount)}
          />
          <KeyFiguresCard
            type={"lipid"}
            data={Number(user.keyData.lipidCount)}
          />
        </div>
      </FiguresBox>
    </DashboardDiv>
  );
}

SquarelBox.propTypes = {
  color: PropTypes.string,
};
