// Importa el componente LoginForm desde el archivo '../components/auth/LoginForm'
import { LoginForm } from '../components/auth/LoginForm';
import { RegisterForm } from '../components/auth/RegisterForm';
import { ButtonLogout } from '../components/auth/ButtonLogout';
// Define el componente LoginPage, que representa la página de inicio de sesión
export const LoginPage = () => {
    return (
        <div>
            <RegisterForm />
            <LoginForm />
            <ButtonLogout/>
        </div>
    );
}
