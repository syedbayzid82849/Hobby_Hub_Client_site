import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Contexts/AuthContext';
import { useContext } from "react";
import Swal from 'sweetalert2';


const MyGroups = () => {
    const { user } = useContext(AuthContext);
    const [myGroups, setMyGroups] = useState([]);

    co

    useEffect(() => {
        if (user?.email) {
            fetch(`https://hobbe-hub-server.vercel.app/my-groups/${user.email}`)
                .then(res => res.json())
                .then(data => setMyGroups(data));
        }
    }, [user]);

const handleDelete = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            // Proceed with delete
            fetch(`https://hobbe-hub-server.vercel.app/delete-group/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        swalWithBootstrapButtons.fire(
                            "Deleted!",
                            "Your group has been deleted.",
                            "success"
                        );
                        setMyGroups(myGroups.filter(group => group._id !== id));
                    }
                })
                .catch(err => console.error(err));
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire(
                "Cancelled",
                "Your group is safe :)",
                "error"
            );
        }
    });
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
                                                onClick={() => handleDelete(group._id)}
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