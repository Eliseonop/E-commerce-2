import { useContext } from "react";
import { AuthContext} from "../context/AuthContext"
import { Navigate } from "react-router-dom"; //redirect v5

export default function PrivateRoute(props) {
    // props.children es literalmente no se que componente voy a renderizar pero lo renderiza de todas maneras, el componente que este dentro de PrivateRoute
    const { currentUser } = useContext(AuthContext);
    console.log("mostrando estado user", currentUser);
    // para que uso Navigate, para redireccionar
    //si es que el usuario es diferente de NUll
    //--V: retorno el hijo que me toque
    //--F: lo redirijo a Login con Navigate
    // !== diferente de
    //operador ternario
    return currentUser === null ? props.children : <Navigate to="/home" />;
}