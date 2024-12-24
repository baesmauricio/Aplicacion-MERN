// Importa la función `initMercadoPago` desde el paquete "@mercadopago/sdk-react"
import { initMercadoPago } from "@mercadopago/sdk-react";

// Verifica si MercadoPago ya está inicializado en el objeto global `window`.
// La variable `mercadoPagoInitialized` se utiliza como un indicador para evitar inicializarlo múltiples veces.
// es para evitar inicializacion continua.dentro de la ventana del navegador.
if (!window.mercadoPagoInitialized) {

    // Llama a la función `initMercadoPago` para inicializar el SDK de MercadoPago.
    // Toma dos argumentos:
    // 1. `import.meta.env.VITE_MP_PUBLIC_KEY`: La clave pública para autenticar el SDK.
    //    Esta clave se obtiene desde las variables de entorno y se usa para identificar al cliente.
    // 2. `{ locale: 'es-CL' }`: Un objeto de configuración que establece la región o localización
    //    (en este caso, 'es-CL' para español de Chile).
    initMercadoPago(import.meta.env.VITE_MP_PUBLIC_KEY, { locale: 'es-CL' });

    // Marca la inicialización de MercadoPago como completada.
    // Esto previene que `initMercadoPago` sea llamado nuevamente si ya se ha ejecutado.
    window.mercadoPagoInitialized = true;
}
