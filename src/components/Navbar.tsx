import { useAuth } from "@/context/AuthContext";
import { Link, useMatchRoute, useNavigate } from "@tanstack/react-router"


const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();


    const matchRoute = useMatchRoute();
    const isLoginPage = matchRoute({ to: "/login" });




    const handleLogout = () => {
        logout()
        navigate({ to: "/dashboard" });
        console.log("User logged out");
    };


    return (
        <nav className=" md:flex justify-center fixed w-full items-center space-x-6 shadow-sm shadow-black  py-3">
            {user ? (
                <>
                    <Link className="font-semibold" to={"/dashboard"} >Dashboard</Link>
                    <Link className="font-semibold" to={"/products"} >Products</Link>
                    <button className="font-semibold cursor-pointer" onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <>
                    {isLoginPage ? (
                        <Link className="font-semibold" to={"/dashboard"} >Dashboard</Link>
                    ) : (
                        <Link className="font-semibold" to={"/login"} >Login</Link>
                    )}


                </>

            )}

        </nav>
    )
}

export default Navbar