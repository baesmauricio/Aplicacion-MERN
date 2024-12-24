// Importamos los componentes principales de las páginas que se encuentran en esta carpeta.
import { HomePage } from './HomePage'; // Página principal.
import { AboutPage } from './AboutPage'; // Página "Sobre Nosotros".

// Exportamos los componentes importados en un único objeto para simplificar su uso en otros archivos.
export {
    HomePage,
    AboutPage
};

/* Descripción del código:

1. Importaciones:
   - Este archivo importa los componentes `HomePage` y `AboutPage`, que representan las páginas principales de la aplicación, desde sus respectivos archivos.

2. Exportación:
   - Los componentes se agrupan y exportan juntos como un objeto. Esto permite que otros archivos los importen desde un único lugar, mejorando la organización del proyecto.

3. Utilidad del archivo:
   - Este archivo actúa como un archivo de barrido o índice, cuyo propósito es centralizar las exportaciones de los componentes de la carpeta `pages`. Esto simplifica las importaciones en otras partes del proyecto.
   - Por ejemplo, en lugar de escribir múltiples importaciones como:
        ```javascript
        import { HomePage } from './pages/HomePage';
        import { AboutPage } from './pages/AboutPage';
        ```
     podemos simplemente escribir:
        ```javascript
        import { HomePage, AboutPage } from './pages';
        ```

4. Ventajas:
   - Mejora la claridad y la organización del código.
   - Facilita la escalabilidad al añadir más páginas en el futuro.
   - Reduce errores al tener un único punto de referencia para los componentes de la carpeta.

Este archivo contribuye a una estructura modular y ordenada del proyecto, permitiendo un desarrollo más eficiente y organizado.*/
