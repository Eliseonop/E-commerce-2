import "../css/contacto.css"
import axios from 'axios'

export default function Contacto() {
    const bot = {
        TOKEN: process.env.TOKEN,
        chatID: 1146767113
    }

    const textt = "Hola Masami"
    const url = 'https://api.telegram.org/bot'

    const gett = () => {
        axios.get(`${url}${bot.TOKEN}/getMe`)
            .then(function (response) {
                // handle success
                console.log(response);
            })
    }

    const postt = () => {
        axios.post(`${url}${bot.TOKEN}/sendMessage`,
            {
                chat_id: bot.chatID,
                text: textt,
            }
        )
            .then((response) => {
                console.log(response);

            }).catch((error) => {
                console.log(error);
            })
    }

    gett()
    postt()

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