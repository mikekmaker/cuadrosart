import React,{useEffect, useState} from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { isAuthenticated } from '../helpers/authorization';

const ProtectedRoute = () => {
    const [isAuth, setIsAuth] = useState(null);

    useEffect(() => {
        const checkAuth = async () => {
            const result = await isAuthenticated();
            setIsAuth(result);
        };
        
        checkAuth();
    },[]);

    if(isAuth === null) return <div>Loading...</div>

    // Redirect to login if not authenticated, otherwise render the protected component
    return isAuth ? <Outlet /> : <Navigate to="/ingresar" replace />;
};

export default ProtectedRoute;
