import React from 'react';
import { useLoaderData } from 'react-router';


const SingleGroupDetails = () => {
    const singleGroup = useLoaderData();
    console.log(singleGroup)
    return (
        <div>
            
        </div>
    );
};

export default SingleGroupDetails;