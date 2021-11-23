import React,{useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import { CarritoContext } from "../context/carritoContext";
import Swal from 'sweetalert2';
export default function ProductoCard({item}) {
    const { id, nombre, descripcion, precio, imagen } = item;
    const [cantidad, setCantidad] = useState(1);
    const {anadirCarrito} = useContext(CarritoContext)

    const anadirCarritoContext=() =>{
      // const {id, nombre,precio} = producto
      const nuevoProducto = {
        id,
        nombre,
        precio,
        cantidad,
      }
      Swal.fire({
        position: 'bottom-end',
        icon: 'success',
        title: `Producto ${nombre} agredado al carrito`,
        showConfirmButton: false,
        timer: 1500
      })
      anadirCarrito(nuevoProducto)
    }

    return (
      <>
        <div class="col-md-4  ">
          <div className="card mt-3">
            <div className="product-1 align-items-center p-2 text-center border ">
              <img src={imagen} alt={nombre} class="card-img-top  mb-2" width="80%" height="30%" />
              <h5>{nombre}</h5>
  
              <div className="mt-3 info">
                <p className="text1 d-block">{descripcion}.</p>
  
                <div className="cost m-3 text-dark fw-bold">
                  <span>S/{precio}</span>
                </div>
                <div>
                  <Link to={`/detalleproducto/${id}`} className="btn btn-outline-info">
                    Ver
                  </Link>
                  <button
                    className="btn btn-outline-dark mx-2 m-md-2"
                    onClick={anadirCarritoContext}
                  >
                    Agregar al Carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
