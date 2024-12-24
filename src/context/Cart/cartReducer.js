/**
 * `CartReducer`:
 * - Es una función reductora que maneja el estado del carrito de compras en base a las acciones despachadas.
 * - Modifica el estado actual del carrito según el tipo de acción (`action.type`) recibida.
 *
 * @param {object} state - Estado actual del carrito.
 * @param {object} action - Acción que contiene el tipo (`type`) y los datos necesarios para modificar el estado (`payload`).
 * @returns {object} - Nuevo estado del carrito después de aplicar la acción.
 */

export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART': {   // es lo que proviene del disptch del cartGlobalState
            // Verifica si el producto ya está en el carrito
            const existInProduct = state.cart.find(product => product._id === action.payload._id);
            
            if (existInProduct) {
                // Si el producto ya existe, incrementa su cantidad
                return {
                    ...state,
                    cart: state.cart.map(product => 
                        product._id === action.payload._id 
                            ? { ...product, quantity: product.quantity + 1 } 
                            : product
                    )
                };
            } else {
                // Si el producto no existe, lo agrega al carrito con cantidad inicial de 1
                return {
                    ...state,
                    cart: [...state.cart, { ...action.payload, quantity: 1 }]
                };
            }
        }

        case 'REMOVE_FROM_CART': 
            // Elimina el producto del carrito según `_id`
            return {
                ...state,     // Mantiene el resto del estado sin cambios.
                cart: state.cart.filter((item) => item._id !== action.payload)   // Nueva lista del carrito: se excluyen los productos cuyo `_id` coincida con `action.payload`.
            };

        case 'INCREASE_QUANTITY':
            // Incrementa la cantidad de un producto en el carrito según su `_id`
            return {
                ...state, 
                cart: state.cart.map(product => 
                    product._id === action.payload 
                        ? { ...product, quantity: product.quantity + 1 } 
                        : product
                )
            };

        case 'DECREASE_QUANTITY':
            // Decrementa la cantidad de un producto en el carrito según su `_id`
            return {
                ...state, 
                cart: state.cart.map(product => 
                    product._id === action.payload 
                        ? { ...product, quantity: product.quantity - 1 } 
                        : product
                )
            };
        
        case 'CLEAR_CART':
            // Vacía el carrito eliminando todos los productos
            return {
                ...state,
                cart: []
            };

        default:
            // Devuelve el estado actual si el tipo de acción no coincide
            return state;
    }
};
