import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

export default function App() {

    const baseUrl = "/"

    return (
        <Router basename={baseUrl}>
            <AppRoutes />
        </Router>
    )
};