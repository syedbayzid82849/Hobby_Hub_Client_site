import React from 'react';

const SingleGroup = () => {
    return (
                <div className="card space-y-1">
                    <img className='rounded-2xl' src={group.imageUrl} />
                    <h2 className='font-bold'>{group.groupName}</h2>
                    <p><span className='font-semi-bold'>Category:</span> {group.hobbyCategory}</p>
                    <p>Start Date: {group.startDate}</p>
                    <Link to={`/group/${group._id}`}>
                        <button className='btn btn-primary'>See More</button>
                    </Link>
                </div>
    );
};

export default SingleGroup;