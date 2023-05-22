import React from "react";
import { Router } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";

export default function App() {

    const baseUrl = "http://localhost:8080"

    return (
        <Router basename={baseUrl}>
            <AppRoutes />
        </Router>
    )
};