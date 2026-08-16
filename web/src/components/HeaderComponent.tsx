import { NavLink } from "react-router";



export default function HeaderComponent() {
    return (
        <header>
            <nav>
                <NavLink to="/" end>Home</NavLink>
                <NavLink to="/login">Inicio de sesion</NavLink>
                <NavLink to="/register">Registrarse</NavLink>
            </nav>
            <p>Hola Mundo desde react</p>
        </header>
    )
}