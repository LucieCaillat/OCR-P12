import { createContext, useState, useEffect } from "react";
import getData from "../../services/api";

const userNull = {
  userInfos: {
    firstName: "",
    lastName: "",
  },
  todayScore: "",
  keyData: {
    calorieCount: "",
    proteinCount: "",
    carbohydrateCount: "",
    lipidCount: "",
  },
};

export const DataContext = createContext();

export function DataProvider({ children }) {
  const userID = window.location.pathname.replace(/\/user\//, "");
  const [user, setUser] = useState(userNull);
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    async function myUser() {
      const user = await getData(userID, "user");
      setUser(user);
    }
    myUser();
  }, [userID]);

  useEffect(() => {
    async function mySessions() {
      const sessions = await getData(userID, "activity");
      setSessions(sessions.sessions);
    }
    mySessions();
  }, [userID]);

  return (
    <DataContext.Provider value={{ user, sessions }}>
      {children}
    </DataContext.Provider>
  );
}
