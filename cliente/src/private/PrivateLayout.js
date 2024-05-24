import { Navigate, Outlet } from "react-router-dom";
import PrivateMenu from "./PrivateMenu";
import useAuth from "../hooks/useAuth";

const PrivateLayout = () => {
    const { token } = useAuth(); 
    return(
        <>
            {
                // !token ? 
                token ?
                (
                    <>
                        <PrivateMenu>
                            <Outlet />
                        </PrivateMenu>
                    </>
                )
                :
                (
                    <Navigate to="/" replace/>
                )
            }
        </>
    )
}

export default PrivateLayout;