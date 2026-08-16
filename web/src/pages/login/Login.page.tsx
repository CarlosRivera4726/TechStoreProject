import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import NavLinkComponent from "@components/NavLink.component";

interface Inputs {
    email: string;
    password: string;
}

export default function LoginPage() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()

    const onSubmit = (data: Inputs) => {
        console.log(data);
    }

    return (
        <div className="flex flex-col items-center justify-center h-full min-h-screen bg-white">
            <section className="flex flex-col w-full max-w-md p-8 bg-gray-100 rounded shadow-md gap-10" >
                <h1 className="text-2xl font-bold mb-4">Iniciar Sesión</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        required
                        helperText={errors.email ? "El correo electrónico es obligatorio" : undefined}
                        label="Email"
                        type="email"
                        {...register("email", { required: true })}
                        error={!!errors.email}
                    />
                    <TextField
                        required
                        label="Contraseña"
                        type="password"
                        autoComplete="current-password"
                        {...register("password", { required: true })}
                        error={!!errors.password}
                        helperText={errors.password ? "La contraseña es obligatoria" : undefined}
                    />
                    <FormControlLabel control={<Checkbox />} label="Recordarme" />
                    <Button type="submit" variant="contained" color="primary">
                        Iniciar Sesión
                    </Button>
                    <span className="flex gap-1 text-md text-gray-600">
                        ¿No tienes una cuenta? <NavLinkComponent to="/register"><p className="text-blue-500 hover:underline">Regístrate aquí</p></NavLinkComponent>
                    </span>
                </form>
            </section>
        </div>
    )
}