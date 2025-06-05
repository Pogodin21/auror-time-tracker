import {Route, Routes } from "react-router-dom";
import { routeConfig } from "../config/routeConfig";

export const AppRouter = () => {
  return (
    
      <Routes>
        {routeConfig.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>

  );
};
