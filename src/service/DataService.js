import axios from "axios";

//esta url e de mocp api
const URL = `https://app-backend-ecommerce.herokuapp.com/productos`;

const LaData = async (busqueda = "") => {
  try {
    const { data } = await axios.get(`${URL}?search=${busqueda}`);
    // console.log('data de '  ,data)
    return data;
  } catch (error) {
    throw error;
  }
};
const obtenerProductosPorPagina = async (pagina = 1, limite = 9) => {
  try {
    let { data } = await axios.get(
      `https://app-backend-ecommerce.herokuapp.com/productos`
    );
    return data;
  } catch (error) {
    throw error;
  }
};
const obtenerProductoPorId = async (id) => {
  try {
    let { data } = await axios.get(
      `https://app-backend-ecommerce.herokuapp.com/producto/${id}`
    );

    return data.producto;
  } catch (error) {
    throw error;
  }
};
// aqui van las reques creadas en el backend
const request = axios.create({
  baseURL: `${process.env.REACT_APP_BACK_URL}/`,
  headers: {
    "Content-Type": "application/json",
  },
});

export const crearProducto = (data, token) => {
  return request.post("/productos", data, {
    headers: { authorization: `Bearer ${token}` },
  });
};

export const listarProductos = (token) => {
  return request.get("/tarea", {
    headers: { authorization: `Bearer ${token}` },
  });
};

// TODO: actualizarTarea eliminarTarea

export { LaData, obtenerProductosPorPagina, obtenerProductoPorId };
