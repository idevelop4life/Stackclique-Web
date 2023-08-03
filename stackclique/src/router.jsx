import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Authentication from "./components/Layout/Authentication";
import { Login, OTP, SignUp } from "./pages";

export const router = createBrowserRouter([
    { path: "/", element: <App /> },
    {
        element: <Authentication />,
        children: [
            { path: "/login", element: <Login /> },
            { path: "/sign-up", element: <SignUp /> },
            { path: "/verification", element: <OTP /> },
        ],
    },
]);
