// Importamos los componentes principales que se encuentran en esta carpeta.
import { Navbar } from "./Navbar"; // Barra de navegación principal. Navbar

// Exportamos los componentes importados en un único objeto para simplificar su uso en otros archivos.
export {
    Navbar
};

/* Descripción del código: esto es util si quiero

1. Importaciones:
   - Este archivo importa el componente `Navbar`, que representa la barra de navegación de la aplicación, desde su archivo correspondiente.

2. Exportación:
   - El componente se agrupa y exporta en un único objeto. Esto permite que otros archivos lo importen desde un único lugar, mejorando la organización del proyecto.

3. Utilidad del archivo:
   - Este archivo actúa como un archivo de barrido o índice, cuyo propósito es centralizar las exportaciones de los componentes de la carpeta `components`. Esto simplifica las importaciones en otras partes del proyecto.
   - Por ejemplo, en lugar de escribir múltiples importaciones como:
        ```javascript
        import { Navbar } from './components/Navbar';
        ```
     podemos simplemente escribir:
        ```javascript
        import { Navbar } from './components';
        ```

4. Ventajas:
   - Mejora la claridad y la organización del código.
   - Facilita la escalabilidad al añadir más componentes en el futuro.
   - Reduce errores al tener un único punto de referencia para los componentes de la carpeta.

Este archivo contribuye a una estructura modular y ordenada del proyecto, permitiendo un desarrollo más eficiente y organizado.*/

/*
// Importaciones de los componentes principales
import { Navbar } from "./Navbar"; // Barra de navegación principal

// Importaciones desde la carpeta `auth`
import { GoogleLoginButton } from "./auth/GoogleLoginButton"; // Botón de inicio de sesión con Google
import { LoginForm } from "./auth/LoginForm"; // Formulario de inicio de sesión

// Importaciones desde la carpeta `cart`
import { CartItem } from "./cart/CartItem"; // Componente que representa un elemento en el carrito
import { CartList } from "./cart/CartList"; // Lista de todos los elementos del carrito

// Importaciones desde la carpeta `products`
import { ProductItem } from "./products/ProductItem"; // Componente que representa un producto individual
import { ProductList } from "./products/ProductList"; // Lista de todos los productos

// Exportación de todos los componentes para facilitar el acceso desde un único punto
export {
    Navbar,
    GoogleLoginButton,
    LoginForm,
    CartItem,
    CartList,
    ProductItem,
    ProductList
};

/* Descripción del código:

1. Importaciones:
   - Se incluyen todos los componentes relevantes desde sus respectivas rutas.

2. Exportaciones:
   - Todos los componentes se agrupan en un único objeto para simplificar las importaciones en otras partes del proyecto.

3. Utilidad:
   - Centraliza las referencias a los componentes, facilitando la organización y la reutilización del código.
   - Permite importar componentes desde `src/components` de forma más sencilla.

*/
