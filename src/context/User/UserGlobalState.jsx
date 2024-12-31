import { useCallback, useEffect, useReducer } from "react" // Importa hooks de React: useCallback, useEffect y useReducer
import { authenticate, registerUser } from "../../services/userApi"; // Importa funciones personalizadas para autenticación de usuario desde un servicio
import { AuthContext } from "./userContext"; // Importa el contexto AuthContext para manejar el estado global de autenticación
import { AuthReducer } from "./userReducer"; // Importa el reducer AuthReducer que gestionará el estado de autenticación
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth"; // Importa funciones necesarias de Firebase para autenticación: GoogleAuthProvider, signInWithPopup, signOut
// import { auth } from "../../config/firebase.config"; // Importa la configuración de autenticación de Firebase

// Define el estado inicial del contexto de autenticación
const initialState = {
    user: null,  // El estado inicial del usuario es null
    token: null, // El estado inicial del token es null
}

// Define el componente AuthProvider, que gestionará el contexto de autenticación
export const AuthProvider = ({ children }) => {
    // Utiliza useReducer para manejar el estado de autenticación global
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    // Define la función fetchUser, que será memorizada para evitar recrearla en cada render
    const fetchUser = useCallback(() => {
        // Obtiene el token y el usuario desde el localStorage
        const token = localStorage.getItem('token');
        const user = JSON.parse(localStorage.getItem('user'));

        // Si el token y el usuario existen en localStorage, actualiza el estado de autenticación
        if(token && user) {
            dispatch({
                type: 'LOGIN_USER', // Tipo de acción para iniciar sesión
                payload: { user, token } // Pasa los datos del usuario y el token como payload
            });
        }
    }, []); // El array vacío asegura que la función se memoriza solo una vez

    // Utiliza useEffect para ejecutar fetchUser una sola vez cuando el componente se monta
    useEffect(() => {
        fetchUser(); // Llama a la función fetchUser al montar el componente
    }, [fetchUser]); // El hook useEffect se ejecutará solo cuando fetchUser cambie

    // Define la función register para registrar un nuevo usuario
    const register = async (userData) => {
        try {
            // Llama a la API para registrar al usuario
            const data = await registerUser(userData);
            const { token, user } = data; // Desestructura los valores token y user de la respuesta

            // Si el token y el usuario existen en la respuesta, los guarda en localStorage
            if (token && user) {
                localStorage.setItem("token", token); // Guarda el token en localStorage
                localStorage.setItem("user", JSON.stringify(user)); // Guarda el usuario en localStorage

                // Despacha una acción al reducer para actualizar el estado de autenticación
                dispatch({
                    type: "REGISTER_USER", // Tipo de acción para registrar al usuario
                    payload: { user, token }, // Payload con los datos del usuario y el token
                });
            } else {
                throw new Error("Token o usuario no recibido"); // Si no se recibe token o usuario, lanza un error
            }
        } catch (error) {
            throw new Error(`Error al registrar el usuario: ERROR: ${error}`) // Maneja errores al registrar el usuario
        }
    }

   
    // Define la función login para el inicio de sesión tradicional con credenciales
    const login = async (credentials) => {
        try {
            // Llama a la API para autenticar al usuario con las credenciales proporcionadas
            const data = await authenticate(credentials);
            console.log(data)
            const { token} = data; // Desestructura los valores token y user de la respuesta

            // Si el token y el usuario existen, los guarda en localStorage
            if (token) {
                localStorage.setItem("token", token); // Guarda el token en localStorage

                // Despacha una acción al reducer para actualizar el estado de autenticación
                dispatch({
                    type: "LOGIN_USER", // Tipo de acción para iniciar sesión
                    payload: {token }, // Payload con los datos del usuario y el token
                });
            } else {
                throw new Error("Token no recibido"); // Si no se recibe el token, lanza un error
            }
        } catch (error) {
            throw new Error(`Error al autenticar el usuario: ERROR: ${error}`); // Maneja errores de autenticación
        }
    }

    // Define la función logout para cerrar sesión del usuario
    const logout = async () => {
        // Elimina el token y el usuario del localStorage
        localStorage.removeItem('token');
        localStorage.removeItem('user');

        // Llama a Firebase para cerrar sesión en la autenticación de Firebase
        //await signOut(auth);

        // Despacha una acción al reducer para restablecer el estado de autenticación
        dispatch({ type: 'LOGOUT_USER' }); // Tipo de acción para cerrar sesión
    }

    // Retorna el contexto de autenticación con los valores actuales y las funciones de autenticación
    return (
        <AuthContext.Provider 
            value={{
                token: state.token,  // Pasa el token actual desde el estado
                register, // Pasa la función de registro
                login, // Pasa la función de inicio de sesión tradicional
                logout, // Pasa la función de cierre de sesión
              //  loginWithGoogle // Pasa la función de inicio de sesión con Google
            }}
        >
            {children}  
        </AuthContext.Provider>
    )
}
