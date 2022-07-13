import HomePage from "../pages/Main/HomePage";
import Location from "../pages/Location/Location";
import Rooms from "../pages/Rooms/Rooms";
import Reservation from "../pages/Reservation/Reservation";
import MyReservation from "../pages/MyReservation/MyReservation";
import Contact from "../pages/Contact/Contact";

export const siteMap = {
  HomePage: {
    labelKey: "homePage",
    path: "/",
    description: "Home Page",
    component: <HomePage />,
  },
  RoomsPage: {
    labelKey: "rooms",
    path: "/rooms",
    description: "Page with info about the different rooms",
    component: <Rooms />,
  },
  Location: {
    labelKey: "location",
    path: "/location",
    description: "Page with info about the location",
    component: <Location />,
  },
  Contact: {
    labelKey: "contact",
    path: "/contact",
    description: "Page with contact info",
    component: <Contact />,
  },
  Book: {
    path: "/book",
    description: "Page to start a booking",
    component: <Reservation />,
  },
  MyReservation: {
    path: "/my-reservation",
    description: "Page to see your booking",
    component: <MyReservation />,
  },
};

// Defines which elements have to be in the navbar
export const navItems = [
  siteMap.HomePage,
  siteMap.RoomsPage,
  siteMap.Location,
  siteMap.Contact,
];
