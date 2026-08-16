import { Outlet, createBrowserRouter } from "react-router";
import App from "../pages/App/App";
import LoginPage from "../pages/login/Login.page";
import HeaderComponent from "../components/HeaderComponent";
import RegisterPage from "../pages/register/register.page";

function RootLayout() {
    return (
        <>
            <HeaderComponent />
            <Outlet />
        </>
    );
}

export const router = createBrowserRouter([
    {
        path: "/",
        Component: RootLayout,
        children: [
            {
                index: true,
                Component: App,
            },
            {
                path: "login",
                Component: LoginPage,
            },
            {
                path: "register",
                Component: RegisterPage,
            },
        ],
    },
]);