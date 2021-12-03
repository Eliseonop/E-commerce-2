import "../css/contacto.css"

export default function Contacto() {
    return (
        <div className="container text-center" id="contactos">
            <div className="container" id="containercontacto">
                <h1>Mantente en contacto</h1>
                <p>Regístrate para recibir noticias sobre nuevos lanzamientos y promociones esclusivas.</p>
                <inputcontacto class="input-group">
                    <input type="text" class="form-control" placeholder="Ingrese su email" />
                </inputcontacto>
            </div>
        </div>
    )
}