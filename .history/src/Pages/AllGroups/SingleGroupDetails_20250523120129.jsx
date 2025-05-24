import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';



const SingleGroupDetails = () => {
    const singleGroup = useLoaderData();
    console.log(sin)
    const {
        groupName,
        hobbyCategory,
        description,
        meetingLocation,
        maxMembers,
        startDate,
        imageUrl,
        userName,
        userEmail
    } = singleGroup;

    // date chack
    const today = new Date();
    const groupStartDate = new Date(startDate);
    const isExpired = groupStartDate < today;

    // Join Group btn 
    const handleJoinGroup = () => {
        Swal.fire({
            icon: 'success',
            title: 'You have joined the group!',
            toast: true,
            position: 'top-end',
            timer: 2000,
            showConfirmButton: false
        });
    }

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md my-10">
            <img src={imageUrl} alt={groupName} className="w-full h-64 object-cover rounded-md mb-6" />
            <h2 className="text-3xl font-bold mb-2">{groupName}</h2>
            <p className="text-sm text-gray-500 mb-4">Category: <span className="font-medium">{hobbyCategory}</span></p>
            <p className="text-gray-700 mb-4">{description}</p>
            <p><strong>Meeting Location:</strong> {meetingLocation}</p>
            <p><strong>Max Members:</strong> {maxMembers}</p>
            <p><strong>Start Date:</strong> {new Date(startDate).toLocaleDateString()}</p>
            <p className="mt-4 text-sm text-gray-500">Created by: {userName} ({userEmail})</p>

            <div className="mt-6">
                {isExpired ? (
                    <p className="text-red-600 font-semibold">This group is no longer active.</p>
                ) : (
                    <button
                        onClick={handleJoinGroup}
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded"
                    >
                        Join Group
                    </button>
                )}
            </div>
        </div>
    );
};

export default SingleGroupDetails;