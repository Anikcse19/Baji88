import { createBrowserRouter } from "react-router-dom";

import CasinoPage from "../pages/CasinoPage";
import HomePage from "../pages/HomePage";
import SportsPage from "../pages/Sports";
import RegistrationPage from "../pages/RegistrationPage";
import Login from "../pages/Login";
import DBDeposite from "../pages/dashboard/DBDeposite";
import DBWithdraw from "../pages/dashboard/DbWithdraw";

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
    path: "/deposit",
    element: <DBDeposite />,
  },

  {
    path: "/withdraw",
    element: <DBWithdraw />,
  },

  {
    path: "/registration",
    element: <RegistrationPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
