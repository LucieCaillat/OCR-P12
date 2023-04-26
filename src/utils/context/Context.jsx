import { createContext, useState, useEffect } from "react";
import getUser from "../../services/api";

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

  useEffect(() => {
    async function myUser() {
      const user = await getUser(userID);
      setUser(user);
    }
    myUser();
  }, [userID]);

  return (
    <DataContext.Provider value={{ user }}>{children}</DataContext.Provider>
  );
}
