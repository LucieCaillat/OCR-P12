import styled from "styled-components";
import colors from "../../utils/style/colors";
import SquareIcon from "../SquareIcon";
import logoCalorie from "../../assets/logo-calorie.svg";
import logoProt from "../../assets/logo-prot.svg";
import logoGlu from "../../assets/logo-glu.svg";
import logoLip from "../../assets/logo-lip.svg";
import PropTypes from "prop-types";

const typeFigure = {
  calorie: {
    name: "Calories",
    img: logoCalorie,
    color: "rgba(255, 0, 0, 0.1)",
  },
  protein: {
    name: "Proteines",
    img: logoProt,
    color: "rgba(74, 184, 255, 0.1)",
  },
  carbohydrate: {
    name: "Glucides",
    img: logoGlu,
    color: "rgba(249, 206, 35, 0.1)",
  },
  lipid: { name: "Lipides", img: logoLip, color: "rgba(253, 81, 129, 0.1)" },
};

const StyledKeyFiguresCard = styled.div`
  width: 100%;
  height: 22%;
  background-color: ${colors.backgroundItems};
  border-radius: 5px;
  display: flex;
  align-items: center;
  padding-left: 12%;
  & p {
    margin-left: 9%;
    & .figure {
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
    }
    & .name {
      font-size: 14px;
      color: ${colors.greyFontColor};
    }
  }
`;

export default function KeyFiguresCard({ type, data }) {
  const typeData = typeFigure[type];
  const isCalorie = type === "calorie";
  return (
    <StyledKeyFiguresCard>
      <SquareIcon
        color={typeData.color}
        size={"60px"}
        icon={{ name: typeData.name, img: typeData.img }}
      />
      <p>
        <span className="figure">
          {data}
          {isCalorie ? "kCal" : "g"}
        </span>
        <br />
        <span className="name">{typeData.name}</span>
      </p>
    </StyledKeyFiguresCard>
  );
}

KeyFiguresCard.propTypes = {
  type: PropTypes.string,
  data: PropTypes.number,
};
