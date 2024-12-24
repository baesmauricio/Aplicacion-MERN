// Importación de dependencias necesarias
import { useState, useEffect } from "react"; // Hooks para manejar el estado y efectos secundarios
import { getAllProducts } from "../../services/productApi"; // Servicio para obtener productos desde la API
import { ProductItem } from "./ProductItem"; // Componente para renderizar un producto individual

/**
 * Componente `ProductList`:
 * Renderiza una lista de productos obtenidos desde una API y maneja los estados de carga y error.
 *
 * @returns {JSX.Element} Componente visual de la lista de productos
 */
export const ProductList = () => {
    // Estado para almacenar los productos obtenidos
    const [products, setProducts] = useState([]);
    
    // Estado para indicar si los datos están siendo cargados
    const [loading, setLoading] = useState(true);
    
    // Estado para almacenar cualquier error que ocurra durante la carga
    const [error, setError] = useState(null);

    /**
     * `useEffect`:
     * - Llama a la función `fetchProducts` cuando el componente se monta.
     * - Se asegura de cargar los productos desde la API.
     */
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Llamada a la API para obtener productos
                const data = await getAllProducts();
                console.log("aquieeeee", data); // (Opcional) Para depuración, muestra los datos obtenidos
                setProducts(data); // Actualiza el estado con los productos obtenidos
            } catch (err) {
                // Manejo de errores
                setError(`No se pudieron cargar los productos. ${err}`);
            } finally {
                // Indica que la carga ha finalizado
                setLoading(false);
            }
        };

        // Ejecuta la función para cargar productos
        fetchProducts();
    }, []); // Se ejecuta solo una vez, al montar el componente

    // Si los datos están siendo cargados, muestra un mensaje de carga
    if (loading) {
        return <p>Cargando Productos...</p>;
    }

    // Si ocurre un error, muestra el mensaje correspondiente
    if (error) {
        return <p>{error}</p>;
    }

    // Renderiza la lista de productos o un mensaje si no hay productos disponibles
    return (
        <div className="product-list">
            {
                products.length > 0 ? (
                    products.map((product) => (
                        // Muestra cada producto utilizando el componente `ProductItem`
                        <ProductItem product={product} key={product._id} />
                    ))
                ) : (
                    // Mensaje alternativo si no hay productos
                    <p>No hay productos disponibles.</p>
                )
            }
        </div>
    );
};
