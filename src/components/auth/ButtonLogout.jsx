import { useContext } from 'react'; // Importamos el hook para consumir contextos
import { AuthContext } from '../../context/User/userContext'; // Importamos el contexto de autenticación
import { useNavigate } from 'react-router-dom'; // Para redirigir al usuario

/**
 * Componente `ButtonLogout`:
 * Renderiza un botón que permite al usuario cerrar sesión.
 */
export const ButtonLogout = () => {
    // Extraemos la función `logout` del contexto de autenticación
    const { logout } = useContext(AuthContext);
    console.log(logout); // para probar porque es indefinido


    // Hook para redirigir al usuario después de cerrar sesión
    const navigate = useNavigate();

    /**
     * Función `handleLogout`:
     * Maneja el evento de clic en el botón de cerrar sesión.
     */
    const handleLogout = async () => {
        try {
            // Llamamos a la función `logout` del contexto
            await logout();

            // Redirigimos al usuario a la página de inicio de sesión
            navigate('/login');
        } catch (err) {
            console.error('Error al cerrar sesión:', err.message);
        }
    };

    return (
        <div className="center-container">
            <button onClick={handleLogout} className="logout-button">
            Cerrar Sesión
            </button>
        </div>      
    );
};
