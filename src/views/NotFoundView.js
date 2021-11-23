import search from "../assets/search.svg"

export default function NotFoundView() {
    return (
        <div className="container">
            <div className='row d-flex justify-content-center align-items-center text-center'>

            <div class="col-lg-6 ">
              <img src={search} id="img" width="400px" height="400px" alt="" />
            </div>
            <h1>Error! pagina no encontrada</h1>
              <p>
                Sigue buscando!
              </p>
            </div>
        </div>
    )
}
