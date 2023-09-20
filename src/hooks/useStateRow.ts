import {useEffect, useState} from 'react';
import {stackData,useStackStateType} from '../constants/stackData'

const UseStateRow = (
  stackState:useStackStateType[],
  handleStackState:(stackObject:useStackStateType)=>void,
  handleStackObjectDelete:(stackObject:useStackStateType)=>void
):[number,(sum:number)=>void] => {
  const [stateRow,setStateRow] = useState<number>(0);
  const [stateRowDiff, setStateRowDiff] = useState<number>(0);
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