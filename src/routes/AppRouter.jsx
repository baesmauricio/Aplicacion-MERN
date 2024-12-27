// Importa los componentes Route y Routes desde la librería react-router-dom para manejar la navegación
import { Route, Routes } from "react-router-dom";

// Importa las páginas HomePage y AboutPage desde la carpeta ../pages
import { HomePage, AboutPage } from "../pages";

// Importa el componente Navbar, que probablemente contiene la barra de navegación
import { Navbar } from "../components";

// Importa la página CartPage (carrito de compras) desde la carpeta ../pages
import { CartPage } from "../pages/CartPage";

// Importa la página MercadoPagoStatus, que muestra el estado del pago desde MercadoPago
import { MercadoPagoStatus } from "../pages/MercadoPagoStatus";

// Importa la página LoginPage desde la carpeta ../pages
import { LoginPage } from "../pages/LoginPage";

// Importa el componente PrivateRoute, que se utiliza para proteger rutas privadas
import { PrivateRoute } from "./PrivateRoute";
import { ProductList } from "../components/products/ProductList";

// Define el componente AppRouter, que gestiona las rutas de la aplicación
export const AppRouter = () => {
    return (
      <>
        {/* Renderiza el componente Navbar, que probablemente contiene el menú de navegación */}
        <Navbar />
        
        {/* Contenedor de rutas para la navegación entre las diferentes páginas */}
        <Routes>
          {/* Ruta para la página de inicio, cuando la URL sea '/', se renderiza HomePage */}
          <Route path="/" element={<HomePage />} />
          
          {/* Ruta para la página "About", cuando la URL sea '/about', se renderiza AboutPage */}
          <Route path="/about" element={<AboutPage />} />


          <Route path="/product" element={<ProductList />} />

          
          {/* Ruta para la página de login, cuando la URL sea '/login', se renderiza LoginPage */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Ruta para la página del carrito, cuando la URL sea '/cart', se renderiza CartPage.
              Este componente está protegido por el componente PrivateRoute, que valida si el usuario
              está autenticado antes de acceder al carrito */}
          <Route
            path="/cart"
            element={
              <PrivateRoute>
                <CartPage />
              </PrivateRoute>
            }
          />
          
          {/* Ruta para el estado del pago de MercadoPago, cuando la URL sea '/mercadopago/status',
              se renderiza MercadoPagoStatus. Esta ruta también está protegida por PrivateRoute */}
          <Route 
            path="/mercadopago/status"
            element={
                <PrivateRoute>
                    <MercadoPagoStatus />
                </PrivateRoute>
            }
          />
        </Routes>
      </>
    );
}
