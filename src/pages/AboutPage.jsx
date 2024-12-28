// Definimos el componente funcional AboutPage, que representa la página "Sobre Nosotros" de la aplicación.
export const AboutPage = () => {
    return (
        <>
           <header className="about-header">
        <div className="about-content">
            <div className="about-text">
                <h1 className="about-title">Sobre Nosotras...</h1>
                <p className="about-paragraph">
                    Somos una madre e hija apasionadas por el arte de tejer. Desde muy temprana edad, 
                    la madre enseñó a su hija a tejer con palillos, sentando las bases de un talento 
                    que florecería con el tiempo. Juntas, comenzaron a crear sus propios amigurumis, 
                    perfeccionando técnicas y aumentando la complejidad de los patrones. 
                    Hoy en día, elaboran animales únicos, muchos de ellos vestidos con atuendos 
                    diseñados para cada ocasión. Este emprendimiento es para nosotras una valiosa 
                    oportunidad de compartir el fruto de nuestro trabajo y nuestra pasión.
                </p>
            </div>
            <div className="about-image">
                <img 
                    src="/dist/assets/madre.jpg" 
                    alt="Madre e hija tejiendo amigurumis" 
                    className="about-img"
                />
            </div>
        </div>
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
