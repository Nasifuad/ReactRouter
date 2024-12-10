/* eslint-disable react/prop-types */
import { useState } from "react";
import { Context } from "./Context";

const UserContext = ({ children }) => {
  const [user, setUser] = useState("nasif");
  const names = [
    { name: "nasif" },
    { name: "khan" },
    { name: "ali" },
    { name: "ahmed" },
  ];
  const setUserName = (name) => {
    setUser(name);
  };
  return (
    <Context.Provider value={{ user, names, setUserName }}>
      {children}
    </Context.Provider>
  );
};

export default UserContext;
