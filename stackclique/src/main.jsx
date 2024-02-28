import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.jsx";
import "./index.css";

import { Toaster } from "react-hot-toast";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HelmetProvider } from "react-helmet-async";
ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HelmetProvider>
        <RouterProvider router={router} />
        <Toaster />
        <ToastContainer
            position="top-center"
            transition={Zoom}
            hideProgressBar
            theme="dark"
        />
        </HelmetProvider>
    </React.StrictMode>,
);
