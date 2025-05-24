import React from 'react';
import { Link } from 'react-router';

const AllGroups = () => {
    const group = {
        groupName: "",
        hobbyCategory: "Photography",
        description: "Join us every weekend for nature and cityscape photography sessions!",
        meetingLocation: "Central Park, New York",
        maxMembers: 15,
        startDate: "2025-06-01",
        imageUrl: "https://i.ibb.co/RG9QsG3x/image.png",
        creatorName: "John Doe",
        creatorEmail: "john@example.com"
    };

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold m-9 text-center">All Hobby Groups</h2>
            <div className='grid md:grid-cols-3 m-5 gap-5'>
                
            </div>
        </div>
    );
};

export default AllGroups;
