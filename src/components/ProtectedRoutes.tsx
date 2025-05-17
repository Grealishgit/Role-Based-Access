; import { useAuth } from "@/context/AuthContext";
import { Navigate } from "@tanstack/react-router";


const ProtectedRoutes = ({
    children,
    permissions,
    allowGuest = false
}: {
    children: React.ReactNode;
    permissions?: string[];
    allowGuest?: boolean;
}) => {
    const { user, hasPermission } = useAuth();
    console.log("ProtectedRoutes", user);

    //Allow guest user if `allowGuest` is true
    if (allowGuest && !user) {
        return children;
    }

    //Redirect to login if the user is not authenticated
    if (!user) {
        return <Navigate to="/login" />;
    }

    //Redirect to unauthorized if the user does not have the required permission
    if (permissions && !permissions.every((p) => hasPermission(p))) {
        return <Navigate to="/unauthorized" />;
    }
    //Render the children if the user is authenticated and has the required permission
    return children;
}

export default ProtectedRoutes;