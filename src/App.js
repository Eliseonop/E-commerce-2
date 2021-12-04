
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ProductosListaView from "./views/ProductosListaView";
import CarritoContextProvider from "./context/carritoContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductoComprarView from "./views/ProductoComprarView";
import Navigation from "./components/Navbar/Navigation";
import CarritoView from "./views/CarritoView";
import NotFoundView from "./views/NotFoundView";

import AuthProvider from "./context/AuthContext";
import PrivateRoute from "./components/PrivateRoute";

import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

import RutaPrivadaUser from "./components/RutaPrivadaUser";
import ContrasenaView from "./views/ContrasenaView";
import CheckOutView from "./views/CheckOutView";
import Footer from "./components/Footer";
import HomeView from "./views/HomeView"
import Contacto from "./views/Contacto"


//extrasviwe
import Aboutview from "./extra/Aboutview"
import CambioyDevolucionesview from "./extra/CambioyDevolucionesview"
import ComoComprarview from "./extra/ComoComprarview"
import Contactoview from "./extra/Contactoview"
import Enviosview from "./extra/Enviosview"
import Legalesview from "./extra/Legalesview"
import Metodospago from "./extra/Metodospago"
import Cookies from "./extra/Cookies";
import Preguntasfrecuentes from "./extra/Preguntasfrecuentes"


function App() {
  return (
    <AuthProvider>
      <CarritoContextProvider>
        <Router>
          <Navigation />
          
          <Routes>
          <Route path="/" element={<HomeView />} />
            <Route path="/home" element={<HomeView />} />
            <Route path="*" element={<NotFoundView />} />
            <Route path="/carrito" element={<CarritoView />} />
            <Route path="/productos" element={<ProductosListaView />} />
            //extra
            <Route path="/about" element={<Aboutview />} />
            <Route path="/cambios-y-devoluciones" element={ <CambioyDevolucionesview />} />
            <Route path="/como-comprar" element={ <ComoComprarview />} />
            <Route path="/contacto" element={ <Contactoview />} />
            <Route path="/envios" element={ <Enviosview />} />
            <Route path="/legales-generales" element={ <Legalesview />} />
            <Route path="/metodos-de-pago" element={ <Metodospago />} />
            <Route path="/politica-de-cookies" element={ <Cookies />} />
            <Route path="/preguntas-frecuentes" element={<Preguntasfrecuentes />} />

            <Route
              path="/detalleproducto/:id"
              element={<ProductoComprarView />}
            />
            <Route
              path="/ContrasenaOlvidada"
              element={<ContrasenaView />}
            />
            <Route path="/checkout" element={
              
                <CheckOutView/>
              
            }/>
            <Route path="/login" element={
              <PrivateRoute>
                <LoginView />
              </PrivateRoute>} />
              <Route path="/register" element={
              <PrivateRoute>
                <RegisterView/>
               
              </PrivateRoute>} />
          </Routes>
          <Contacto/>       
          <Footer/>
        
        </Router>
      </CarritoContextProvider>
    </AuthProvider>
  );
}

export default App;