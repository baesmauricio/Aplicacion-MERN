// Importa el componente LoginForm desde el archivo '../components/auth/LoginForm'
import { LoginForm } from '../components/auth/LoginForm';

// Define el componente LoginPage, que representa la página de inicio de sesión
export const LoginPage = () => {
    return (
        // Se crea un contenedor div con la clase 'auth-page' para la página de autenticación
        <div className="auth-page">
            {/* Título que se muestra en la página */}
            <h2>Inicia Sesión</h2>
            {/* Se incluye el componente LoginForm dentro del contenedor, que contiene el formulario de inicio de sesión */}
            <LoginForm />
        </div>
    );
}
