import React, { useContext, useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Cargando from "./Cargando";
import axios from "axios"
import { CarritoContext } from "../context/carritoContext";
import { guardarVenta } from "../service/VentasService";
import { useForm } from "react-hook-form"; //useForm es un hook personalizado, para manejar formularios
const Formulario = () => {
  const { carrito, limpiarCarrito } = useContext(CarritoContext);

  const { currentUser } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let total = 0;

  total = carrito.reduce((acum, prod) => {
    return acum + prod.cantidad * prod.precio;
  }, 0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const recibirSubmit = async (data) => {
    setLoading(true);
    const poder = currentUser === null ? false : true;
    const fecha = new Date().toLocaleString();
    //////////////////
    const bot = {
      TOKEN: "1756639561:AAEGpxpObQeEw24sKk_cJmEDGHoCrx6UeYU",
      chatID: 1146767113
  }
  const url = 'https://api.telegram.org/bot'
  ////////
    try {
      let nuevaVenta = {
        ...data, //nombreCompleto, telefono, email, direccion
        productos: carrito,
        total,
        fecha: fecha,
      };

      if (poder) {
        await guardarVenta(nuevaVenta);
        const postt = () => {
          axios
            .post(`${url}${bot.TOKEN}/sendMessage`, {
              chat_id: bot.chatID,
              text: `Tienes una nueva Venta 🤑:
Nombre: ${data.nombreCompleto}  
e-mail: ${data.email}`,
            })
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
        };
        postt();

        setLoading(false);

        Swal.fire({
          icon: "success",
          title: "Venta Realizada",
          showConfirmButton: true,
          text: "Revise su correo para ver el metodo de pago",
        });
        reset();
        // limpiarCarrito();
      } else {
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Debes iniciar sesion para continuar 🥺!",
          footer: "Te recomendamos ver las politicas de privacidad",
        });
        navigate("/Login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {loading === true ? (
        <Cargando />
      ) : (
        <div>
          <div className="col-12 col-md-12">
            <form onSubmit={handleSubmit(recibirSubmit)} className="row">
              <div className="mb-2 col-md-6">
                <label className="form-label">Nombres y Apellidos</label>
                <input
                  type="text"
                  placeholder="Ej. Juan Perez"
                  className="form-control"
                  {...register("nombreCompleto", { required: true })}
                />
                {/* errors.prop existe && retorna esto */}
                {errors.nombreCompleto && (
                  <small className="text-danger">
                    Este campo es obligatorio
                  </small>
                )}
              </div>

              <div className="mb-2 col-md-6">
                <label className="form-label">Télefono</label>
                <input
                  type="text"
                  placeholder="Ej. 926384679"
                  className="form-control"
                  {...register("telefono", {
                    required: { value: true, message: "Es requerido" },
                    minLength: {
                      value: 6,
                      message: "Se require 6 dígitos",
                    },
                    maxLength: { value: 14, message: "Máximo 14 dígitos" },
                  })}
                />
                {errors.telefono && (
                  <small className="text-danger">
                    {errors.telefono.message}
                  </small>
                )}
              </div>

              <div className="mb-2 col-md-6">
                <label className="form-label">Correo</label>
                <input
                  type="email"
                  placeholder="Ej. jperez@tecsup.edu.pe"
                  className="form-control"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <small className="text-danger">
                    Este correo es obligatorio
                  </small>
                )}
              </div>
              <div className="mb-2 col-md-6">
                <label className="form-label">Departamento</label>
                <select
                  className="form-select"
                  aria-label="Default select example"
                  {...register("departamento", { required: true })}
                >
                  <option selected>Seleccionar</option>
                  <option value="1">Lima</option>
                  <option value="2">Callao</option>
                  <option value="3">Arequipa</option>
                </select>
                {errors.email && (
                  <small className="text-danger">
                    Seleccionar Departamento
                  </small>
                )}
              </div>
              <div className="mb-2">
                <label className="form-label">Dirección</label>
                <input
                  type="text"
                  placeholder="Ej. Urb Los Arces F 67"
                  className="form-control"
                  {...register("direccion")}
                />
                {errors.direccion && (
                  <small className="text-danger">
                    Solo se acepta letras y dígitos
                  </small>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-dark btn-lg my-3 col-sm-8 col-9 col-md-6 m-auto"
                disabled={carrito.length <= 0}
              >
                Comprar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Formulario;
