import React from 'react';

const SingleGroup = () => {
    return (
        <div className="card space-y-1">
            <img className='rounded-2xl' src='https://i.ibb.co/RG9QsG3x/image.png' />
            <h2 className='font-bold'>Weekend Photography Club</h2>
            <p><span className='font-semi-bold'>Category:</span>Photography</p>
            <p>Start Date: 2025-06-01</p>
            <Link to={`/group/${group._id}`}>
                <button className='btn btn-primary'>See More</button>
            </Link>
        </div>
    );
};

export default SingleGroup;