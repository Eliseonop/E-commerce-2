import "../css/contacto.css"
import axios from 'axios'

export default function Contacto() {
    return (
        <div className="text-center" id="contactos">
            <div className="container" id="containercontacto">
                <h1>Mantente en contacto</h1>
                <p>Regístrate para recibir noticias sobre nuevos lanzamientos y promociones esclusivas.</p>
                <inputcontacto class="input-group">
                    <input 
                        type="email" 
                        id="meailform"
                        class="form-control" 
                        placeholder="Ingrese su email" 
                    />
                </inputcontacto>
                <button
                  type="submit"
                  className="btn btn-outline-light   mt-3"
                >
                  Suscribirse
                </button>                  
            </div>
        </div>
    )
}