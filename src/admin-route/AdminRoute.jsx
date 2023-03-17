import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import { DataContext } from '../layout/Root';

const AdminRoute = ({ children }) => {
    const { users } = useContext(DataContext);
    const { user } = useContext(AuthContext);


    const userEmail = user?.email;
    const DatabaseUser = users.find(dbUser => dbUser?.email === userEmail)
    // console.log(DatabaseUser);
    if (DatabaseUser?.userRole === "admin") {
        return children
    }

    return <Navigate to={"/"}></Navigate>

};

export default AdminRoute;