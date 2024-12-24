// Importación de módulos y componentes necesarios
import { useContext } from "react"; // Hook para consumir el contexto
import { CartContext } from "../../context/Cart/cartContext"; // Contexto del carrito
import { CartItem } from "./CartItem"; // Componente para representar un producto en el carrito
import { formatPriceCLP } from "../../utils/formatPrice"; // Utilidad para formatear precios en CLP (pesos chilenos)
import { MercadoPagoButton } from "../pagos/MercadoPagoButton"; // Componente del botón de pago de MercadoPago

/**
 * Componente `CartList`:
 * Representa la lista de productos en el carrito y las opciones de pago disponibles.
 * Utiliza el contexto del carrito para acceder a los productos y las acciones asociadas.
 */
export const CartList = () => {
    // Consumimos el contexto `CartContext` para obtener el carrito y la función `clearCart`
    const { cart, clearCart } = useContext(CartContext); // desde variables globales

    // Verificación: Si el carrito está vacío, muestra un mensaje indicándolo
    if (!cart || cart.lenght === 0) {
        return (
            <div className="cart-list empty">
                <h2>Tu Carrito está vacío</h2>
                <p>Por favor agrega productos para verlos aquí</p>
            </div>
        );
    }

    // Cálculo del total del carrito: Precio acumulado por la cantidad de cada producto
    const total = cart.reduce((accum, product) => accum + product.price * product.quantity, 0);

    /**
     * Función `handlePaymentSuccess`:
     * Maneja el evento de pago exitoso.
     * @param {object} details - Detalles de la transacción proporcionados por MercadoPago.
     */
    const handlePaymentSuccess = (details) => {
        console.log('Pago Exitoso', details); // Muestra los detalles de la transacción en la consola
        alert('Pago realizado con éxito. ¡Muchas gracias por tu compra!'); // Muestra un mensaje de éxito al usuario
        clearCart(); // Limpia el carrito después del pago
    };

    // Renderizado del componente
    return (
        <div className="cart-list">
            <h2>Tu Carrito</h2>

            {/* Muestra los productos del carrito */}
            {cart.map((product) => (
                <CartItem product={product} key={product._id} />
            ))}

            {/* Sección del total del carrito */}
            <div className="cart-total">
                <h3>Total: {formatPriceCLP(total)}</h3> {/* Formatea el total en CLP */}
                <button className="button button-clear" onClick={clearCart}>
                    Vaciar Carrito
                </button>
            </div>

            {/* Sección de opciones de pago */}
            <section className="payment-options">
                <MercadoPagoButton 
                    cart={cart} // Pasamos el carrito como prop al botón de MercadoPago
                    total={total} // Pasamos el total como prop
                    onPaymentSuccess={handlePaymentSuccess} // Callback para manejar el éxito del pago
                />
            </section>
        </div>
    );
};
