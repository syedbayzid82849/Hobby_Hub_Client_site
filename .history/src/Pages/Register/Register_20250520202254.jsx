import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Register to HobbyHub</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-semibold">Name</label>
            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Email</label>
            <input type="email" name="email" placeholder="Enter your email" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Photo URL</label>
            <input type="text" name="photoURL" placeholder="Paste your photo URL" className="input input-bordered w-full" />
          </div>
          <div>
            <label className="block mb-1 font-semibold">Password</label>
            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered w-full" />
          </div>
          <p className="text-sm text-red-500">* Password must be at least 6 characters, include uppercase & lowercase letters</p>
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
