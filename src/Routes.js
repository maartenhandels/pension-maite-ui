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
import Reservation from "./pages/Reservation/Reservation";

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
  Book: {
    title: "Reservar",
    path: "/book",
    description: "Page to start a booking",
    component: <Reservation />,
  },
};

// Defines which elements have to be in the navbar
export const navItems = [
  siteMap.HomePage,
  siteMap.RoomsPage,
  siteMap.Location,
  siteMap.Contact,
];

const Routes = () => {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {Object.keys(siteMap).map((key, index) => (
          <Route
            key={index}
            path={siteMap[key].path}
            element={siteMap[key].component}
          />
        ))}
        <Route path="*" element={<Navigate to="/" replace />} />
      </ReactRoutes>
    </BrowserRouter>
  );
};

export default Routes;
