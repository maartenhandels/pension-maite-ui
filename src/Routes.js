import React from "react";

import {
  BrowserRouter,
  Routes as ReactRoutes,
  Route,
  Navigate,
} from "react-router-dom";
import Main from "./pages/Main/Main";
import Location from "./pages/Location/Location";
import Rooms from "./pages/Rooms/Rooms";

export const siteMap = {
  HomePage: {
    title: "Inicio",
    path: "/",
    description: "Home Page",
    component: <Main />,
  },
  RoomsPage: {
    title: "Habitaciones",
    path: "/rooms",
    description: "Page with info about the different rooms",
    component: <Rooms />,
  },
  Location: {
    title: "Ubicación",
    path: "/location",
    description: "Page with info about the location",
    component: <Location />,
  },
  Contact: {
    title: "Contacto",
    path: "/contact",
    description: "Page with contact info",
    component: <Location />,
  },
};

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {Object.keys(siteMap).map((key) => (
          <Route path={siteMap[key].path} element={siteMap[key].component} />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
