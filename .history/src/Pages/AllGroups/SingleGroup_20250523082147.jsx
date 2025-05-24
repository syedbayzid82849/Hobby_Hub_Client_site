import React from 'react';
import { Link } from 'react-router';

const SingleGroup = ({ singleGroup }) => {
    console.log(singleGroup);
    const { imageUrl, groupName, hobbyCategory, startDate } = singleGroup;
    return (
        <div className="card space-y-1 ">
            <img className='rounded-2xl' src={imageUrl} />
            <div className="px-3">
                <h2 className='font-bold text-2xl'>{groupName}</h2>
                <p><span className='font-bold'>Category:</span> {hobbyCategory}</p>
                <p><span className='font-bold'>Start Date:</span> {startDate}</p>
                <Link>
                    <button className='bg-blue-500 text-white py-1 px-2 m rounded-3xl'>See More</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleGroup;