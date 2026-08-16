import { ReactNode } from "react";
import { NavLink } from "react-router";

interface NavLinkComponentProps {
    className?: string;
    to: string;
    children: ReactNode;
}

export default function NavLinkComponent({ to, children, className }: NavLinkComponentProps) {
    return (
        <NavLink to={to}
            className={className ? className : ({ isActive }) => isActive ? "text-blue-500" : "text-gray-500"}
        >
            {children}
        </NavLink>
    )
}