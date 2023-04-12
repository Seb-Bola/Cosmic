import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(() => {
  //   const storedUser = JSON.parse(window.sessionStorage.getItem("storedUser"));
  //   {
  //     if (storedUser) {
  //       return storedUser;
  //     } else {
  //       return null;
  //     }
  //   }
  // });
  const storedUser = JSON.parse(window.sessionStorage.getItem("storedUser"));
  const [currentUser, setCurrentUser] = useState(storedUser);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};
