// Importación del módulo necesario desde React
import { createContext } from "react";

/**
 * `CartContext`:
 * - Es un contexto de React creado utilizando el método `createContext`.
 * - Sirve para compartir el estado y funciones relacionadas con el carrito de compras
 *   a través de los componentes de la aplicación sin necesidad de pasar propiedades manualmente.
 *
 * Uso típico:
 * - El `CartContext` se utiliza en combinación con un `CartProvider` que provee valores al contexto.
 * - Los componentes que necesitan acceder al estado del carrito o sus funciones pueden usar `useContext(CartContext)`.
 *
 * Ejemplo de implementación:
 * 1. Crear un proveedor que contenga el estado y funciones del carrito.
 * 2. Envolver los componentes que necesiten acceder al carrito con este proveedor.
 * 3. Consumir los valores del contexto en los componentes con `useContext`.
 */
export const CartContext = createContext();

//