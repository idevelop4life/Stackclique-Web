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
    // LearnDetail,
} from "./pages";
import AppLayout from "./components/Layout/applayout/AppLayout";
import Contact from "./pages/Contact";
import AppDevelopment from "./pages/AppDevelopment";
import UiUx from "./pages/UiUx";
import WebDevelopment from "./pages/WebDevelopment";
import TechnicalWritting from "./pages/TechWriting";
import ProductManagement from "./pages/ProductManagment";
import CyberSecurity from "./pages/CyberSecurity";
// import CourseDetails from "./components/DetailsPage/CourseDetails";
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
                children: [
                    { path: "app-development", element: <AppDevelopment /> },

                    { path: "web-development", element: <WebDevelopment /> },

                    {
                        path: "technical-writing",
                        element: <TechnicalWritting />,
                    },

                    { path: "ui-ux", element: <UiUx /> },
                    {
                        path: "product-management",
                        element: <ProductManagement />,
                    },

                    { path: "cyber-security", element: <CyberSecurity /> },
                ],
            },

            // {
            //     path: ":id",
            //     element: <CourseDetails />,
            // },

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
