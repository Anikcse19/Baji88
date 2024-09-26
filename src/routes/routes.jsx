import { createBrowserRouter } from "react-router-dom";

import CasinoPage from "../pages/CasinoPage";
import HomePage from "../pages/HomePage";
import SportsPage from "../pages/Sports";
import ProfilePage from "../pages/dashboard/ProfilePage";
import RegistrationPage from "../pages/RegistrationPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/casino",
    element: <CasinoPage />,
  },
  {
    path: "/sports",
    element: <SportsPage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },

  {
    path: "/registration",
    element: <RegistrationPage />,
  },
]);

export default routes;
