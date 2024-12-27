// Importación de dependencias y contextos necesarios
import { useContext } from "react"; // Hook para consumir datos del contexto
import { CartContext } from "../../context/Cart/cartContext"; // Contexto del carrito
import { formatPriceCLP } from "../../utils/formatPrice"; // Utilidad para formatear precios en pesos chilenos

/**
 * Componente `ProductItem`:
 * Renderiza un producto individual, mostrando su información y un botón para agregarlo al carrito.
 *
 * @param {Object} props - Propiedades recibidas por el componente
 * @param {Object} props.product - Objeto que contiene los datos del producto
 * @param {string} props.product.nombre - Nombre del producto
 * @param {string} props.product.imagen - URL de la imagen del producto
 * @param {number} props.product.precio - Precio del producto
 * @param {string} props.product.description - Descripción del producto
 *
 * @returns {JSX.Element} Componente visual del producto
 */
export const ProductItem = ({ product }) => {
    // Extraemos los datos del producto
    const { name, photos, description, price } = product;

    // Extraemos la función `addToCart` del contexto del carrito
    const { addToCart } = useContext(CartContext);  //agrra desde useContex y desde ahi saca el addTo cart


    return (
        <div className="product-item">
            {/* Encabezado del producto con imagen y nombre */}
            <div className="product-item__header">
                <img className="product-item__image" src={photos[0]} alt={name} />
                <h2>{name}</h2>
            </div>

            {/* Cuerpo del producto con price, descripción y botón */}
            <div className="product-item__body">
                <p><strong>Reseña:</strong> {description}</p>
                <p><strong>Precio:</strong> {formatPriceCLP(price)}</p>
                    <button className="button" onClick={() => addToCart(product)}>
                    Agregar al Carrito
                    </button>
            </div>
        </div>
    );
};
