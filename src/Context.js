import { createContext, useReducer } from "react";

export const ThemeContext = createContext();
const INITIAL_STATE = { darkmode: true };

const themeReducer = (state, actions) => {
  switch (actions.type) {
    case "TOGGLE":
      return { darkmode: !state.darkmode };
    default:
      return state;
  }
};

export const ThemeProvider = (props) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
