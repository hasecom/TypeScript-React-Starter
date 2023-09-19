import {useEffect, useState} from 'react';

import {UseStackState} from './useStackState'
import {stackData} from '../constants/stackData'

const UseStateRow = ():[number,(sum:number)=>void] => {
  const [stateRow,setStateRow] = useState<number>(0);
  const [stateRowDiff, setStateRowDiff] = useState<number>(0);
  const [stackState,handleStackState,handleStackObjectDelete] = UseStackState();
  useEffect(()=>{
    //stackのデータ監視（入る前のデータ）
    //stack配列 push & pop
    stackData.map((i)=>{
      const beginOfRange = i.stateRow;
      const endOfRange = i.stateRow + i.range;
      if( beginOfRange <= stateRow && stateRow < endOfRange){
        if(stackState.length < 1){
          handleStackState(i);
        }else{
          if(!stackState.some(j => j.stackId === i.stackId)){
            handleStackState(i);
           }
        }
      }else{
          if(stackState.some(j => j.stackId === i.stackId)){
            handleStackObjectDelete(i);
           }
        }
    })
  },[stateRow]);
  const handleStateRow = (sum:number):void => {    
    setStateRowDiff(stateRow - sum)
    setStateRow(sum);
  }
  return [stateRow,handleStateRow];
}
export default UseStateRow;