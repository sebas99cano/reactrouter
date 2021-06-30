import React from 'react';
import {useParams} from 'react-router-dom';
const MyComponent = () => {
    const {username} = useParams();
    return (
        <div>
            <h1>Profile Page: {username}</h1>
        </div>
    );
};

export default MyComponent;
