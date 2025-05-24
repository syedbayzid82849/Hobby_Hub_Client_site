import { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../../Contexts/AuthContext";

const MyGroups = () => {
    const { user } = useContext(AuthContext);
    const [groups, setGroups] = useState([]);
    const [loading, setLoading] = useState(true);


    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://your-server-url.com/groups/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount > 0) {
                            Swal.fire("Deleted!", "Your group has been deleted.", "success");
                            setGroups(groups.filter((group) => group._id !== id));
                        }
                    });
            }
        });
    };

    if (loading) {
        return <div className="text-center mt-10">Loading...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h2 className="text-3xl font-bold mb-6 text-center">My Created Groups</h2>
            {groups.length === 0 ? (
                <p className="text-center">You haven't created any groups yet.</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border rounded-lg">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-3">Group Name</th>
                                <th className="p-3">Category</th>
                                <th className="p-3">Location</th>
                                <th className="p-3">Members</th>
                                <th className="p-3">Start Date</th>
                                <th className="p-3">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {groups.map((group) => (
                                <tr key={group._id} className="border-t">
                                    <td className="p-3">{group.groupName}</td>
                                    <td className="p-3">{group.category}</td>
                                    <td className="p-3">{group.location}</td>
                                    <td className="p-3">{group.maxMembers}</td>
                                    <td className="p-3">{group.startDate}</td>
                                    <td className="p-3 space-x-2">
                                        <Link
                                            to={`/updateGroup/${group._id}`}
                                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                                        >
                                            Update
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
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyGroups;
