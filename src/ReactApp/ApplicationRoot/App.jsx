import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { GloballyAccessableComponents } from "./GloballyAccessableComponents";

export default function App() {

    const baseUrl = "/"

    return (
        <Router basename={baseUrl}>
            <AppRoutes />
            <GloballyAccessableComponents />
        </Router>
    )
};