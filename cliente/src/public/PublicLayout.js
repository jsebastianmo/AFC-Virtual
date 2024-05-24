import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PublicLayout = () => {
    const { token } = useAuth();
    return(
        <>
            {
                // !token ? 
                !token ?
                (
                    <Outlet />
                )
                :
                (
                    <Navigate to="/inicio" replace/>
                )
            }
        </>
    )
}

export default PublicLayout;