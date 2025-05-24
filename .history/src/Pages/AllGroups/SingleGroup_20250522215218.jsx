import React from 'react';
import { Link } from 'react-router';

const SingleGroup = ({singleGroup}) => {
    console.log(singleGroup);
    const {imageUrl, groupName, hobbyCategory, startDate} = singleGroup;
    return (
        <div className="card space-y-1 border-1">
            <img className='rounded-2xl' src={imageUrl} />

        </div>
    );
};

export default SingleGroup;