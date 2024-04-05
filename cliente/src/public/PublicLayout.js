import { Navigate, Outlet } from "react-router-dom";
import useAuthContext from "../hooks/useAuthContext";

const PublicLayout = () => {
    const { isUser } = useAuthContext();
    return(
        <>
            {
                !isUser ? 
                (
                    <>
                        <Outlet />
                    </>
                )
                :
                (
                    <Navigate to="/home" />
                )
            }
        </>
    )
}

export default PublicLayout;