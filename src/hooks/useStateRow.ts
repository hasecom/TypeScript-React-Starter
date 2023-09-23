import {useEffect, useState} from 'react';
import {stackData} from '../constants/stackData'

const UseStateRow = (
):[number,(sum:number)=>void] => {
  const [stateRow,setStateRow] = useState<number>(0);
  useEffect(()=>{
    stackData.map((i)=>{
      if(i.stateRow === stateRow){
        i.eventType();
      }
    })
  },[stateRow]);
  const handleStateRow = (sum:number):void => {    
    setStateRow(sum);
  }
  return [stateRow,handleStateRow];
}
export default UseStateRow;