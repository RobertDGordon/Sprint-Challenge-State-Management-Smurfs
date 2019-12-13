import React from 'react';
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getData, postData, deleteData, putData } from '../actions';

import Smurfs from './Smurfs';


import "./App.css";
import AddSmurf from './AddSmurf';

import styled from 'styled-components';


const MainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items:center;
`

const SmurfDiv = styled.div`
    display: flex;
    width: 95%;
    flex-wrap: wrap;
    /* position: absolute; */
    margin-top: 300px;
    justify-content: center;
`


function App(){
  const dispatch = useDispatch();

  const { isLoading, error, data, dataLoaded } = useSelector(
    state => ({
      isLoading: state.isLoading,
      error: state.error,
      data: state.data,
      dataLoaded: state.dataLoaded
    }),
    shallowEqual
  );

  const postSmurf = (newSmurf) =>{
    console.log('to add', newSmurf)
    dispatch(postData(newSmurf))
  }

  const deleteSmurf = (smurfId) =>{
    // console.log(smurfId)
    dispatch(deleteData(smurfId))
  }

  const putSmurf = (newSmurf) =>{
    // console.log(smurfId)
    dispatch(putData(newSmurf))
  }

  // console.log(data.name)

  return(
    <MainDiv>
      <AddSmurf postSmurf={postSmurf} />
      <button onClick={() => dispatch(getData())}>Smurf it up!</button>
      <SmurfDiv>
      {dataLoaded ? (
            <>
            {data.map(smurf => <Smurfs key={smurf.id} {...smurf} deleteSmurf={deleteSmurf} putSmurf={putSmurf}/>)}
            </>
      ) : (
            <>
            {error}
            </>
      ) }
      </SmurfDiv>
    </MainDiv>
  )
}

export default App;