import React from 'react';
import './UserOutput.css';

const useroutput = (props) => {
    return(
        <p onClick = {props.click}> {props.name} </p>
    )
}

export default useroutput;