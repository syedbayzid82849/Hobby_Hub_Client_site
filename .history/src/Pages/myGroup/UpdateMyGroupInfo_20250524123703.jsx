import React from 'react';
import { useLoaderData } from 'react-router';
// import Swal from 'sweetalert2';


const UpdateMyGroupInfo = () => {
    // const navigate = useNavigate();
    const singleGroup = useLoaderData();
    const {
        groupName,
        hobbyCategory,
        description,
        meetingLocation,
        maxMembers,
        startDate,
        imageUrl,
        displayName,
        email
    } = singleGroup;

    const handleSubmit = e => {
        // const form = e.target;
        // const formData = new FormData(form);
        // const updatedGroup = Object.fromEntries(formData.entries());
        // console.log(updatedGroup);

        fetch(`http://localhost:3000/all-groups/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedGroup)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // if (data.modifiedCount > 0) {
                //     Swal.fire({
                //         icon: 'success',
                //         title: 'Group Updated Successfully!',
                //         toast: true,
                //         position: 'top-end',
                //         timer: 2000,
                //         showConfirmButton: false
                //     });
                //     navigate('/myGroups');
                // }
            });
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-[90%] max-w-2xl">
                <h2 className="text-xl font-bold mb-4">Update Group</h2>
                <form onSubmit={handleSubmit} className="grid gap-3">
                    <input name="groupName" value={formData.groupName} placeholder="Group Name" required />
                    <input name="hobbyCategory" value={formData.hobbyCategory} placeholder="Hobby Category" required />
                    <textarea name="description" value={formData.description} placeholder="Description" />
                    <input name="meetingLocation" value={formData.meetingLocation} placeholder="Meeting Location" required />
                    <input name="maxMembers" type="number" value={formData.maxMembers} placeholder="Max Members" required />
                    <input name="startDate" type="date" value={formData.startDate?.split('T')[0]} required />
                    <input name="imageUrl" value={formData.imageUrl} placeholder="Image URL" required />
                    <div className="flex justify-end space-x-2 mt-4">
                        <button type="button" className="px-3 py-1 bg-gray-400 text-white rounded">Cancel</button>
                        <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyGroupInfo;