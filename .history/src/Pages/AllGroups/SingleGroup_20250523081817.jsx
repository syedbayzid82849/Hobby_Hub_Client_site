import React from 'react';
import { Link } from 'react-router';

const SingleGroup = ({ singleGroup }) => {
    console.log(singleGroup);
    const { imageUrl, groupName, hobbyCategory, startDate } = singleGroup;
    return (
        <div className="card space-y-1 ">
            <img className='rounded-2xl' src={imageUrl} />
            <div className="px-30">
                <h2 className='font-bold'>{groupName}</h2>
                <p><span className='font-semi-bold'>Category:</span> {hobbyCategory}</p>
                <p><span>Start Date:</span> {startDate}</p>
                <Link>
                    <button className='btn btn-primary'>See More</button>
                </Link>
            </div>
        </div>
    );
};

export default SingleGroup;