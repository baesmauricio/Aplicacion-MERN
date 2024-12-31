// Importamos los hooks y componentes necesarios desde React y React Router DOM.
import { useContext } from 'react'; // Hook para usar el contexto en React.
import { Link } from 'react-router-dom'; // Componente para la navegación entre páginas.
import { AuthContext } from '../context/User/userContext'; // Contexto personalizado para autenticación de usuario.

// Definimos el componente funcional Navbar.
export const Navbar = () => {
    // Usamos el contexto de autenticación para obtener el estado del usuario y la función de cierre de sesión.
    const { user, logout } = useContext(AuthContext);

    // Renderizamos la barra de navegación.
    return (
        <nav className="navbar"> {/* Contenedor principal de la barra de navegación */}
            {/* Sección del logo */}
            
            <div className="navbar__logo">
            <Link to="/product"><img src="/logo.jpg" alt="Logo" className="navbar__logo-image" /></Link>
            </div>

            {/* Sección de los enlaces de navegación */}
            <div className="navbar__items">
                <ul className="navbar__list"> {/* Lista de enlaces, Se utiliza link par el enrutamiento */}
                    <li> {/* Enlace a la página de inicio */}
                        <Link to="/">Inicio</Link>
                    </li>
                    <li> {/* Enlace a la página "Acerca De" */}
                        <Link to="/about">Nosotros</Link>
                    </li>
                    <li> {/* Enlace a la página de productos */}
                        <Link to="/product">Productos</Link>
                    </li>
                    <li> {/* Enlace al carrito */}
                        <Link to="/cart">Carrito</Link>
                    </li>

                    {/* Condicional para mostrar opciones según el estado del usuario */}
                    {
                        !user ? (
                            // Si no hay usuario autenticado, mostrar el enlace de inicio de sesión.
                            <li>
                                <Link to="/login">Cuenta</Link>
                            </li>
                            
                        ) : (
                            // Si hay un usuario autenticado, mostrar su correo y el botón de cierre de sesión.
                            <div>
                                <li>
                                    <Link to="/cart">{user.email}</Link> {/* Muestra el correo del usuario */}
                                </li>
                                <button 
                                    className='logout-button' /* Estilo del botón de logout */
                                    onClick={logout} /* Llama a la función logout cuando se hace clic */>
                                    Logout
                                </button>
                            </div>
                        )
                    }
                </ul>
            </div>
        </nav>
    );
};

/* Descripción del código:

1. Importaciones: Se incluyen los hooks y componentes necesarios como `useContext` para acceder al contexto global de la aplicación, y `Link` para la navegación sin recargar la página.

2. Contexto de Autenticación: `AuthContext` es utilizado para determinar si hay un usuario autenticado (`user`) y para acceder a la función de cierre de sesión (`logout`).

3. Estructura HTML:
    - La barra de navegación contiene:
        - Un logo.
        - Una lista de enlaces a diferentes secciones de la aplicación: Inicio, Acerca De, Productos y Carrito.
        - Condicional para mostrar el enlace de inicio de sesión si no hay usuario autenticado.
        - Si hay un usuario autenticado, muestra su correo electrónico y un botón de cierre de sesión.

4. Estilización:
    - Se utilizan clases como `navbar`, `navbar__logo`, `navbar__items`, `navbar__list`, y `logout-button` para aplicar estilos desde CSS externo.

5. Funcionalidad:
    - Si el usuario está autenticado, puede cerrar sesión con el botón `Logout`, que ejecuta la función `logout` proporcionada por el contexto.
    - Si no está autenticado, se le redirige a la página de inicio de sesión.

Este componente proporciona una interfaz intuitiva y dinámica, actualizándose automáticamente según el estado de autenticación del usuario.*/
