import axios from "axios";

//esta url e de mocp api
const URL = `https://app-backend-ecommerce.herokuapp.com`;

const LaData = async (busqueda = "") => {
  try {
    const { data } = await axios.get(`${URL}?search=${busqueda}`);
    // console.log('data de '  ,data)
    return data
  } catch (error) {
    throw error;
  }
};
const obtenerProductosPorPagina = async (pagina = 1, limite = 9) => {
  try {
      let { data } = await axios.get(`${URL}?page=${pagina}&limit=${limite}`);
      return data;
  } catch (error) {
      throw error;
  }
};
const obtenerProductoPorId = async (id) => {
  try {
      let { data } = await axios.get(`${URL}/${id}`);
      console.log(data)
      return data;
  } catch (error) {
      throw error;
  }
};


export {LaData,obtenerProductosPorPagina,obtenerProductoPorId}
