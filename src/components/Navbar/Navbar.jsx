import { useContext } from "react";
import userLogo from "../../assets/user.png"
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>

    const handleSignOut = () =>{
        logoutUser()
    }


    return (
        <>
            <div>
                <div className="my-5">
                    <div className="navbar bg-base-100">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h8m-8 6h16" />
                                    </svg>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    {navLinks}
                                </ul>
                            </div>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1">
                                {navLinks}
                            </ul>
                        </div>
                        <div className="navbar-end gap-2">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src={userLogo} alt="" />
                                </div>
                            </div>
                            {
                                user ?
                                    <Link to="/">
                                        <button className="px-8 py-2 bg-[#403F3F] text-white text-xl font-semibold" onClick={handleSignOut}>signOut</button>
                                    </Link>
                                    :
                                    <Link to="/login">
                                        <button className="px-8 py-2 bg-[#403F3F] text-white text-xl font-semibold">Login</button>
                                    </Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;