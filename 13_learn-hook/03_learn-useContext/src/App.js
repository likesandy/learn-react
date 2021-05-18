import React, { createContext, useContext } from "react";

const UserContext = createContext();
const ThemeContext = createContext();

const Home = () => {
  const user = useContext(UserContext);
  const theme = useContext(ThemeContext);

  return (
    <div>
      <h2
        style={{ fontSize: theme.fontSize, color: theme.color }}
      >{`姓名:${user.name}年龄:${user.age}`}</h2>
    </div>
  );
};
const App = () => {
  return (
    <div>
      <UserContext.Provider value={{ name: "codertao", age: 19 }}>
        <ThemeContext.Provider value={{ color: "red", fontSize: "30px" }}>
          <Home />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default App;
