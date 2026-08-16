import { useLocation } from "react-router";
import NavLinkComponent from "./NavLink.component";
import SearchComponent from "./SearchComponent";

export default function HeaderComponent() {
    const path = useLocation();
    const currentPath = path.pathname;

    return (
        <header className="min-h-20 max-h-20 flex items-center justify-between gap-4 p-4 bg-gray-100">
            <NavLinkComponent to="/" className="font-bold text-2xl">
                <span className="font-bold text-2xl">Tech<span className="text-blue-500">Store</span></span>
            </NavLinkComponent>

            {currentPath === "/" && (
                <div className="flex-1 flex justify-center">
                    <SearchComponent />
                </div>
            )}

            <nav className="flex gap-4">
                <NavLinkComponent to="/">Inicio</NavLinkComponent>
                <NavLinkComponent to="/login">Iniciar sesión</NavLinkComponent>
                <NavLinkComponent to="/register">Registrarse</NavLinkComponent>
            </nav>
        </header>
    );
}