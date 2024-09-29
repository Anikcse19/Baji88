import { createBrowserRouter } from "react-router-dom";

import CasinoPage from "../pages/CasinoPage";
import HomePage from "../pages/HomePage";
import SportsPage from "../pages/Sports";
import RegistrationPage from "../pages/RegistrationPage";
import Login from "../pages/Login";
import RegistrationPageMobile from "../pages/RegistrationPageMobile";
import DBDeposite from "../pages/dashboard/DBDeposite";
import ProfilePage from "../pages/dashboard/ProfilePage";
import SlotPgae from "../pages/SlotPage";
import TablePage from "../pages/TablePage";
import FishingPage from "../pages/FishingPage";
import CrashPage from "../pages/CrashPage";
import ArcadePage from "../pages/ArcadePage";
import LotteryPage from "../pages/LotteryPage";
import DBWithdraw from "../pages/dashboard/DBWithdraw";

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
    path: "/slot",
    element: <SlotPgae />,
  },
  {
    path: "/table",
    element: <TablePage />,
  },
  {
    path: "/fishing",
    element: <FishingPage />,
  },
  {
    path: "/crash",
    element: <CrashPage />,
  },
  {
    path: "/arcade",
    element: <ArcadePage />,
  },
  {
    path: "/lottery",
    element: <LotteryPage />,
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
    path: "/profile",
    element: <ProfilePage />,
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
    path: "/sign-up",
    element: <RegistrationPageMobile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default routes;
