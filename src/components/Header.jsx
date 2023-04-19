import styled from "styled-components";
import colors from "../utils/style/colors";
import logo from "../assets/logo.png";

const HeaderDiv = styled.nav`
  width: 100%;
  height: 91px;
  background: ${colors.backgroundNav};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Logo = styled.img`
  height: 60px;
  position: relative;
  right: 89px;
`;
const List = styled.ul`
  width: 70%;
  display: flex;
  justify-content: space-between;
  color: ${colors.secondaryFontColor};
  font-size: 24px;
  padding: 0;
  margin-right: 87px;
  & li {
    list-style-type: none;
  }
`;

export default function Header() {
  return (
    <HeaderDiv>
      <Logo src={logo} alt="portSee" />
      <List>
        <li>Accueil</li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </List>
    </HeaderDiv>
  );
}
