import React from 'react';
import img from '../../assets/hero.png'

const AllGroups = () => {
    const group = {
        groupName: "Weekend Photography Club",
        hobbyCategory: "Photography",
        description: "Join us every weekend for nature and cityscape photography sessions!",
        meetingLocation: "Central Park, New York",
        maxMembers: 15,
        startDate: "2025-06-01",
        imageUrl:{img},
        creatorName: "John Doe",
        creatorEmail: "john@example.com"
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">All Hobby Groups</h2>

            <div className="card w-full md:w-96 bg-base-100 shadow-xl mx-auto">
                <figure>
                    <img src={group.imageUrl} alt="Group Banner" className="h-48 w-full object-cover" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{group.groupName}</h2>
                    <p><strong>Category:</strong> {group.hobbyCategory}</p>
                    <p><strong>Description:</strong> {group.description}</p>
                    <p><strong>Location:</strong> {group.meetingLocation}</p>
                    <p><strong>Max Members:</strong> {group.maxMembers}</p>
                    <p><strong>Start Date:</strong> {group.startDate}</p>
                    <p><strong>Created by:</strong> {group.creatorName} ({group.creatorEmail})</p>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-primary">See More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllGroups;
