import { createContext, useContext, useState } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../context/auth";


export default function PrivateRoute({ children }){
const {auth} = useContext(AuthContext);

if(!auth){
    return <Navigate to="/login" />;
}

return children;

}
