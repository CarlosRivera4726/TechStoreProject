import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import NavLinkComponent from "../../components/NavLink.component";

interface Inputs {
    name: string;
    lastName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export default function RegisterPage() {
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
                <h1 className="text-2xl font-bold mb-4">Registrarse</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                        required
                        helperText={errors.name ? "El nombre es obligatorio" : undefined}
                        label="Nombre"
                        {...register("name", { required: true })}
                        error={!!errors.name}
                    />
                    <TextField
                        required
                        helperText={errors.lastName ? "El apellido es obligatorio" : undefined}
                        label="Apellido"
                        {...register("lastName", { required: true })}
                        error={!!errors.lastName}
                    />
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
                    <TextField
                        required
                        label="Confirmar Contraseña"
                        type="password"
                        autoComplete="current-password"
                        {...register("confirmPassword", { required: true })}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword ? "Las contraseñas no coinciden" : undefined}
                    />
                    <FormControlLabel control={<Checkbox />} label="Recordarme" />
                    <Button type="submit" variant="contained" color="primary">
                        Registrarse
                    </Button>
                    <span className="flex gap-1 text-md text-gray-600">
                        ¿Ya tienes una cuenta? <NavLinkComponent to="/login"><p className="text-blue-500 hover:underline">Inicia sesión aquí</p></NavLinkComponent>
                    </span>
                </form>
            </section>
        </div>
    )
}