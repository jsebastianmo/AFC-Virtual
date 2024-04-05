import { Navigate, Outlet } from "react-router-dom";
import PrivateMenu from "./PrivateMenu";
import useAuthContext from "../hooks/useAuthContext";

const PrivateLayout = () => {
    const { isUser } = useAuthContext();
    return(
        <>
            {
                isUser ? 
                (
                    <>
                        <PrivateMenu>
                            <Outlet />
                        </PrivateMenu>
                    </>
                )
                :
                (
                    <Navigate to="/" />
                )
            }
        </>
    )
}

export default PrivateLayout;