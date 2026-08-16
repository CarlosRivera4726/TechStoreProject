import { createBrowserRouter } from "react-router";
import App from "../pages/App/App";
import LoginPage from "../pages/login/Login.page";
import HeaderComponent from "../components/HeaderComponent";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: HeaderComponent,
        children: [
            {
                path: "/",
                Component: App,
            },
            {
                path: "/login",
                Component: LoginPage,
            },
        ]
    },
]);