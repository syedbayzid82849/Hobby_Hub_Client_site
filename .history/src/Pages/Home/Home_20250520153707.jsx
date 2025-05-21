// src/components/Home.jsx
import React from "react";
import { Link } from "react-router";


const Home = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center justify-center">
            <div className="max-w-5xl w-full bg-white rounded-2xl shadow-xl p-8">
                <header className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">HobbyHub</h1>
                    <Link to="/login" className="text-blue-600 hover:underline">
                        Log in
                    </Link>
                </header>

                <div className="text-center mb-10">
                    <h2 className="text-4xl font-bold text-gray-900 mb-2">
                        Discover local hobby groups
                    </h2>
                    <p className="text-gray-600 mb-4">
                        Find and join hobby-based groups in your area.
                    </p>
                    <Link
                        to="/groups"
                        className="px-5 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700"
                    >
                        Browse groups
                    </Link>
                </div>


            </div>
        </div>
    );
};

export default Home;
