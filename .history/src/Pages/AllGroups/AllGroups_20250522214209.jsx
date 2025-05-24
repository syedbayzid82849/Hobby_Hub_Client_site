import React from 'react';
import { useLoaderData } from 'react-router';
import SingleGroup from './SingleGroup';

const AllGroups = () => {

    const allGroups = useLoaderData();
    console.log(allGroups)

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold m-9 text-center">All Hobby Groups</h2>
            <div className='grid md:grid-cols-3 m-5 gap-5'>
                {
                    allGroups.map(singleGroup => <SingleGroup key={singleGroup._id} singleGroup={singleGroup}></SingleGroup>)
                }
            </div>
        </div>
    );
};

export default AllGroups;
