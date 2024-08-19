import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotificationPage from "../pages/NotificationPage";
import SignInPage from "../pages/SignInPage";
import HelpPage from "../pages/HelpPage";
import AccountPage from "../pages/AccountPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/notifications",
    element: <NotificationPage />,
  },
  {
    path: "/sign-in",
    element: <SignInPage />,
  },
  {
    path: "/help",
    element: <HelpPage />,
  },
  {
    path: "/account",
    element: <AccountPage />,
  },
]);

export default router;
