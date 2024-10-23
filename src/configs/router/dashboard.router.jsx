import { DashboardLayout } from "../../app/layout/Dashboard";
import { MyFavoriteCourses } from "../../components/Dashboard/Dashboard Pages/Favorites/MyFavoriteCourses";
import { MyFavoriteArticles } from "../../components/Dashboard/Dashboard Pages/Favorites/MyFavoritesArticles";
import { MyArticleComments } from "../../components/Dashboard/Dashboard Pages/My Comments/MyArticleComments";
import { MyCourseComments } from "../../components/Dashboard/Dashboard Pages/My Comments/MyCourseComments";
import { ChangePassword } from "../../pages/Dashboard/Change Password";
import { Counter } from "../../pages/Dashboard/Counter";
import { EditProfile } from "../../pages/Dashboard/Edit Profile";
import { Favorites } from "../../pages/Dashboard/Favorites";
import { MyComments } from "../../pages/Dashboard/My Comments";
import { MyCourses } from "../../pages/Dashboard/My Courses";
import { ReservedCourses } from "../../pages/Dashboard/Reserved Courses";

export const dashboard = {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
        {
            path: "/dashboard/user-overview",
            element: <Counter />
        },
        {
            path: "/dashboard/edit-profile",
            element: <EditProfile />
        },
        {
            path: "/dashboard/my-courses",
            element: <MyCourses />
        },
        {
            path: "/dashboard/reserved-courses",
            element: <ReservedCourses />
        },
        {
            path: "/dashboard/favorites",
            element: <Favorites />,
        },
        {
            path: "/dashboard/my-comments",
            element: <MyComments />,
        },
        {
            path: "/dashboard/change-password",
            element: <ChangePassword />
        },
    ]
}