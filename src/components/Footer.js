import "../css/Footer.css"
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MenuBookIcon from '@mui/icons-material/MenuBook';


function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <Link className="linkfooter" to="/">
              <h4>BOOTCAMP 2021</h4>
            </Link>
            <Link className="linkfooter" to="/">
              <h1 className="list-unstyled">
                <li>Tecsup- Código</li>
              </h1>
            </Link>
            <a href="https://www.facebook.com/">
              <FacebookIcon className="mx-3" />
            </a>
            <a href="https://www.instagram.com/">
              <InstagramIcon className="mx-3" />
            </a>
            <a href="https://api.whatsapp.com/send?phone=51952841852">
              <WhatsAppIcon className="mx-3" />
            </a>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Tus Pedidos</h4>
            <ui className="list-unstyled">
              <Link className="linkfooter" to="/envios">
                <li>Envíos</li>
              </Link>
              <Link className="linkfooter" to="/metodos-de-pago">
                <li>Formas de Pago</li>
              </Link>
              <Link className="linkfooter" to="/cambios-y-devoluciones">
                <li>Cambios y Devoluciones</li>
              </Link>

            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Atención al Cliente</h4>
            <ui className="list-unstyled">
              <Link className="linkfooter" to="/contacto">
                <li>Contáctanos</li>
              </Link>
              <Link className="linkfooter" to="/preguntas-frecuentes">
                <li>Preguntas Frecuentes</li>
              </Link>
              <Link className="linkfooter" to="/como-comprar">
                <li>¿Cómo comprar?</li>
              </Link>
            </ui>
          </div>
          {/* Column 4 */}
          <div className="col">
            <h4>Empresa</h4>
            <ui className="list-unstyled">
              <Link className="linkfooter" to="/about">
                <li>Sobre Nosotros</li>
              </Link>
              <Link className="linkfooter" to="/legales-generales">
                <li>Legales Generales</li>
              </Link>
              <Link className="linkfooter" to="/politica-de-cookies">
                <li>Política de Cookies</li>
              </Link>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} E-commerce | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;