import {getGridSizeAndLines} from "../utill/grid"
import field from "../constants/field";
import UseStateRow from '../hooks/useStateRow'
export const useStageState = (windowSizeArrayProp:number[],scrollPosition:number):number[]=> {
  const [gridsize,col,row] = getGridSizeAndLines(windowSizeArrayProp);
  const [stateRow,setStateRow] = UseStateRow();
if(!(Number.isNaN(scrollPosition/gridsize)) && 0 <= scrollPosition){
  let sclTrgStateRow = Number((scrollPosition/gridsize).toFixed());
  if(sclTrgStateRow !== stateRow){
    setStateRow(Number((scrollPosition/gridsize).toFixed()));
  }
}
//stateRowとは別のフィールドステータスを追加する。
//スタック配列を確認し分岐処理
const fieldAry = [...field].map((i) => i).slice(0+(col*stateRow),(col*row)+(col*stateRow));
return fieldAry;
}