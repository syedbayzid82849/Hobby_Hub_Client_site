import React from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { useContext } from "react";


const MyGroups = () => {
    const { user } = useContext(AuthContext);
    console.log(user.email)

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">My Created Groups</h2>
            <div className="overflow-x-auto">
                <table className="table w-full border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th>Image</th>
                            <th>Group Name</th>
                            <th>Category</th>
                            <th>Max Members</th>
                            <th>Start Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr >
                            <td>
                                <img
                                    className="w-16 h-16 object-cover rounded"
                                />
                            </td>
                            <td>groupName</td>
                            <td>hobbyCategory</td>
                            <td>maxMembers</td>
                            <td>start date</td>
                            <td className="space-x-2">
                                <Link>
                                    <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                                        Update
                                    </button>
                                </Link>
                                <button

                                    className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                            <tr>
                                <td colSpan="6" className="text-center py-6 text-gray-500">
                                    You haven't created any groups yet.
                                </td>
                            </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyGroups;