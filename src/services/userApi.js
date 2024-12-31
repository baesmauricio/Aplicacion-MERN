// Importación de la biblioteca Axios para realizar solicitudes HTTP
import axios from 'axios';

// Constante que define la URL base de la API

//const API_URL = "http://localhost:5000/api";

const API_URL = "https://aplicacion-backend-auth.onrender.com/api"

// Creación de una instancia de Axios con una configuración inicial
export const apiCLient = axios.create({
    baseURL: API_URL, // Configura la URL base para todas las solicitudes
});

// Interceptor para las solicitudes salientes
apiCLient.interceptors.request.use(
    (config) => {
        // Recupera el token almacenado en el localStorage
        const token = localStorage.getItem('token');

        // Si el token existe, lo agrega al encabezado de autorización
        if (token) {
            config.headers["x-auth-token"] =`${token}`;
        }

        // Retorna la configuración modificada
        return config;
    },
    (error) => Promise.reject(error) // Manejo de errores en la solicitud
);

// Función para registrar un nuevo usuario
export const registerUser = async (userData) => {
    try {
        // Solicitud POST a la API para registrar un usuario
        const { data } = await apiCLient.post('/user/register', userData);   // deberia revisar las rutasdeberia ir apiCLient.get("auth/validate");

        // Devuelve los datos de la respuesta, que incluyen el ID y el token del usuario
        return data;
    } catch (error) {
        // Lanza un error si la solicitud falla
        throw new Error(`No pudimos registrar al usuario. ${error}`);
    }
};

/**
 * Función para autenticar a un usuario.
 * 
 * @param {object} credentials - Objeto que contiene `email` y `contraseña` como cadenas de texto.
 * @returns {string} - Retorna el token de autenticación y los datos del usuario.
 */
export const authenticate = async (credentials) => {
    try {
        // Solicitud POST a la API para iniciar sesión con las credenciales
        const { data } = await apiCLient.post('/user/login', credentials);

        // Devuelve los datos de la respuesta, que incluyen el token y los datos del usuario
        return data;
    } catch (error) {
        // Lanza un error si las credenciales no son válidas o si ocurre otro problema
        throw new Error(`Credenciales Invalidas. ${error}`);
    }
};

//
//userRoutes.js: 
//router.post("/register", registerUser);
//router.post("/login", loginUser);
//router.get("/verify", authMiddleware, verifyToken);
//router.put("/update", authMiddleware, updateUser);
//usuario y contrasena: credenciales
//como dejar disponible los los datos del usuario en toda la aplicacion. en context/userContext, UserGlobalState, userReducer