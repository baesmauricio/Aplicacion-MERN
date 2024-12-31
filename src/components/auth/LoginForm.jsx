// Importación de dependencias y contextos necesarios
import { useState, useContext } from 'react'; // Hooks para manejar estado y consumir contextos
import { AuthContext } from '../../context/User/userContext'; // Contexto de autenticación de usuarios
import { useNavigate } from 'react-router-dom'; // Hook para manejar la navegación

/**
 * Componente `LoginForm`:
 * Renderiza un formulario para que los usuarios puedan iniciar sesión con sus credenciales
 * o mediante autenticación con Google.
 */
export const LoginForm = () => {
    // Extraemos funciones del contexto de autenticación
    const { login, loginWithGoogle } = useContext(AuthContext);

    // Estados locales para manejar los campos del formulario y posibles errores
    const [email, setEmail] = useState(''); // Estado para el email ingresado por el usuario
    const [password, setPassword] = useState(''); // Estado para la contraseña ingresada
    const [error, setError] = useState(null); // Estado para manejar mensajes de error

    // Hook para redirigir al usuario a diferentes rutas
    const navigate = useNavigate();

    /**
     * Función `handleLogin`:
     * Maneja el evento de envío del formulario, autentica al usuario con sus credenciales
     * y redirige a la página principal en caso de éxito.
     * @param {Event} e - Evento del formulario
     */
    const handleLogin = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        setError(null); // Resetea cualquier mensaje de error previo

        try {
            // Llama a la función `login` del contexto con los datos del formulario
            await login({ email, password });
            navigate('/'); // Redirige al usuario a la página principal
        } catch (err) {
            setError(err.message); // Captura y muestra el mensaje de error en caso de falla
        }
    };

    /**
     * Función `handleGoogleLogin`:
     * Autentica al usuario mediante Google y lo redirige a la página principal en caso de éxito.
     */
    // const handleGoogleLogin = async () => {
    //     try {
    //         // Llama a la función `loginWithGoogle` del contexto
    //         await loginWithGoogle();
    //         navigate('/'); // Redirige al usuario a la página principal
    //     } catch (err) {
    //         setError(err.message); // Captura y muestra el mensaje de error en caso de falla
    //     }
    // };

    return (
        <div className='login-form'>
            <h2 className='login-title'>Iniciar Sesión</h2>

            {/* Muestra un mensaje de error si existe */}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {/* Formulario de inicio de sesión */}
            <form onSubmit={handleLogin} className='login-form-container'>
                <div className='form-group'>
                    <label className='form-label'>Email:</label>
                    <input 
                        type="email" // Tipo de input para validar formato de correo
                        value={email} // Valor actual del estado `email`
                        onChange={(e) => setEmail(e.target.value)} // Actualiza el estado cuando cambia el valor
                        required // Campo obligatorio
                        className='form-input'
                    />
                </div>
                <div className='form-group'>
                    <label className='form-label'>Contraseña:</label>
                    <input 
                        type="password" // Tipo de input para contraseñas
                        value={password} // Valor actual del estado `password`
                        onChange={(e) => setPassword(e.target.value)} // Actualiza el estado cuando cambia el valor
                        required // Campo obligatorio
                        className='form-input'
                    />
                </div>
                <button type="submit" className='form-button'>Iniciar Sesión</button> {/* Botón para enviar el formulario */}
            </form>

          
        </div>
    );
};
