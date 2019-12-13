import React, {useState} from 'react';
import smurfimg from '../images'

const Smurfs = (props) => {

    const [newSmurf, setNewSmurf] = useState({
        name: props.name,
        age: props.age,
        height: props.height,
        id: props.id
    })

    const [ isEditing, setIsEditing ] = useState(false);

    const startEditing = (e) =>{
        e.preventDefault()
        setIsEditing(true)
        console.log('editing', isEditing)
    }

    const stopEditing = (e) =>{
        e.preventDefault()
        console.log('stop', isEditing)
        setIsEditing(false)
    }

    const handleChanges = e => {
        setNewSmurf({...newSmurf,[e.target.name]: e.target.value })
        // console.log(newSmurf)
    }

    const editSmurf = (e) =>{
        e.preventDefault();
        props.putSmurf(newSmurf)
        setIsEditing(false);
    }

    return(
            <div className='main'>
            <img src={smurfimg[props.id]} alt='Smurf' onClick={startEditing} />
            {!isEditing ? ( <>
                            <div className='info'>
                            <div><span>{props.name}</span></div>
                            <div><span>{props.age}</span>yrs old</div>
                            <div><span> {props.height}</span></div>
                            </div>
                            </>
            ) : (
                            <>
                            <div className='buttons'><div className='edit' onClick={stopEditing}>X</div></div>
                            <form onSubmit={editSmurf}>
                                <input name='name' value={newSmurf.name} onChange={handleChanges}/>
                                <input name='age' value={newSmurf.age} onChange={handleChanges}/>
                                <input name='height' value={newSmurf.height} onChange={handleChanges}/>
                                <button type='submit'>Get Smurfed!</button>
                                <button className='delete' onClick={(e) => props.deleteSmurf(props.id)}>Delete</button>
                            </form>
                            </>
            ) }
            </div>
    )
}

export default Smurfs