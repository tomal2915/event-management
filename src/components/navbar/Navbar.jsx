import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import { context } from "../../context/AuthContext"
import { ToastContainer, toast } from "react-toastify";


const Navbar = () => {

    const { user, logOut } = useContext(context);
    console.log(user);

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast('Successfully Logout');
            })
            .catch((error) => {
                toast(error.message);
            })
    }

    const navLink = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/events">Services </NavLink></li>
        <li><NavLink to="/works">Works</NavLink></li>
        <li><NavLink to="/blogs">Blogs</NavLink></li>
        <li><NavLink to="/aboutUs">About Us</NavLink></li>
        <li><NavLink to="contactUs">Contact Us</NavLink></li>
    </>

    return (
        <div className="navbar max-w-7xl mx-auto bg-transparent"
            style={{
                position: 'fixed', // Fixed position to keep it on top
                top: 0,
                left: 0,
                right: 0,
                zIndex: 1000, // Corrected the camelCase property name
            }}>
            <div className="navbar-start">
            <ToastContainer />
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 font-bold bg-white text-xl rounded-box w-50">
                        {navLink}
                    </ul>
                </div>
                {/* <img className="w-[70px] h-[50px]" src="https://i.ibb.co/4t9KtF0/logo.png" alt="" /> */}
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2 font-bold text-black text-xl">
                    {navLink}
                </ul>
            </div>
            {
                user ?
                    <div className="navbar-end">
                        <div className="flex flex-row gap-2 items-center bg-slate-300 rounded-lg p-2">
                            <div className="avatar">
                                <div className="w-12 h-12 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </div>
                            <p className="font-bold ">{user.displayName}</p>
                        </div>
                        <button onClick={handleSignOut} className="btn bg-slate-300 ml-4">Sign Out</button>
                    </div>
                    :
                    <div className="navbar-end">
                        <Link to='/signIn'><button className="btn bg-slate-300">Log In</button></Link>
                    </div>
            }

        </div>
    )
}

export default Navbar