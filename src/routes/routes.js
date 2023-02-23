import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Root from "../layout/Root";
import AddService from "../pages/add-services/AddService";
import Blog from "../pages/blog/Blog";
import Home from "../pages/home/Home";
import Services from "../pages/services/Services";
import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";

export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage></ErrorPage>,
        element: <Root></Root>,
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
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/add-service",
                element: <AddService></AddService>
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