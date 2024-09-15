import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from '../firebase';

const PrivateRoute = ({ element: Element, ...rest }) => {
    const [user] = useAuthState(auth);

    return (
        <Route
            {...rest}
            element={user ? <Element /> : <Navigate to="/login" />}
        />
    );
};

export default PrivateRoute;
