import React from 'react';

import  './UserOutput.css';

const userOutput = (props) =>{

    return (
        <div className="UserOutput">
            <p>Hello World!</p>
            <p>My name is {props.name}</p>
        </div>
    )
}

export default userOutput;