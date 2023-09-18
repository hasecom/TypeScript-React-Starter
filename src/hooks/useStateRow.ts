import {useEffect, useState} from 'react';

import {UseStackState} from './useStackState'
import {stackData} from '../constants/stackData'
type useStackStateType = {
  stackId:number,
  stateRow:number,
  sign:number,
  range:number,
  eventType:()=>void,
  eventId:number
}

const UseStateRow = ():[number,(sum:number)=>void] => {
  const [stateRow,setStateRow] = useState<number>(0);
  const [stateRowDiff, setStateRowDiff] = useState<number>(0);
  const [stackState,handleStackState,handleStackObjectDelete] = UseStackState();
  useEffect(()=>{
    //stackのデータ監視（入る前のデータ）
    //stack配列 push & pop
    console.log(stackState)
    stackData.map((i)=>{
      const beginOfRange = i.stateRow;
      const endOfRange = i.stateRow + i.range;
      if( beginOfRange <= stateRow && stateRow < endOfRange){
        if(stackState.length < 1){
          handleStackState(i);
        }else{
          if(stackState.some(j => j.stackId === i.stackId)){
            console.log("aa")
           }
        }
      }else{
          if(stackState.some(j => j.stackId === i.stackId)){
            handleStackObjectDelete(i);
           }
        }
    })
  //  console.log(stateRowDiff)  
  },[stateRow]);
  const handleStateRow = (sum:number):void => {    
    setStateRowDiff(stateRow - sum)
    setStateRow(sum);
  }
  return [stateRow,handleStateRow];
}
export default UseStateRow;