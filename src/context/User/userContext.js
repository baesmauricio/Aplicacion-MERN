/**
 * `AuthContext`:
 * - Es un contexto creado para manejar el estado y las funcionalidades relacionadas con la autenticación de usuarios.
 * - Utiliza la API de Context de React para compartir datos de autenticación entre los componentes de la aplicación sin necesidad de pasar props manualmente.
 *
 * Uso principal:
 * - Proveer métodos y estados de autenticación, como el usuario autenticado, métodos de inicio de sesión, cierre de sesión, entre otros.
 *
 * @example
 * // Ejemplo de uso dentro de un componente
 * import { useContext } from "react";
 * import { AuthContext } from "../../context/User/authContext";
 *
 * const MyComponent = () => {
 *   const { login, logout, user } = useContext(AuthContext);
 * 
 *   return (
 *     <div>
 *       <p>Usuario: {user?.name}</p>
 *       <button onClick={logout}>Cerrar Sesión</button>
 *     </div>
 *   );
 * };
 */
import { createContext } from "react";

// Creación del contexto de autenticación
export const AuthContext = createContext();
