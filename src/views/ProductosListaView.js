import React, { useState, useEffect } from "react";
import { obtenerProductosPorPagina } from "../service/DataService";
import ProductoCard from "../components/ProductoCard";
import Cargando from "../components/Cargando";
import "../css/hvh.css";
import axios from "axios";
export default function ProductosListaView() {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [limite, setLimite] = useState(6);
  const [loading, setLoading] = useState(true);
  const getProductos = async () => {
    try {
      try {
        const data = await axios.get(
          `https://app-backend-ecommerce.herokuapp.com/productos`
        );
        console.log(data.data);

        setProductos(data.data.productos);
      } catch (error) {
        throw error;
      }
      // setProductos(prodObtenidos);

      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProductos();
  }, [pagina]);

  return (
    <>
      {loading === true ? (
        <Cargando />
      ) : (
        <div className="container mb-5 mt-5" id="hvh">
          <div className="row">
            {productos.map((item, i) => {
              return <ProductoCard key={i} item={item} />;
            })}
          </div>
          <div className="d-flex justify-content-center">
            <button
              className="btn btn-outline-dark mt-3"
              onClick={(e) => {
                e.preventDefault();
                setPagina(pagina + 1);
              }}
            >
              <i className="fas fa-chevron-circle-down"></i>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
