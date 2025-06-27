import { NavLink, Link, useNavigate } from 'react-router';
import logo from '../../assets/logo.png'
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
                        Swal.fire(
                            'Logged Out!',
                            'You have been successfully logged out.',
                            'success'
                        );
                        navigate('/');
                    })
                    .catch(error => {
                        console.error(error);
                        Swal.fire(
                            'Error!',
                            'Something went wrong while logging out.',
                            'error'
                        );
                    });
            }
        });
    };



    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-black"}
                >Home</NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-groups"
                    className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-black"}
                >All Groups</NavLink>
            </li>
            {
                user && (
                    <>
                        <li>
                            <NavLink
                                to="/create-group"
                                className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-black"}
                            >Create Group</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/my-groups"
                                className={({ isActive }) => isActive ? "text-blue-600 font-semibold" : "text-black"}
                            >My Groups</NavLink>
                        </li>
                    </>
                )}
        </>
    );


    return (
        <div className="navbar text-[#f6f8fa] shadow-sm b-black">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden text-black">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white text-black rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                        {user ? (
                            <NavLink onClick={() => { handleLogOutBtn() }} to="/" className="btn  md:inline-flex text-black bg-white border border-gray-300 hover:bg-gray-100">
                                LogOut
                            </NavLink>
                        ) : (
                            <>
                                <NavLink to="/login" className="btn  md:inline-flex text-black bg-white border border-gray-300 hover:bg-gray-100">
                                    Log in
                                </NavLink>
                                <NavLink to="/register" className="btn mt-2  md:inline-flex text-black bg-white border border-gray-300 hover:bg-gray-100">
                                    Register
                                </NavLink>
                            </>
                        )}
                    </ul>

                </div>
                <NavLink to='/'>
                    <button className="btn flex items-center text-xl text-black bg-transparent shadow-none hover:bg-transparent hover:shadow-none focus:shadow-none active:shadow-none border-none "><img src={logo} alt="Logo" className="w-6" />
                        HobbyHub</button>
                </NavLink>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>

            <div className="navbar-end gap-2">
                <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "User"}>
                    <Link to="/profile">
                        <img
                            className="w-10 h-10 border border-black rounded-full"
                            src={user?.photoURL ? user.photoURL : profile}
                            alt="Profile"
                        />
                    </Link>
                </div>
                {user ? (
                    <NavLink onClick={() => { handleLogOutBtn() }} to="/" className="btn hidden md:inline-flex text-black bg-white border border-gray-300 hover:bg-gray-100">
                        LogOut
                    </NavLink>
                ) : (
                    <>
                        <NavLink to="/login" className="btn hidden md:inline-flex text-black bg-white border border-gray-300 hover:bg-gray-100">
                            Log in
                        </NavLink>
                        <NavLink to="/register" className="btn hidden md:inline-flex text-black bg-white border border-gray-300 hover:bg-gray-100">
                            Register
                        </NavLink>
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;
