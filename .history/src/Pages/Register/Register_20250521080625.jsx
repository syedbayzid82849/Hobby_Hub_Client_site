import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const { createUser } = useContext(AuthContext);
    console.log(createUser);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;

        // password check 
        const isUpperCase = /[A-Z]/.test(password);
        const isLowerCase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;
        if (!isUpperCase) {
            toast.error("Password must contain at least one uppercase letter");
            return;
        }

        if (!isLowerCase) {
            toast.error("Password must contain at least one lowercase letter");
            return;
        }

        if (!isLongEnough) {
            toast.error("Password must be at least 6 characters long");
            return;
        }

        createUser(email, password)
            .then(result => {
                console.log(result.user);
                toast.success("Registered successfully ✅");
                form.reset();
            })
            .catch((error) => {
                console.error(error);
                toast.error(error.message);
            });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
            <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-6 text-center">Register to HobbyHub</h2>
                {/* Google Sign In Button */}
                <button
                    
                    className="btn btn-outline btn-info mb-6 flex items-center justify-center gap-2 w-full"
                    type="button"
                >
                    <FcGoogle size={24} /> Register with Google
                </button>
                <div className="flex items-center w-full my-4">
                    <hr className="w-full dark:text-gray-600" />
                    <p className="px-3 dark:text-gray-600">OR</p>
                    <hr className="w-full dark:text-gray-600" />
                </div>
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
                    <button type="submit" className="btn btn-primary w-full">Register</button>
                </form>
                <p className="text-center mt-4 text-sm">
                    Already have an account?{" "}
                    <Link to="/login" className="text-blue-600 hover:underline font-semibold">
                        Log In
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
