import { useState, useEffect, useContext, createContext } from "react";

const WindowContext = createContext();

export const WindowContextProvider = ({ children }) => {
  const [state, setState] = useState();
  useEffect(() => {
    // run once only when window is loaded
    console.log("mounted");
    setState(5);
    return () => {
      console.log("will unmount");
    };
  }, []);

  return (
    <WindowContext.Provider value={state}>{children}</WindowContext.Provider>
  );
};

export const useWindowContext = () => useContext(WindowContext);
