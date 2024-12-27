import { ProductList } from "../components/products/ProductList"

export const HomePage = () => {
    return (
        <>  
            
            <header className="header">
             <h1 className="header-title">Amigurumis</h1>
            </header>
            <section className="story-section">
                <h2 className="section-title">El Encantador Origen de los Amigurumis</h2>
                <p className="section-paragraph">
                    Hace mucho tiempo, en Japón, surgió una hermosa tradición llamada "amigurumi". 
                    Este arte milenario se basa en tejer pequeñas figuras de crochet, con formas que 
                    van desde tiernos animales hasta personajes llenos de personalidad. Más que 
                    simples muñecos, los amigurumis representan amor, calidez y el toque único de 
                    quien los crea. En Japón, se dice que cada amigurumi tiene un alma que guarda 
                    buenos deseos para quien lo recibe.
                </p>

                <h2 className="section-title">Por Qué Los Amigurumis Son Especiales</h2>
                <p className="section-paragraph">
                    Cada amigurumi es una obra de arte hecha a mano, lo que los convierte en un regalo 
                    único y significativo. La dedicación y el cariño que se invierten en su elaboración 
                    aseguran que cada pieza sea única, llena de detalles y personalidad.
                </p>

                <h2 className="section-title">Materiales de Alta Calidad para un Producto Duradero</h2>
                <p className="section-paragraph">
                    Nuestros amigurumis están hechos con hilo 100% de algodón, un material natural que 
                    es suave al tacto y seguro incluso para los más pequeños. Se rellenan con algodón 
                    sintético de alta calidad, lo que los hace ligeros y agradables. Además, usamos 
                    ojos de seguridad especialmente diseñados para garantizar que sean seguros para 
                    niños y adultos por igual.
                </p>

                <h2 className="section-title">Fáciles de Cuidar y Diseñados para Durar</h2>
                <p className="section-paragraph">
                    Gracias a los materiales cuidadosamente seleccionados, nuestros amigurumis son 
                    lavables y duraderos, perfectos para acompañarte en tu día a día o decorar tu hogar. 
                    Su resistencia y acabado impecable los convierten en recuerdos que perdurarán por años.
                </p>

                <h2 className="section-title">El Valor del Trabajo Hecho a Mano</h2>
                <p className="section-paragraph">
                    En cada puntada de nuestros amigurumis hay una historia de amor, paciencia y 
                    dedicación. Al adquirir uno de estos muñecos, no solo llevas contigo un objeto 
                    especial, sino también el trabajo de talentosas manos que ponen el corazón en 
                    cada creación.
                </p>
            </section>

            {/* <ProductList /> */} 
        </>// comentado para que no aparezca en la pagina de inicio
    )
}