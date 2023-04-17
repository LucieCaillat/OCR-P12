import styled from "styled-components";
import logo from "../assets/logo.png";

const HeaderDiv = styled.nav`
  width: 100%;
  height: 91px;
  background: #020203;
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
  color: white;
  font-size: 24px;
  padding: 0;
  margin-right: 87px;
`;
const Li = styled.li`
  list-style-type: none;
`;

export default function Header() {
  return (
    <HeaderDiv>
      <Logo src={logo} alt="portSee" />
      <List>
        <Li>Accueil</Li>
        <Li>Profil</Li>
        <Li>Réglage</Li>
        <Li>Communauté</Li>
      </List>
    </HeaderDiv>
  );
}
