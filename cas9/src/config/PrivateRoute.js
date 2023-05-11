import { getToken } from "./StorageFunctions";
import {Outlet,Navigate} from 'react-router-dom';

export const PrivateRoute = ({redirectPath="/login",children}) => {
    if(!getToken()){
        return <Navigate to={redirectPath} />
    }

    return children ? children : <Outlet/>
}