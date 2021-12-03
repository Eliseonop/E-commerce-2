import "../css/FooterView.css"
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuBookIcon from '@mui/icons-material/MenuBook';
export default function FooterView() {
    return (

        <footer>
            <header>
                <ul type="none" className="d-flex align-items-center">
                    <li className="mx-auto" id="lifoot">
                        <Link className="nav-link" to="/pedidos">
                            <h6 className="fw-bold text-center " id="h6foot">Tus pedidos</h6>
                        </Link>
                        {/*                         <li>Seguimiento de pedido</li>
                        <li>Pedidos</li>
                        <li>Forma de Pago</li>
                        <li>Cambio y devoluciones</li>
                        <li>Envios</li> */}
                    </li>
                    <li className="mx-auto" id="lifoot">
                        <Link className="nav-link" to="/servicio-cliente">
                            <h6 className="fw-bold text-center" id="h6foot">
                                Atención
                            </h6>
                        </Link>
                        {/*                         <li>Contáctenos</li>
                        <li>Pregunta Frecuentes </li>
                        <li>Guía de tallas</li>
                        <li>Comprobante electrónico</li> */}
                    </li>
                    <li className="mx-auto" id="lifoot">
                        <Link className="nav-link" to="/about">
                            <h6 className="fw-bold text-center" id="h6foot">Empresa</h6>
                        </Link>
                        {/*                         <li>Sobre Nosotros</li>
                        <li>Legales Generales</li>
                        <li>Libro de reclamaciones</li>
                        <li>Términos y reclamaciones</li>
                        <li>Política de Privacidad</li>
                        <li>Política de Cookies</li> */}
                    </li>
                </ul>
            </header>
            <div className="text-center ">
                <h4 id="h4foot">Wiki</h4>
                <p id="pfooter">© WikiStore. Todos los derechos reservados.</p>
                <div className="d-flex justify-content-center">
                    <a href="https://www.facebook.com/">
                        <FacebookIcon className="mx-3" />
                    </a>
                    <a href="https://www.instagram.com/">
                        <InstagramIcon className="mx-3" />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=51952841852">
                        <WhatsAppIcon className="mx-3"/>
                    </a>
                </div>
            </div>
        </footer>
    )
}