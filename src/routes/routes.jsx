import { createBrowserRouter } from "react-router-dom";

import CasinoPage from "../pages/CasinoPage";
import HomePage from "../pages/HomePage";
import SportsPage from "../pages/Sports";
import RegistrationPage from "../pages/RegistrationPage";
import Login from "../pages/Login";
import RegistrationPageMobile from "../pages/RegistrationPageMobile";
import DBDeposite from "../pages/dashboard/DBDeposite";
import SlotPgae from "../pages/SlotPage";
import TablePage from "../pages/TablePage";
import FishingPage from "../pages/FishingPage";
import CrashPage from "../pages/CrashPage";
import ArcadePage from "../pages/ArcadePage";
import LotteryPage from "../pages/LotteryPage";
import DBWithdraw from "../pages/dashboard/DBWithdraw";
import DBProfile from "../pages/dashboard/DBProfile";
import DBChangePassword from "../pages/dashboard/DBChangePassword";
import DBInbox from "../pages/dashboard/DBInbox";

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
    path: "/withdraw",
    element: <DBWithdraw />,
  },
  {
    path: "/profile",
    element: <DBProfile />,
  },
  {
    path: "/change-password",
    element: <DBChangePassword />,
  },
  {
    path: "/inbox",
    element: <DBInbox />,
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
