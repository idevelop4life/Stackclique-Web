import { createBrowserRouter } from "react-router-dom";
import Authentication from "./components/Layout/Authentication";
import { Login, OTP, SignUp, Home, AboutUs } from "./pages";
import AppLayout from "./components/Layout/applayout/AppLayout";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <AboutUs /> },
        ],
    },
    {
        element: <Authentication />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/sign-up", element: <SignUp /> },
            { path: "/verification", element: <OTP /> },
        ],
    },
]);
