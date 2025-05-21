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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    {/* Group Card 1 */}
                    <div className="bg-gray-50 rounded-xl shadow p-4 text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Book Club"
                            className="rounded-md w-full h-32 object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">Book Club</h3>
                        <p className="text-gray-500">18 members</p>
                    </div>

                    {/* Group Card 2 */}
                    <div className="bg-gray-50 rounded-xl shadow p-4 text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Hiking Crew"
                            className="rounded-md w-full h-32 object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">Hiking Crew</h3>
                        <p className="text-gray-500">24 members</p>
                    </div>

                    {/* Group Card 3 */}
                    <div className="bg-gray-50 rounded-xl shadow p-4 text-center">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Painting Circle"
                            className="rounded-md w-full h-32 object-cover mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">Painting Circle</h3>
                        <p className="text-gray-500">16 members</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
                    <div className="p-4 bg-white rounded-xl border">
                        <h4 className="text-xl font-semibold mb-2">Join a group</h4>
                        <p className="text-gray-600">
                            Explore a variety of hobby groups and connect with like-minded people.
                        </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border">
                        <h4 className="text-xl font-semibold mb-2">Start a new group</h4>
                        <p className="text-gray-600">
                            Create your own hobby group and find others who share your interests.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
