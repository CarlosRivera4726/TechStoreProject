
import HeaderComponent from "@components/Header.component";
import App from "@pages/App/App";
import LoginPage from "@pages/login/Login.page";
import RegisterPage from "@pages/register/register.page";
import { Outlet, createBrowserRouter } from "react-router";

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