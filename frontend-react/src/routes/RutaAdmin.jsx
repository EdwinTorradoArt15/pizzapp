import { Navigate } from "react-router-dom";
import { LOGIN } from "./paths";

const RutaAdmin = ({children}) => {
    if (localStorage.getItem("cargo") !== "admin") {
        return <Navigate to={LOGIN} />;
    }
  return (
    <>{children}</>
  )
}

export default RutaAdmin