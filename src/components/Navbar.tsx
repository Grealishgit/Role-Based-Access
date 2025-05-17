import { useAuth } from "@/context/AuthContext";
import { Link, useMatchRoute, useNavigate } from "@tanstack/react-router"
import { useState } from "react";


const Navbar = () => {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [navbarOpen, setNavbarOpen] = useState(false);

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
                <div className="flex flex-row ">
                    {user && <p className="font-semibold md:block hidden pr-5">Welcome, {user?.username}</p>}
                    <div onClick={() => setNavbarOpen(!navbarOpen)} className="w-7 h-7 mr-8 flex md:hidden rounded-md bg-red-500 border border-red-500" />
                </div>
            </div>
            {/* Mobile Navbar */}
            {navbarOpen && (
                <div className="md:hidden absolute shadow-md shadow-black right-5  top-20  w-40 rounded-lg h-50 flex flex-col  bg-gray-300 ">
                    {user ? (
                        <div className="flex flex-col items-left mx-3 mt-5">
                            <Link onClick={() => setNavbarOpen(!navbarOpen)} className="font-semibold text-lg text-left" to={"/dashboard"} >Dashboard</Link>
                            <Link onClick={() => setNavbarOpen(!navbarOpen)} className="font-semibold text-lg text-left" to={"/products"} >Products</Link>
                            <button className="font-semibold text-lg text-left cursor-pointer" onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (

                        <div className="flex flex-col items-center justify-center mx-3 mt-5">
                            {isLoginPage ? (
                                <Link className="font-semibold" to={"/dashboard"} >Dashboard</Link>
                            ) : (
                                <Link onClick={() => setNavbarOpen(!navbarOpen)} className="font-semibold rounded-lg px-4 py-1 border border-gray-600" to={"/login"} >Login</Link>
                            )}
                        </div>
                    )}
                </div>
            )}

        </nav>
    )
}

export default Navbar