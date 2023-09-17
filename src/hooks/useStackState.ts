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
  (stackObject:useStackStateType)=>void
] => {

  const [stackState,setStackState] = useState<useStackStateType[]>([]); 
  const handleStackState = (stackObject:useStackStateType):void => {
    setStackState([...stackState,stackObject]);
  }

  return [stackState,handleStackState]
}