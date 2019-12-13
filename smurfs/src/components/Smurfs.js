import React, {useState} from 'react';

const Smurfs = (props) => {

    console.log(props.name)

    return(
            <div className='main'>
                            <div className='info'>
                            <div><span>{props.name}</span></div>
                            <div><span>{props.age}</span> yrs old</div>
                            <div><span> {props.height}</span></div>
                            </div>
 
            </div>
    )
}

export default Smurfs