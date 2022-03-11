import { useState, useEffect, createContext } from "react";

export const CarritoContext = createContext();

const CarritoContextProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);

  const anadirCarrito = (nuevoProducto) => {
    const existe = carrito.findIndex((prod) => prod.id === nuevoProducto.id);
    if (existe === -1) {
      setCarrito([...carrito, nuevoProducto]);
    } else {
      let carritoCopia = [...carrito];
      carritoCopia[existe].cantidad =
        carritoCopia[existe].cantidad + nuevoProducto.cantidad;
      setCarrito(carritoCopia);
    }
  };
  const limpiarCarrito = () => {
    setCarrito([]);
  };
  const carritoStorageFunc = () => {
    const carritoStorage = JSON.parse(localStorage.getItem("carritoApp"));
    if (carritoStorage.length > 0) {
      setCarrito(carritoStorage);
    }
  };
  useEffect(() => {
    carritoStorageFunc();
  }, []);

  //2. Pero cada vez que cambie carrito, guardaremos la información en el localStorage
  useEffect(() => {
    localStorage.setItem("carritoApp", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CarritoContext.Provider value={{ carrito, anadirCarrito, limpiarCarrito }}>
      {children}
    </CarritoContext.Provider>
  );
};
export default CarritoContextProvider;
