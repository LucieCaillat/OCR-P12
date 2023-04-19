import styled from "styled-components";
import logoZen from "../assets/logo-zen.svg";
import logoSwim from "../assets/logo-swim.svg";
import logoRide from "../assets/logo-ride.svg";
import logoForce from "../assets/logo-force.svg";
import colors from "../utils/style/colors";
import SquareIcon from "./SquareIcon";

const icons = [
  { name: "Meditation", img: logoZen },
  { name: "Nage", img: logoSwim },
  { name: "Velo", img: logoRide },
  { name: "Musculation", img: logoForce },
];

const StyledSidNav = styled.div`
  width: 117px;
  height: 100vh;
  background: ${colors.backgroundNav};
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  & .sport-box {
    margin-bottom: 16vh;
  }
  & p {
    color: white;
    font-size: 12px;
    writing-mode: sideways-lr;
    margin-bottom: 59px;
  }
`;
export default function SideNav() {
  return (
    <StyledSidNav>
      <div className="sport-box">
        {icons.map((icon) => (
          <SquareIcon
            color={colors.secondaryFontColor}
            size={"64px"}
            icon={icon}
            key={icon.name}
          />
        ))}
      </div>
      <p>Copiryght, SportSee 2020</p>
    </StyledSidNav>
  );
}
