import "../css/contacto.css"
import axios from 'axios'

import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Input() {
    const bot = {
        TOKEN: "1756639561:AAEGpxpObQeEw24sKk_cJmEDGHoCrx6UeYU",
        chatID: 1146767113
    }
    const url = 'https://api.telegram.org/bot'

    const { register, errors, handleSubmit } = useForm();

    const [Entradas, setEntradas] = useState([])

    const onSubmit = (data, e) => {
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset();
        console.log(data)

        const postt = () => {
            axios.post(`${url}${bot.TOKEN}/sendMessage`,
                {
                    chat_id: bot.chatID,
                    text: `Tienes un nuevo subscritor:
Nombre: ${data.Nombre}
e-mail: ${data.descripcion}`,
                }
            )
                .then((response) => {
                    console.log(response);

                }).catch((error) => {
                    console.log(error);
                })
        }
        postt()
    }


    return (
        <div className="container d-flex align-items-center text-center" id="contactos">
            <Fragment>
                <form id="containercontacto" onSubmit={handleSubmit(onSubmit)}>
                    <h1>Mantente en contacto</h1>
                    <p>Regístrate para recibir noticias sobre nuevos lanzamientos y promociones esclusivas.</p>
                    <input
                        name="Nombre"
                        placeholder="Ingrese su nombre"
                        className="form-control my-2"
                        {...register("Nombre", { required: { value: true, message: 'Campo obligatorio' } })}
                    ></input>


                    <input
                        name="correo"
                        type="email"
                        placeholder="Ingrese su correo"
                        className="form-control my-2"
                        {...register("descripcion", { required: { value: true, message: 'Campo obligatorio' } })}
                    ></input>
                    <button
                        id="buttoncontacto"
                        type="submit"
                        className="btn btn-outline-warning mt-3 ">
                        Suscribirse
                        
                    </button>
                </form>
            </Fragment>
        </div>
    )
}