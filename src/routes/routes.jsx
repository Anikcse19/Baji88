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

import DBPromotion from "../pages/dashboard/DBPromotion";
import DBMyReferral from "../pages/dashboard/DBMyReferral";
import BettingHistory from "../pages/dashboard/BettingHistory";

import VipPointsExchange from "../pages/dashboard/VipPointsExchange";
import VipHistory from "../pages/dashboard/VipHistory";
import VPReceived from "../pages/dashboard/VPReceived";
import VPUsed from "../pages/dashboard/VPUsed";
import VipDetails from "../pages/dashboard/VipDetails";
import Deposite from "../pages/dashboard/Deposite";
import Withdraw from "../pages/dashboard/Withdraw";
import MemberProfile from "../pages/MemberProfile";
import CasinoPageMobile from "../pages/mobile/CasinoPageMobile";
import SlotsPageMobile from "../pages/mobile/SlotsPageMobile";
import TablesPageMobile from "../pages/mobile/TablesPageMobile";
import CrashPageMobile from "../pages/mobile/CrashPageMobile";
import FishingPageMobile from "../pages/mobile/FishingPageMobile";
import ArcadePageMobile from "../pages/mobile/ArcadePageMobile";
import LottryPageMobile from "../pages/mobile/LotteryPageMobile";
import PromotionPage from "../pages/PromotionPage";
import VIPPage from "../pages/VIPPage";
import RefferalPage from "../pages/RefferalPage";
import Turnover from "../pages/dashboard/Turnover";
import TransactionRecords from "../pages/dashboard/TransactionRecords";
import Promotions from "../pages/dashboard/Promotions";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/member-center/profile",
    element: <MemberProfile />,
  },
  {
    path: "/member-center/deposite",
    element: <Deposite />,
  },
  {
    path: "/member-center/withdraw",
    element: <Withdraw />,
  },
  {
    path: "/casino",
    element: <CasinoPage />,
  },
  {
    path: "/mcasino",
    element: <CasinoPageMobile />,
  },

  {
    path: "/slot",
    element: <SlotPgae />,
  },
  {
    path: "/mslots",
    element: <SlotsPageMobile />,
  },
  {
    path: "/table",
    element: <TablePage />,
  },
  {
    path: "/mtable",
    element: <TablesPageMobile />,
  },
  {
    path: "/fishing",
    element: <FishingPage />,
  },
  {
    path: "/mfishing",
    element: <FishingPageMobile />,
  },
  {
    path: "/crash",
    element: <CrashPage />,
  },
  {
    path: "/mcrash",
    element: <CrashPageMobile />,
  },
  {
    path: "/arcade",
    element: <ArcadePage />,
  },
  {
    path: "/marcade",
    element: <ArcadePageMobile />,
  },
  {
    path: "/lottery",
    element: <LotteryPage />,
  },
  {
    path: "/mlottery",
    element: <LottryPageMobile />,
  },
  {
    path: "/sports",
    element: <SportsPage />,
  },
  {
    path: "/promotional",
    element: <PromotionPage />,
  },
  {
    path: "/vip",
    element: <VIPPage />,
  },
  {
    path: "/refferel",
    element: <RefferalPage />,
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
    path: "/vip-points-exchange",
    element: <VipPointsExchange />,
  },
  {
    path: "/vip-history",
    element: <VipHistory />,
  },
  {
    path: "/vip-points-records/received",
    element: <VPReceived />,
  },
  {
    path: "/vip-points-records/used",
    element: <VPUsed />,
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
    path: "/user-panel/betting-history",
    element: <BettingHistory />,
  },
  {
    path: "/user-panel/turnover",
    element: <Turnover />,
  },
  {
    path: "/user-panel/transaction-records",
    element: <TransactionRecords />,
  },
  {
    path: "/user-panel/promotion",
    element: <Promotions />,
  },

  {
    path: "/referral-program/promotion",
    element: <DBPromotion />,
  },
  {
    path: "/referral-program/details",
    element: <DBMyReferral />,
  },
  {
    path: "/vip-detail",
    element: <VipDetails />,
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
