import React from "react";
import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import { obtenerProductoPorId } from "../service/DataService";
import ReactImageMagnify from "react-image-magnify";
import { Link, useNavigate } from "react-router-dom";
import { CarritoContext } from "../context/carritoContext";
import "../css/VistaProduct.css";
import Cargando from "../components/Cargando";
import Swal from "sweetalert2";

const ProductoComprarView = () => {
  const [producto, setProducto] = useState(null);
  const [cantidad, setCantidad] = useState(1);
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const { anadirCarrito } = useContext(CarritoContext);

  const anadirCarritoContext = () => {
    const { id, nombre, precio } = producto;
    const nuevoProducto = {
      id,
      nombre,
      precio,
      cantidad,
    };
    anadirCarrito(nuevoProducto);
  };

  const getProducto = async () => {
    let prodObtenido
    try {
      const prodObtenido = await obtenerProductoPorId(id);
      setProducto(prodObtenido);
      setLoading(false)
      console.log(prodObtenido);
      // if (typeof prodObtenido === "undefined") {
      //   Swal.fire({
      //     icon: "error",
      //     title: "Oops...",
      //     text: "Producto no encontrado!",
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
      //   navigate("/productos");
      // };
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        // text: "Producto no encontrado!",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/productos");
    }
    console.log(prodObtenido)
  }
  useEffect(() => {
    getProducto();
  }, []);
  const modificarCantidad = (numero) => {
    if (cantidad + numero === 0 || cantidad + numero === 6) {
      return; //corta la ejecución
    }
    setCantidad(cantidad + numero);
  };
  return (
    <>
      {loading === true ? (
        <Cargando />
      ) : (
        <div
          id="contenedor"
          className=" d-flex flex-lg-row align-items-center justify-content-center flex-sm-column flex-xs-column"
        >
          <div className="col-12 col-md-6">
            <ReactImageMagnify
              className="rounded mx-5 d-block my-5 border border p-2  border-dark"
              {...{
                smallImage: {
                  alt: producto.nombre,
                  isFluidWidth: true,
                  src: producto.imagen,
                },
                largeImage: {
                  src: producto.imagen,
                  width: 1200,
                  height: 1200,
                },
              }}
            />
          </div>
          <div className="col-sm-12 col-lg-4 text-sm-center ">
            <h4 className="text-uppercase text-black-50">
              {producto.descripcion}
            </h4>
            <h1 className="">{producto.nombre}</h1>

            <h3 className="fw-bold ">S/ {producto.precio}</h3>
            <p className="lead">Adquierelo con un Click</p>
            <div className="d-flex justify-content-center " id="informacion">
              <button
                className="btn btn-dark"
                onClick={() => {
                  modificarCantidad(-1);
                }}
              >
                <i className="fas fa-minus"></i>
              </button>
              <h4 className="mx-2">{cantidad}</h4>
              <button
                className="btn btn-dark"
                onClick={() => {
                  modificarCantidad(1);
                }}
              >
                <i className="fas fa-plus"></i>
              </button>
            </div>
            <button
              className="btn btn-outline-dark px-4 py-2 my-2 "
              onClick={anadirCarritoContext}
            >
              <i className="fas fa-cart-plus"></i> Agregar a carrito
            </button>
            <Link
              to="/checkout"
              onClick={anadirCarritoContext}
              className="btn btn-outline-success px-4 py-2 ms-3"
            >
              Comprar Ya!
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductoComprarView;
