import { useRoutes } from "react-router-dom";
import { MainPage } from "pages/main";
import { FaqPage } from "pages/faq";
import { MainLayout } from "layouts/MainLayout";
import { AboutUsPage } from "pages/about-us";
import { PATH_PAGE } from "shared/config";
import { RegisterPage } from "pages/register";
import { UserProfilePage } from "pages/user-profile";
import { ExchangeProfilePage } from "pages/exchange-profile";

const Router = () => {
  return useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: PATH_PAGE.root,
          element: <MainPage />,
        },
        { path: PATH_PAGE.faq, element: <FaqPage /> },
        { path: PATH_PAGE.about, element: <AboutUsPage /> },
        { path: PATH_PAGE.register, element: <RegisterPage /> },
        { path: PATH_PAGE.userProfile, element: <UserProfilePage /> },
        { path: PATH_PAGE.exchangeProfile, element: <ExchangeProfilePage /> },
      ],
    },
  ]);
};

export default Router;
