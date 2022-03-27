import React from "react";

export const AppContext = React.createContext({
  values: {},
  setValues: (values: any) => {},
});