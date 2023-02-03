import React, { createContext } from "react";

const DashboardContext = createContext();

export function useDashboard() {
  return useContext(DashboardContext);
}

const DashboardProvider = ({ children }) => {
  return <div>DashboardProvider</div>;
};

export default DashboardProvider;
