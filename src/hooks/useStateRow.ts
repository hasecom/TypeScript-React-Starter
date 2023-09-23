import {useState} from 'react';

const UseStateRow = (
):[number,(sum:number)=>void] => {
  const [stateRow,setStateRow] = useState<number>(0);

  const handleStateRow = (sum:number):void => {    
    setStateRow(sum);
  }
  return [stateRow,handleStateRow];
}
export default UseStateRow;