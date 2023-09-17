import {useEffect, useState} from 'react';

import {UseStackState} from './useStackState'
/*
stateRow:イベントを実行する高さ(初期画面トップを起点とする)
sign:上または下にスクロール(1が上、-1が下)
range:stateRowを起点にsign方向へ範囲を指定
eventType:実行するイベント(関数呼び出し)
eventId:実行するイベントのID
*/
const test = ():void =>{
  console.log("ag")
}
const stackData =  [
  {
  "stackId":1,
  "stateRow":15,
  "sign":-1,
  "range":5,
  "eventType":test,
  "eventId":3
}
]
const UseStateRow = ():[number,(sum:number)=>void] => {
  const [stateRow,setStateRow] = useState<number>(0);
  const [stateRowDiff, setStateRowDiff] = useState<number>(0);
  const [stackState,handleStackState] = UseStackState();
  useEffect(()=>{
    console.log(stackState);
    //stackのデータ監視（入る前のデータ）
    //stack配列 push & pop
    stackData.map((i)=>{
      const beginOfRange = i.stateRow;
      const endOfRange = i.stateRow + i.range;
      if(//下にスクロール中にstareRowに一致する下スクロールイベント
        beginOfRange == stateRow && 
        stateRowDiff <= -1 &&
        i.sign <= -1
        ){
        handleStackState(i);
       }else if(//上にスクロール中にstareRowに一致する下スクロールイベント
        beginOfRange == stateRow && 
        stateRowDiff >= 1 &&
        i.sign >= 1      
       )

     if(stateRowDiff < 1){//下方向

      //console.log("した")
     }else{

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