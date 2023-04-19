import styled from "styled-components";
import colors from "../../utils/style/colors";
import DailyActivityGraph from "./DailyActivityGraph";

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
    background-color: purple;
    width: 23%;
    height: 100%;
  }
`;

const DailyActivityGraphBox = styled.div`
  width: 100%;
  height: 31vh;
  font-size: 14px;
  background-color: ${colors.backgroundItems};
  border-radius: 5px;
`;

const SquarelBox = styled.div`
  width: 31%;
  height: 25.6vh;
  border-radius: 5px;
  background-color: ${({ color }) => color};
`;

export default function Dashboard() {
  return (
    <DashboardDiv>
      <h1>
        Bonjour <span>Thomas</span>
      </h1>
      <h2>Félicitation ! Vous avez explosé vos objectifs hier 👏 </h2>
      <FiguresBox>
        <div className="graph-box">
          <DailyActivityGraphBox>
            <DailyActivityGraph />
          </DailyActivityGraphBox>
          <div className="bottom-part">
            <SquarelBox color={colors.graph.backgroundred}></SquarelBox>
            <SquarelBox color={colors.graph.darkGrey}></SquarelBox>
            <SquarelBox color={colors.backgroundItems}></SquarelBox>
          </div>
        </div>
        <div className="key-figures"></div>
      </FiguresBox>
    </DashboardDiv>
  );
}
