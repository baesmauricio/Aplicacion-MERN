// Importa el componente CartList, que se encargará de mostrar la lista de productos en el carrito
import { CartList } from "../components/cart/CartList";

// Define el componente CartPage, que es la página que muestra el carrito de compras
export const CartPage = () => {
    return (
        // Se crea un contenedor div con la clase 'cart-page' para la página del carrito
        <div className="cart-page">
            {/* Se incluye el componente CartList dentro del contenedor, que renderiza los artículos en el carrito */}
            <CartList />
        </div>
    );
}
