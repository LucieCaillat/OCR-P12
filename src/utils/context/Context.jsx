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
  const [averageSessions, setAverageSessions] = useState([]);
  const [performance, setPerformance] = useState([]);

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

  useEffect(() => {
    async function myAverageSessions() {
      const averageSessions = await getData(userID, "average-sessions");
      setAverageSessions(averageSessions.sessions);
    }
    myAverageSessions();
  }, [userID]);

  useEffect(() => {
    async function myPerformance() {
      const performance = await getData(userID, "performance");
      setPerformance(performance.data);
    }
    myPerformance();
  }, [userID]);

  return (
    <DataContext.Provider
      value={{ user, sessions, averageSessions, performance }}
    >
      {children}
    </DataContext.Provider>
  );
}
