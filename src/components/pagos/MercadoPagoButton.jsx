// Importaciones necesarias
import { useState } from 'react'; // Hook para manejar el estado local
import { apiCLient } from '../../services/userApi'; // Cliente para manejar las solicitudes HTTP al backend
import { Wallet } from '@mercadopago/sdk-react'; // Componente de MercadoPago para integrar el widget de pagos. abre la billetera

// Componente principal
export const MercadoPagoButton = ({ cart, total, onPaymentSuccess }) => {
    // Estados locales
    const [preferenceId, setPreferenceId] = useState(null); // Almacena el ID de la preferencia de pago
    const [loading, setLoading] = useState(false); // Indicador de carga para el botón y el widget de pago

    // ahora necesito manejar las preferencias. Función para generar una preferencia de pago
    const handleGeneratePreference = async () => {
        try {
            // Solicitud POST al backend para crear una preferencia de pago. obtengo la ruta del post desde paymentRoutes
            const { data } = await apiCLient.post("/payments/create_preference", { cart, total });

            // Almacena el ID de la preferencia de pago en el estado local
            setPreferenceId(data.id);  // es lo que llega del back
        } catch (error) {
            // Manejo de errores: registra cualquier problema en la consola
            console.error('Error al generar las preferencias de Pago', error.response?.data || error);
        } finally {   // una vez terminado todo el proceso, cambia el estado
            // Cambia el estado de carga a true para mostrar el widget
            setLoading(true);
        }
    };

    // Render del componente
    return (
        <>
            {/* Botón para generar la preferencia de pago */}
            <button
                onClick={handleGeneratePreference} // Evento de clic para generar la preferencia
                className="button button-pay" // Clases CSS para estilos
                disabled={loading} // Deshabilita el botón mientras se carga la pasarela de pago
            >
                {/* Texto dinámico basado en el estado de carga */}
                {loading ? 'Cargando pasarela de pago...' : "Opciones de Mercado de Pago"}
            </button>

            {/* Renderiza el widget de MercadoPago si hay un ID de preferencia */}
            {
                preferenceId && (     // si preferenceID esta presente, le indico que abra la billetera
                    <Wallet   
                        initialization={{ preferenceId }} // Inicializa el widget con el ID de la preferencia que recibe el objeto preferenceID
                        onReady={() => console.log("Wallet Ready")} // Callback cuando el widget está listo
                        onError={(error) => console.error('Error en Wallet', error)} // Callback para manejar errores
                        onPayment={(details) => onPaymentSuccess(details)} // Callback cuando el pago es exitoso. recibe la funcion que recibe detalles de la compra. ejecuta el metodo onpaymentsucces que viene directamente de mercadopago.
                    />   // cierro la billetera
                )
            }
        </>
    );
};
