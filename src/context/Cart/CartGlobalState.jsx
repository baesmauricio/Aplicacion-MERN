// Importa los módulos necesarios desde React y los archivos locales
import { useReducer } from "react";
import { CartContext } from "./cartContext";
import { CartReducer } from "./cartReducer";

// Define el estado inicial del carrito
const initialState = {
    cart: [] // Array vacío para almacenar los productos en el carrito
};

/**
 * `CartProvider`:
 * - Es un componente de alto nivel que envuelve otros componentes para proporcionarles acceso
 *   al estado del carrito y sus funciones mediante `CartContext`.
 * - Utiliza `useReducer` para gestionar el estado del carrito con las acciones definidas en `CartReducer`.
 *
 * @param {object} props - Recibe los componentes hijos a través de `props.children`.
 * @returns {JSX.Element} - Proveedor del contexto con el estado y las funciones del carrito.
 */
export const CartProvider = ({ children }) => {
    // Inicializa el estado del carrito y la función `dispatch` usando `useReducer`
    const [state, dispatch] = useReducer(CartReducer, initialState); 
    
    /**
     * Añade un producto al carrito.
     * @param {object} product - Objeto del producto que se desea añadir.
     */
    const addToCart = (product) => {
        console.log(product);
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    /**
     * Elimina un producto del carrito.
     * @param {string} productID - ID del producto a eliminar.
     */
    const removeFromCart = (productID) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: productID }); // Acción que se enviará al reducer. Define el tipo de operación (eliminar del carrito).
    };                                                              // El identificador del producto a eliminar. Será usado en el reducer para filtrar el producto.

    /**
     * Incrementa la cantidad de un producto en el carrito.
     * @param {string} productID - ID del producto cuya cantidad se incrementará.
     */
    const increaseQuantity = (productID) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: productID });
    };

    /**
     * Decrementa la cantidad de un producto en el carrito.
     * @param {string} productID - ID del producto cuya cantidad se decrementará.
     */
    const decreaseQuantity = (productID) => {
        dispatch({ type: 'DECREASE_QUANTITY', payload: productID });
    };

    /**
     * Vacía completamente el carrito.
     */
    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    /**
     * Renderiza el proveedor del contexto (`CartContext.Provider`).
     * - Proporciona el estado del carrito y las funciones de manipulación como valor del contexto.
     * - Envuelve a los componentes hijos (`children`) para que puedan acceder a estos valores.
     */
    return (
        <CartContext.Provider
            value={{
                cart: state.cart, // Estado actual del carrito
                addToCart, // Función para añadir productos
                removeFromCart, // Función para eliminar productos
                increaseQuantity, // Función para incrementar cantidad
                decreaseQuantity, // Función para decrementar cantidad
                clearCart // Función para vaciar el carrito
            }}
        >
            {children} {/* Renderiza los componentes hijos */}
        </CartContext.Provider>
    );
};
