import React from 'react';

const useroutput = (props) => {
    return(
        <p onClick = {props.click}> {props.name} </p>
    )
}

export default useroutput;