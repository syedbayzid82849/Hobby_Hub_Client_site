import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/AuthContext";
import toast from "react-hot-toast";

const CreateGroup = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        
    }


    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow my-10">
            <h2 className="text-2xl font-bold mb-4">Create a Hobby Group</h2>
            <form onSubmit={handleSubmit} className="space-y-4 ">
                <input type="text" name="groupName" value={formData.groupName}  placeholder="Group Name" className="input input-bordered w-full" required />

                <select name="hobbyCategory" value={formData.hobbyCategory}  className="select select-bordered w-full" required>
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

                <textarea name="description" value={formData.description}  placeholder="Description" className="textarea textarea-bordered w-full" required />

                <input type="text" name="meetingLocation" value={formData.meetingLocation}  placeholder="Meeting Location" className="input input-bordered w-full" required />

                <input type="number" name="maxMembers" value={formData.maxMembers}  placeholder="Max Members" className="input input-bordered w-full" required />

                <input type="date" name="startDate" value={formData.startDate}  className="input input-bordered w-full" required />

                <input type="url" name="imageUrl" value={formData.imageUrl}  placeholder="Image URL" className="input input-bordered w-full" required />

                <input type="text" value={user?.displayName || "No Name"} readOnly className="input input-bordered w-full bg-gray-100" />
                <input type="email" value={user?.email || "No email"} readOnly className="input input-bordered w-full bg-gray-100" />

                <button type="submit" className="btn btn-primary w-full">Create</button>
            </form>
        </div>
    );
};

export default CreateGroup;

