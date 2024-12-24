// Definimos el componente funcional AboutPage, que representa la página "Sobre Nosotros" de la aplicación.
export const AboutPage = () => {
    return (
        <>
            {/* Sección del encabezado de la página */}
            <header>
                <h1>Esta es la página Sobre Nosotros...</h1> {/* Título principal que describe el propósito de la página */}
            </header>
        </>
    );
};

/* Descripción del código:

1. Componente AboutPage:
   - Es un componente funcional que renderiza contenido estático para la página "Sobre Nosotros".

2. Estructura HTML:
   - Se utiliza un Fragment (`<> </>`) para encapsular los elementos retornados sin añadir nodos extra al DOM.
   - Contiene un `header` con un título principal (`h1`) que indica el propósito de la página.

3. Uso:
   - Este componente es ideal para presentar información sobre la aplicación, su misión, equipo o cualquier detalle relevante.
   - Es modular y puede expandirse fácilmente para incluir más contenido si es necesario.

Este archivo define una página sencilla pero clara, que puede ser reutilizada o adaptada en diferentes contextos dentro de la aplicación.*/
