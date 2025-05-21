import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";

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
        
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const isLongEnough = password.length >= 6;

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
            </div>
        </div>
    );
};

export default Register;
