import {useEffect, useState} from 'react';

const UseStateRow = ():[number,(sum:number)=>void] => {
  const [stateRow,setStateRow] = useState<number>(0);
  const [stateRowDiff, setStateRowDiff] = useState<number>(0);

  useEffect(()=>{
    console.log(stateRowDiff)  
  });
  const handleStateRow = (sum:number):void => {    
    setStateRowDiff(stateRow - sum)
    setStateRow(sum);
  }
  return [stateRow,handleStateRow];
}
export default UseStateRow;