import { useState, useContext } from 'react'; // Hooks para manejar estado y consumir contextos
import { AuthContext } from '../../context/User/userContext'; // Contexto de autenticación de usuarios
import { useNavigate } from 'react-router-dom'; // Hook para manejar la navegación

// componente registrar usuario

export const RegisterForm = () => {
    const {register} =useContext (AuthContext);
    const [nombre, setNombre] = useState ('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState ('');
    const [error, setError] = useState(null); // Estado para manejar mensajes de error

    // Hook para redirigir al usuario a diferentes rutas
    const navigate = useNavigate();


    const handleRegister = async (e) => {
        e.preventDefault(); // Previene el comportamiento por defecto del formulario
        setError(null); // Resetea cualquier mensaje de error previo


        try {
            // Llama a la función `register` del contexto con los datos del formulario
            await register({ nombre, email, password });
            navigate('/'); // Redirige al usuario a la página principal
          } catch (err) {
            setError(err.message); // Captura y muestra el mensaje de error en caso de falla
          }
        };

        return (
           
           <div className="register-form">
              <h2 className="register-title">Registrar Usuario</h2>
        
              {/* Muestra un mensaje de error si existe */}
              {error && <p style={{ color: 'red' }}>{error}</p>}
        
              {/* Formulario de registro */}
              <form onSubmit={handleRegister} className="register-form-container">
                <div className="form-group">
                  <label className="form-label">Nombre:</label>
                  <input
                    type="text" // Tipo de input para texto
                    value={nombre} // Valor actual del estado `nombre`
                    onChange={(e) => setNombre(e.target.value)} // Actualiza el estado cuando cambia el valor
                    required // Campo obligatorio
                    minLength={3} // Mínimo de caracteres requerido
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Email:</label>
                  <input
                    type="email" // Tipo de input para validar formato de correo
                    value={email} // Valor actual del estado `email`
                    onChange={(e) => setEmail(e.target.value)} // Actualiza el estado cuando cambia el valor
                    required // Campo obligatorio
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Contraseña:</label>
                  <input
                    type="password" // Tipo de input para contraseñas
                    value={password} // Valor actual del estado `password`
                    onChange={(e) => setPassword(e.target.value)} // Actualiza el estado cuando cambia el valor
                    required // Campo obligatorio
                    minLength={6} // Mínimo de caracteres requerido
                    className="form-input"
                  />
                </div>
                <button type="submit" className="form-button">Registrar</button> {/* Botón para enviar el formulario */}
              </form>
            </div>
          );
        };

    