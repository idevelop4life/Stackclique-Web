import { createBrowserRouter } from "react-router-dom";
import Authentication from "./components/Layout/Authentication";
import {
    Login,
    OTP,
    SignUp,
    Home,
    AboutUs,
    Learn,
    Connect,
    Message,
    LearnDetail,
} from "./pages";
import AppLayout from "./components/Layout/applayout/AppLayout";
import Contact from "./pages/Contact";
// import AppDevelopment from "./components/LearnPage/components/AppDevelopment";
// import UiUx from "./components/LearnPage/components/UiUx";
// import WebDevelopment from "./components/LearnPage/components/WebDevelopment";
// import TechnicalWritting from "./components/LearnPage/components/TechWriting";
// import ProductManagement from "./components/LearnPage/components/ProductManagment";
// import CyberSecurity from "./components/LearnPage/components/CyberSecurity";
// import CourseDetails from "./components/DetailsPage/CourseDetails";
export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/about", element: <AboutUs /> },
            {
                path: "/learn",
                element: <Learn />,
            },
            { path: "/connect", element: <Connect /> },
            { path: "/chat", element: <Message /> },
            { path: "/contact", element: <Contact /> },
            { path: "/course/:courseId", element: <LearnDetail /> },
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
