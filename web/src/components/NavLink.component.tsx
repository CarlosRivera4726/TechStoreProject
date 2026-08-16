import { ReactNode } from "react";
import { NavLink } from "react-router";

interface NavLinkComponentProps {
    to: string;
    children: ReactNode;
}

export default function NavLinkComponent({ to, children }: NavLinkComponentProps) {
    return (
        <NavLink to={to}
            className={({ isActive }) => isActive ? "text-blue-500" : "text-gray-500"}
        >
            {children}
        </NavLink>
    )
}