import { useContext, useState } from "react";
import { CarritoContext } from "../context/carritoContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import Cargando from "../components/Cargando";
import { Tab, Tabs } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";
import Formulario from "../components/Formulario";
import "../css/hvh.css";
export default function CheckOutView() {
  const { currentUser } = useContext(AuthContext);
  const { carrito } = useContext(CarritoContext);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  let total = 0;

  total = carrito.reduce((acum, prod) => {
    return acum + prod.cantidad * prod.precio;
  }, 0);

  // hook forms
  //register: es necesario para registrar c/input, messirve como referencia de los input
  //handleSubmit: función que me permite manejar el evento submit del form
  //errors: me permite por c/input mostrar un mensajito de error

  const [key, setKey] = useState("home");
  const manejarContinuar = () => {
    if (currentUser === null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes iniciar sesion para continuar 🥺!",
        footer: "Te recomendamos ver las politicas de privacidad",
      });

      navigate("/Login");
    } else {
      setKey("envio");
    }
  };

  return (
    <>
      {loading === true ? (
        <Cargando />
      ) : (
        <>
          <div className="container my-4" id="hvh">
            <h2>
              <i className="fas fa-user-lock mb-2"></i> COMPRA SEGURA
            </h2>

            <Tabs
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3"
            >
              <Tab eventKey="home" title="Verifique el carrito">
                <div className="row my-2 d-flex">
                  <div className="col-12 col-md-8">
                    <ul className="list-group">
                      {carrito.map((prod, i) => (
                        <li
                          className="list-group-item d-flex justify-content-between"
                          key={i}
                        >
                          <div>
                            <h6 className="fw-bold">{prod.nombre}</h6>
                            <small>Cantidad: {prod.cantidad}</small>
                          </div>
                          <div className="badge text-dark text-decoration-underline   pt-3">
                            {/* toFixed(entero), me permite manejar decimales> en un número */}
                            <h5>
                              S/ {(prod.cantidad * prod.precio).toFixed(2)}
                            </h5>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                  {/* pondré total */}
                  {total > 0 ? (
                    <>
                      <div className="col-12 col-md-4 card">
                        <h3 className="mt-4 fw-ligth">Resumen</h3>
                        <hr />
                        <div className=" d-flex justify-content-between my-2 ">
                          <span className="">Sub total:</span>
                          <span>S/ {total.toFixed(2)}</span>
                        </div>
                        <hr />
                        <div className=" d-flex justify-content-between fw-bold mt-5">
                          <span className="fw-bold">TOTAL:</span>
                          <span>S/ {total.toFixed(2)}</span>
                        </div>
                        <hr />
                        <Button
                          onClick={manejarContinuar}
                          className="btn btn-lg btn-outline-secondary my-2"
                        >
                          {" "}
                          Continuar
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="col-12 col-md-12 card d-flex ">
                      <div className="text-center">
                        <h1>Todavía no ha agregado ningún producto. 🎅</h1>
                      </div>
                    </div>
                  )}
                </div>
              </Tab>
              <Tab eventKey="envio" title="Envio" disabled>
                <Formulario setKey={setKey} />
              </Tab>
              <Tab eventKey="Pagar" title="Pagar" disabled>
                <a href="https://www.mercadopago.com.pe/developers/es/support">
                  <img
                    src="https://woocommerce.com/wp-content/uploads/2021/05/fb-mercado-pago-v2@2x.png"
                    width={400}
                    alt="mercado pago"
                  />
                </a>
              </Tab>
            </Tabs>
          </div>
        </>
      )}
    </>
  );
}
