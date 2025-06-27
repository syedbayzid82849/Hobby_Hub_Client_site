import { NavLink, Link, useNavigate } from 'react-router'; 
import logo from '../../assets/logo.png';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthContext';
import profile from '../../assets/profile.jpg';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogOutBtn = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to log out!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                logOutUser()
                    .then(() => {
                        Swal.fire('Logged Out!', 'You have been successfully logged out.', 'success');
                        navigate('/');
                    })
                    .catch(error => {
                        console.error(error);
                        Swal.fire('Error!', 'Something went wrong while logging out.', 'error');
                    });
            }
        });
    };

    const navLinks = (
        <>
            <li><NavLink to="/" className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-gray-700"}>Home</NavLink></li>
            <li><NavLink to="/all-groups" className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-gray-700"}>All Groups</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-gray-700"}>About Us</NavLink></li>
            <li><NavLink to="/contact" className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-gray-700"}>Contact</NavLink></li>
            <li><NavLink to="/support" className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-gray-700"}>Support</NavLink></li>
            {
                user && (
                    <>
                        <li><NavLink to="/create-group" className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-gray-700"}>Create Group</NavLink></li>
                        <li><NavLink to="/my-groups" className={({ isActive }) => isActive ? "text-primary font-semibold" : "text-gray-700"}>My Groups</NavLink></li>
                    </>
                )
            }
        </>
    );

    return (
        <div className="max-w-screen-xl mx-auto sticky top-0 z-50 bg-white shadow-md">
            <div className="navbar  px-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                            {
                                user ? (
                                    <li><button onClick={handleLogOutBtn} className="btn btn-outline">Logout</button></li>
                                ) : (
                                    <>
                                        <li><NavLink to="/login" className="btn btn-sm btn-outline">Login</NavLink></li>
                                        <li><NavLink to="/register" className="btn btn-sm btn-outline">Register</NavLink></li>
                                    </>
                                )
                            }
                        </ul>
                    </div>
                    <Link to="/" className="flex items-center gap-2 text-xl font-bold text-primary">
                        <img src={logo} alt="Logo" className="w-8 h-8" />
                        HobbyHub
                    </Link>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">{navLinks}</ul>
                </div>

                <div className="navbar-end gap-2">
                    <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "User"}>
                        <Link to="/profile">
                            <img
                                className="w-10 h-10 border border-gray-300 rounded-full"
                                src={user?.photoURL || profile}
                                alt="Profile"
                            />
                        </Link>
                    </div>
                    {
                        user ? (
                            <button onClick={handleLogOutBtn} className="btn btn-sm btn-outline">Logout</button>
                        ) : (
                            <>
                                <NavLink to="/login" className="btn btn-sm btn-outline">Login</NavLink>
                                <NavLink to="/register" className="btn btn-sm btn-outline">Register</NavLink>
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;
