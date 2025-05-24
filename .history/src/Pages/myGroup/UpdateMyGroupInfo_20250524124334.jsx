import React from 'react';
import { useLoaderData } from 'react-router';
// import Swal from 'sweetalert2';


const UpdateMyGroupInfo = () => {
    // const navigate = useNavigate();
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
    } = useLoaderData();

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
                    <input type="text" name="groupName" placeholder="Group Name" className="input input-bordered w-full" required />

                    <select name="hobbyCategory" className="select select-bordered w-full" required>
                        <option value="">Select Hobby Category</option>
                        <option value="Drawing & Painting">Drawing & Painting</option>
                        <option value="Photography">Photography</option>
                        <option value="Video Gaming">Video Gaming</option>
                        <option value="Fishing">Fishing</option>
                        <option value="Running">Running</option>
                        <option value="Cooking">Cooking</option>
                        <option value="Reading">Reading</option>
                        <option value="Writing">Writing</option>
                    </select>

                    <textarea name="description" placeholder="Description" className="textarea textarea-bordered w-full" required />

                    <input type="text" name="meetingLocation" placeholder="Meeting Location" className="input input-bordered w-full" required />

                    <input type="number" name="maxMembers" placeholder="Max Members" className="input input-bordered w-full" required />

                    <input type="date" name="startDate" className="input input-bordered w-full" required />

                    <input type="url" name="imageUrl" placeholder="Image URL" className="input input-bordered w-full" />

                    <input name="displayName" type="text" value={.displayName || "No Name"} readOnly className="input input-bordered w-full bg-gray-100" />
                    <input name="email" type="email" value={.email || "No email"} readOnly className="input input-bordered w-full bg-gray-100" />
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