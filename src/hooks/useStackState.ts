import react,{useEffect, useState} from 'react';
import {useStackStateType} from '../constants/stackData'

export const UseStackState= ():[
  useStackStateType[],
  (stackObject:useStackStateType)=>void,
  (stackObject:useStackStateType)=>void,
] => {

  const [stackState,setStackState] = useState<useStackStateType[]>([]); 
  const handleStackState = (stackObject:useStackStateType):void => {
    setStackState([...stackState,stackObject]);
  }
  const handleStackObjectDelete = (stackObject:useStackStateType):void => {
    const filteredStackState = stackState.filter(i => i.stackId !== stackObject.stackId);
    console.log(filteredStackState)
    setStackState(filteredStackState);
  }
  useEffect(()=>{
    console.log(stackState)
    stackState.map(j=>{
      
     // j.eventType()
    })
  },[stackState])

  return [stackState,handleStackState,handleStackObjectDelete]
}