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
        <nav className=" md:flex justify-center bg-gray-100 z-50 fixed w-full items-center space-x-6 shadow-sm shadow-black  py-3">
            <div className="flex justify-between mx-4 items-center w-full ">
                <div>
                    <h2 className="text-lg font-semibold">Kilimall Mtaani</h2>
                </div>
                <div className="md:flex hidden space-x-4">
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
                </div>
                <div>
                    {user && <p className="font-semibold pr-5">Welcome, {user?.username}</p>}
                </div>
            </div>


        </nav>
    )
}

export default Navbar