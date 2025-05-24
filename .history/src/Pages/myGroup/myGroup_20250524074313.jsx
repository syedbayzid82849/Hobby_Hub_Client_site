import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { useContext } from "react";


const MyGroups = () => {
    const { user } = useContext(AuthContext);
    const [myGroups, setMyGroups] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`https://hobbe-hub-server.vercel.app/my-groups/${user.email}`)
                .then(res => res.json())
                .then(data => setMyGroups(data));
        }
    }, [user]);

    const handleDelete = (email) => {
        console.log(email);
        fetch(`https://hobbe-hub-server.vercel.app/delete-group/${email}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    };

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
                        {
                            myGroups.map(group => {
                                console.log(object);
                                return (
                                    <tr key={group._id}>
                                        <td>
                                            <img
                                                src={group.imageUrl}
                                                alt={group.groupName}
                                                className="w-16 h-16 object-cover rounded"
                                            />
                                        </td>
                                        <td>{group.groupName}</td>
                                        <td>{group.hobbyCategory}</td>
                                        <td>{group.maxMembers}</td>
                                        <td>{new Date(group.startDate).toLocaleDateString()}</td>
                                        <td className="space-x-2">
                                            <Link to={`/update-group/${group._id}`}>
                                                <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600">
                                                    Update
                                                </button>
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(group.email)}
                                                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyGroups;