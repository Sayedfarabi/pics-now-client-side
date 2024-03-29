import { createBrowserRouter } from "react-router-dom";
import AdminRoute from "../admin-route/AdminRoute";
import ErrorPage from "../components/ErrorPage";
import Root from "../layout/Root";
import AddService from "../pages/add-services/AddService";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import MyReviews from "../pages/my-reviews/MyReviews";
import ServiceDetails from "../pages/service-details/ServiceDetails";
import Services from "../pages/services/Services";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "../private-route/PrivateRoute";
import { getDataToDb } from "./getDataToDb";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
        loader: getDataToDb,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/service/:id",
                element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
                loader: async ({ params }) => await fetch(`https://pics-now-server-side.vercel.app/service/${params.id}`, {
                    headers: {
                        "content-type": "application/json",
                        authorization: `bearer ${localStorage.getItem('picsNow')}`
                    }
                })
            },
            {
                path: "/my-reviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/add-service",
                element: <PrivateRoute><AdminRoute><AddService></AddService></AdminRoute></PrivateRoute>
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>
            },
            {
                path: "signUp",
                element: <SignUp></SignUp>
            }
        ]
    }
])