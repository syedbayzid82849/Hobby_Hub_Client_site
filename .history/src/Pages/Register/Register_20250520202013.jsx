import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase/firebase.config"; // update this path if needed

const Register = () => {
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        toast.success("Registration successful!");
        navigate("/");
    };
};

return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
        <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Register to HobbyHub</h2>
            <form onSubmit={handleRegister} className="space-y-4">
                <div>
                    <label className="block mb-1 font-semibold">Name</label>
                    <input type="text" name="name" required className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Email</label>
                    <input type="email" name="email" required className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Photo URL</label>
                    <input type="text" name="photoURL" required className="input input-bordered w-full" />
                </div>
                <div>
                    <label className="block mb-1 font-semibold">Password</label>
                    <input type="password" name="password" required className="input input-bordered w-full" />
                </div>
                {error && <p className="text-red-500 text-sm">{error}</p>}
                <button type="submit" className="btn btn-primary w-full">Register</button>
            </form>
            <p className="text-sm mt-4 text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
            </p>
        </div>
    </div>
);
};

export default Register;
