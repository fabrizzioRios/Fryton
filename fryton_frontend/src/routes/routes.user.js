import {AdminLayout} from "../layouts";
import {AboutUser, LearnCode, RunCode, UserHome} from "../pages/User";

const routesUser = [
    {
        path: "/fryton",
        layout: AdminLayout,
        component: UserHome,
    },
    {
        path: "/fryton/about",
        layout: AdminLayout,
        component: AboutUser,
    },
    {
        path: "/fryton/run",
        layout: AdminLayout,
        component: RunCode,
    },
    {
        path: "/fryton/learn",
        layout: AdminLayout,
        component: LearnCode,
    },
];

export default routesUser;