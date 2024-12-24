// Importación de dependencias y contextos necesarios
import { useContext } from "react"; // Hook para consumir datos del contexto
import { CartContext } from "../../context/Cart/cartContext"; // Contexto del carrito
import { formatPriceCLP } from "../../utils/formatPrice"; // Utilidad para formatear precios en pesos chilenos

/**
 * Componente `CartItem`:
 * Renderiza un elemento del carrito con sus detalles, incluyendo opciones para modificar la cantidad 
 * y eliminar el producto del carrito.
 * 
 * @param {Object} props - Propiedades recibidas por el componente
 * @param {Object} props.product - Objeto que contiene los datos del producto
 * @param {string} props.product._id - ID único del producto
 * @param {string} props.product.nombre - Nombre del producto
 * @param {string} props.product.imagen - URL de la imagen del producto
 * @param {number} props.product.precio - Precio unitario del producto
 * @param {number} props.product.quantity - Cantidad del producto en el carrito
 * 
 * @returns {JSX.Element} Componente visual del producto en el carrito
 */
export const CartItem = ({ product }) => {
    // Extraemos los datos del producto
    const { _id, name, photos, price } = product;

    // Extraemos las funciones del contexto del carrito
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useContext(CartContext);

    return (
        <div className="cart-item">
            {/* Imagen del producto */}
            <img className="cart-item__image" src={photos} alt={name} />

            {/* Detalles del producto */}
            <div className="cart-item__details">
                <h3>{name}</h3> {/* Nombre del producto */}
                <p>Precio: {formatPriceCLP(price)}</p> {/* Precio formateado */}

                {/* Controles para modificar la cantidad */}
                <div className="quantity-control">
                    <button 
                        className="button" 
                        onClick={() => decreaseQuantity(_id)} 
                        disabled={product.quantity <= 1} // Deshabilita si la cantidad es 1
                    >
                        -
                    </button>
                    <span>{product.quantity}</span> {/* Cantidad actual */}
                    <button 
                        className="button" 
                        onClick={() => increaseQuantity(_id)}
                    >
                        +
                    </button>
                </div>

                {/* Subtotal basado en la cantidad y el precio */}
                <p>Subtotal: {formatPriceCLP(price * product.quantity)}</p>
            </div>

            {/* Botón para eliminar el producto del carrito */}
            <button 
                className="button remove-button" 
                onClick={() => removeFromCart(_id)}
            >
                Eliminar
            </button>
        </div>
    );
};
