import React from 'react';
import { Link, useLoaderData } from 'react-router';
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
        <div className="max-w-3xl mx-auto px-4 py-10">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-4">Update Your Group:</h2>
                <form onSubmit={handleSubmit} className="grid gap-3">

                    <label>
                        <span className="label-text font-medium">Group Name</span>
                        <input type="text" name="groupName" defaultValue={groupName} placeholder="Group Name" className="input input-bordered w-full" required />
                    </label>

                    <label>
                        <span className="label-text font-medium">Hobby Category</span>
                        <select name="hobbyCategory" defaultValue={hobbyCategory} className="select select-bordered w-full" required>
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
                    </label>

                    <label>
                        <span className="label-text font-medium">Description</span>
                        <textarea name="description" defaultValue={description} placeholder="Description" className="textarea textarea-bordered w-full" required />
                    </label>

                    <label>
                        <span className="label-text font-medium">Meeting Location</span>
                        <input type="text" name="meetingLocation" defaultValue={meetingLocation} placeholder="Meeting Location" className="input input-bordered w-full" required />
                    </label>

                    <label>
                        <span className="label-text font-medium">Max Members</span>
                        <input type="number" name="maxMembers" defaultValue={maxMembers} placeholder="Max Members" className="input input-bordered w-full" required />
                    </label>

                    <label>
                        <span className="label-text font-medium">Start Date</span>
                        <input type="date" name="startDate" defaultValue={startDate?.split('T')[0]} className="input input-bordered w-full" required />
                    </label>

                    <label>
                        <span className="label-text font-medium">Image URL</span>
                        <input type="url" name="imageUrl" defaultValue={imageUrl} placeholder="Image URL" className="input input-bordered w-full" />
                    </label>

                    <label>
                        <span className="label-text font-medium">Display Name</span>
                        <input name="displayName" type="text" defaultValue={displayName} className="input input-bordered w-full bg-gray-100" readOnly />
                    </label>

                    <label>
                        <span className="label-text font-medium">Email</span>
                        <input name="email" type="email" defaultValue={email} className="input input-bordered w-full bg-gray-100" readOnly />
                    </label>

                    <div className="flex justify-end space-x-2 mt-4">
                        <Link to><button type="button" className="px-3 py-1 bg-gray-400 text-white rounded">Cancel</button></Link>
                        <button type="submit" className="px-3 py-1 bg-blue-600 text-white rounded">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateMyGroupInfo;