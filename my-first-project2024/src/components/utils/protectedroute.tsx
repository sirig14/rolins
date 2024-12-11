import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
    redirectPath = '/'
}) => {
    if (!isValidPassword) {
        return <Navigate to={redirectPath} replace />
    }
    return <Outlet />;
}

export default ProtectedRoute;