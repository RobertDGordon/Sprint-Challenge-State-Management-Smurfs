import React, {useState} from 'react';


const AddSmurf = (props) => {

    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: '',
        id: Date.now()
    })

    const handleChanges = e => {
        setNewSmurf({...newSmurf,[e.target.name]: e.target.value })
        // console.log(newSmurf)
    }

    const addSmurf = e => {
        e.preventDefault();
        console.log('add smurf!', newSmurf)
        setNewSmurf({name: '',
        age: '',
        height: '',
        id: Date.now()})
    }

    return(
        <form onSubmit={addSmurf}>
            <input name='name' value={newSmurf.name} placeholder='Name' onChange={handleChanges}/>
            <input name='age' value={newSmurf.age} placeholder='Age' onChange={handleChanges}/>
            <input name='height' value={newSmurf.height} placeholder='Height' onChange={handleChanges}/>
            <button type='submit'>Get Smurfed!</button>
        </form>
    )
}

export default AddSmurf