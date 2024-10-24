import App from "../../app";
import { MainPagesLayout } from "../../app/layout/Main Pages";
import AboutUsPage from "../../pages/About Us/AboutUsPage";
import NewsList from "../../pages/BlogList/newsList";
import CourseDetails from "../../pages/CourseDetails/CourseDetails";
import CoursesList from "../../pages/CoursesList";
import Error from "../../pages/Error Page/Error";
import Landing from "../../pages/Landing/Landing";
import NewsDetails from "../../pages/newsDetails/NewsDetails";

export const mainPage = {
  path: "/",
  element: <MainPagesLayout />,
  children: [
    {
      index: true,
      path: "/",
      element: <Landing />,
    },
    {
      path: "/course-list",
      element: <CoursesList />,
    },

    {
      path: "/course-details/:courseId",
      element: <CourseDetails />,
    },

    {
      path: "/news-list",
      element: <NewsList />,
    },

    {
      path: "/news-details/:id",
      element: <NewsDetails />,
    },

    {
      path: "/AboutUs",
      element: <AboutUsPage />,
    },

    // {
    //   path: "*",
    //   element: <Error />,
    // },
  ],
};
