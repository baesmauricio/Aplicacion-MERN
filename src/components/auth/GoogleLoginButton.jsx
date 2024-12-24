// Importación de módulos y contextos necesarios
import { useContext } from "react"; // Hook para consumir un contexto de React
import { AuthContext } from "../../context/User/userContext"; // Contexto de autenticación del usuario

/**
 * Componente `GoogleLoginButton`:
 * Renderiza un botón que permite iniciar sesión con Google.
 * Utiliza el contexto de autenticación (`AuthContext`) para acceder a la función de inicio de sesión con Google.
 */
export const GoogleLoginButton = () => {
    // Extraemos `loginWithGoogle` del contexto `AuthContext`
    const { loginWithGoogle } = useContext(AuthContext);

    /**
     * Función `loginWithGoogle`:
     * Proporcionada por el contexto, gestiona el inicio de sesión del usuario con Google.
     * - Se espera que esta función maneje el flujo de autenticación utilizando OAuth de Google.
     * - Podría incluir la apertura de una ventana emergente para el inicio de sesión y el manejo de tokens de usuario.
     */

    return (
        <div className="google-button-container">
            {/* Contenedor del botón para estilización */}

            {/* Botón para iniciar sesión con Google */}
            <button 
                className="google-button" // Clase CSS para estilizar el botón
                onClick={loginWithGoogle} // Evento `onClick` que ejecuta la función de inicio de sesión
            >
                Entrar con Google {/* Texto visible del botón */}
            </button>
        </div>
    );
};
