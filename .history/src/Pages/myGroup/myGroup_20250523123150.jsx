import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';



const MyGroups = () => {
    const singleGroup = useLoaderData();
    console.log(singleGroup)
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

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
            <img src={imageUrl} alt={groupName} className="w-full h-64 object-cover rounded-md mb-6" />
            <h2 className="text-3xl font-bold mb-2">{groupName}</h2>
            <p className="text-sm text-gray-500 mb-4">Category: <span className="font-medium">{hobbyCategory}</span></p>
            <p className="text-gray-700 mb-4">{description}</p>
            <p><strong>Meeting Location:</strong> {meetingLocation}</p>
            <p><strong>Max Members:</strong> {maxMembers}</p>
            <p><strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}</p>
            <p className="mt-4 text-sm text-gray-500">Created by: {displayName} ({email})</p>

            <div className="mt-6">

            </div>
        </div>
    );
};

export default MyGroups;