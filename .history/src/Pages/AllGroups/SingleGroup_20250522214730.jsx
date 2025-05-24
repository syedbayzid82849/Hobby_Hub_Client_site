import React from 'react';
import { Link } from 'react-router';

const SingleGroup = ({singleGroup}) => {
    console.log(singleGroup);
    const {imageUrl, groupName, hobbyCategory, startDate} = singleGroup;
    return (
        <div className="card space-y-1">
            <img className='rounded-2xl' src={imageUrl} />
            <h2 className='font-bold'>{groupName}</h2>
            <p><span className='font-semi-bold'>Category:</span>{hobbyCatt}</p>
            <p>Start Date: 2025-06-01</p>
            <Link>
                <button className='btn btn-primary'>See More</button>
            </Link>
        </div>
    );
};

export default SingleGroup;