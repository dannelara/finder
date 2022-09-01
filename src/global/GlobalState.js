import React, { useState, useEffect } from "react";

export const GlobalStateContext = React.createContext(null);

const GlobalState = ({ children }) => {
  const state = {};
  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
