import React from 'react';
import { useLoaderData } from 'react-router';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const MyGroups = () => {
    const myGroups = useLoaderData();
    c
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "This group will be deleted permanently!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://your-server-url.com/groups/${id}`, {
                    method: 'DELETE',
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'The group has been deleted.', 'success');
                            // Optionally reload or filter group from UI
                        }
                    });
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
                        {myGroups.map((group) => (
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
                                    <Link to={`/updateGroup/${group._id}`}>
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
                        ))}
                        {myGroups.length === 0 && (
                            <tr>
                                <td colSpan="6" className="text-center py-6 text-gray-500">
                                    You haven't created any groups yet.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyGroups;