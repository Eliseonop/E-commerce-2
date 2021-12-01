import React, { useState, useEffect } from "react";
import { LaData, obtenerProductosPorPagina } from "../service/DataService";
import ProductoCard from "../components/ProductoCard";
import Cargando from "../components/Cargando";
import "../css/hvh.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

import { useParams } from "react-router-dom";
const ProductosBuscar = () => {
  const [productos, setProductos] = useState([]);
  const [pagina, setPagina] = useState(1);
  const [limite, setLimite] = useState(20);
  const { busqueda } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  // console.log({ busqueda });

  const getProductos = async () => {
    let prodObtenidos;
    try {
      if (typeof busqueda === "undefined") {
        const prodObtenidos = await obtenerProductosPorPagina(pagina, limite);
      } else {
        prodObtenidos = await LaData(busqueda);
      }
      setProductos(prodObtenidos);
      setLoading(false);
      console.log(prodObtenidos);
    } catch (error) {
      console.log(error);
    }
    if (prodObtenidos.length === 0) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Producto no encontrado!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/productos");
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

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
        </div>
      )}
    </>
  );
};

export default ProductosBuscar;
