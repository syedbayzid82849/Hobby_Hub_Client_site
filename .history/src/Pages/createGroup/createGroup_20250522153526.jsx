import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

const CreateGroup = () => {
    const { user } = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newCategory = Object.fromEntries(formData.entries());
        console.log(newCategory);

        // send group data to db
        fetch('https://hobbe-hub-server.vercel.app/all-groups', {
            method: "POST", 
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newCategory)
        })
            .then(res => res.json())
            .then(data => {
                console.log("after added"data)
            })
    }


    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded shadow my-10">
            <h2 className="text-2xl font-bold mb-4">Create a Hobby Group</h2>
            <form onSubmit={handleSubmit} className="space-y-4 ">
                <input type="text" name="groupName"  placeholder="Group Name" className="input input-bordered w-full" required />

                <select name="hobbyCategory"  className="select select-bordered w-full" required>
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

                <textarea name="description"  placeholder="Description" className="textarea textarea-bordered w-full" required />

                <input type="text" name="meetingLocation"  placeholder="Meeting Location" className="input input-bordered w-full" required />

                <input type="number" name="maxMembers"  placeholder="Max Members" className="input input-bordered w-full" required />

                <input type="date" name="startDate"  className="input input-bordered w-full" required />

                <input type="url" name="imageUrl"  placeholder="Image URL" className="input input-bordered w-full"  />

                <input type="text" value={user?.displayName || "No Name"} readOnly className="input input-bordered w-full bg-gray-100" />
                <input type="email" value={user?.email || "No email"} readOnly className="input input-bordered w-full bg-gray-100" />

                <button type="submit" className="btn btn-primary w-full">Create</button>
            </form>
        </div>
    );
};

export default CreateGroup;

