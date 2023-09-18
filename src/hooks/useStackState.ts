import react,{useState} from 'react';

type useStackStateType = {
  stackId:number,
  stateRow:number,
  sign:number,
  range:number,
  eventType:()=>void,
  eventId:number
}

export const UseStackState= ():[
  useStackStateType[],
  (stackObject:useStackStateType)=>void,
  (stackObject:useStackStateType)=>void
] => {

  const [stackState,setStackState] = useState<useStackStateType[]>([]); 
  const handleStackState = (stackObject:useStackStateType):void => {
    setStackState([...stackState,stackObject]);
  }
  const handleStackObjectDelete = (stackObject:useStackStateType):void => {
    const filteredStackState = stackState.filter(i => i.stackId !== stackObject.stackId);
    setStackState(filteredStackState);
  }

  return [stackState,handleStackState,handleStackObjectDelete]
}