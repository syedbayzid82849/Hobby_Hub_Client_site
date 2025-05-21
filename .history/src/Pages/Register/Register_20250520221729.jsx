// import { useState } from "react";
// import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const Register = () => {
    const {j} = useContext(AuthContext);
    console.log(object);
    // const [error, setError] = useState("");

    const handleRegister = (e) => {
        e.preventDefault();
        
        // setError("");

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photoURL = form.photoURL.value;
        const password = form.password.value;
        console.log(name, email, photoURL, password);

        // // Password validation
        // const hasUpper = /[A-Z]/.test(password);
        // const hasLower = /[a-z]/.test(password);
        // const isLengthValid = password.length >= 6;

        // if (!hasUpper || !hasLower || !isLengthValid) {
        //     toast.error("❌ Password must be at least 6 characters and include uppercase & lowercase letters.");
        //     return;
        // }

        // // ✅ Register success
        // toast.success("✅ Registered successfully!");
        // form.reset();
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
