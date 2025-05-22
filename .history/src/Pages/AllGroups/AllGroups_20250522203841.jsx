import React from 'react';
import img from '../../assets/hero.png'
import { Link } from 'react-router';

const AllGroups = () => {
    const group = {
        groupName: "Weekend Photography Club",
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
            <h2 className="text-2xl font-bold mb-4">All Hobby Groups</h2>
            <div className='grid md:grid-cols-3'>
                <div className="card">
                    <img src={group.imageUrl} />
                    <h2>{group.groupName}</h2>
                    <p>Category: {group.hobbyCategory}</p>
                    <p>Start Date: {group.startDate}</p>
                    <Link to={`/group/${group._id}`}>
                        <button>See More</button>
                    </Link>
                </div>
                <div className="card">
                    <img src={group.imageUrl} />
                    <h2>{group.groupName}</h2>
                    <p>Category: {group.hobbyCategory}</p>
                    <p>Start Date: {group.startDate}</p>
                    <Link to={`/group/${group._id}`}>
                        <button>See More</button>
                    </Link>
                </div>
                <div className="card">
                    <img src={group.imageUrl} />
                    <h2>{group.groupName}</h2>
                    <p>Category: {group.hobbyCategory}</p>
                    <p>Start Date: {group.startDate}</p>
                    <Link to={`/group/${group._id}`}>
                        <button>See More</button>
                    </Link>
                </div>
                <div className="card">
                    <img src={group.imageUrl} />
                    <h2>{group.groupName}</h2>
                    <p>Category: {group.hobbyCategory}</p>
                    <p>Start Date: {group.startDate}</p>
                    <Link to={`/group/${group._id}`}>
                        <button>See More</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllGroups;
