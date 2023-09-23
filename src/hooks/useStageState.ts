import { useEffect } from "react";
import {getGridSizeAndLines} from "../utill/grid"
import field from "../constants/field";
import {stackData} from '../constants/stackData'
import UseStateRow from '../hooks/useStateRow'
import stackDataRow from '../utill/stackDataRow'
import { UsePlayerState} from '../hooks/usePlayerState';

export const useStageState = (windowSizeArrayProp:number[],scrollPosition:number):number[]=> {
  const [gridsize,col,row] = getGridSizeAndLines(windowSizeArrayProp);
  const [stateRow,setStateRow] = UseStateRow();
  const [usePlayerState,handlePlayerState] = UsePlayerState();
  if(!(Number.isNaN(scrollPosition/gridsize)) && 0 <= scrollPosition){
    let sclTrgStateRow = Number((scrollPosition/gridsize).toFixed());
    if(sclTrgStateRow !== stateRow){
      setStateRow(Number((scrollPosition/gridsize).toFixed()));
    }
  }
  useEffect(()=>{
    stackData.map((i)=>{
      if(i.stateRow === stateRow){
        i.event();
      }
    })
    handlePlayerState();
  },[stateRow])
//stateRowとは別のフィールドステータスを追加する。
//スタック配列を確認し分岐処理
  const fieldAry = [...field].map((i) => i).slice(col*(stateRow - stackDataRow(stateRow)),(col*row)+(col*(stateRow - stackDataRow(stateRow))));
  return fieldAry;
}