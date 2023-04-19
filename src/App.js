import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Dashboard from "./components/dashboard/Dashboard";
import styled from "styled-components";
import { useEffect, useState } from "react";
import getUser from "./services/api";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    font-size: 15px;
  }
  *{box-sizing: border-box;}
`;

const AppDiv = styled.div`
  width: 100vw;
  display: flex;
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export default function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    async function myUser() {
      const user = await getUser(18);
      setUser(user);
    }
    myUser();
  }, [setUser]);
  console.log(user);
  return (
    <AppDiv>
      <GlobalStyle />
      <SideNav />
      <Main>
        <Header />
        <Dashboard />
      </Main>
    </AppDiv>
  );
}
