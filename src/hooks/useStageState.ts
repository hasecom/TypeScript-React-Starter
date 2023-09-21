import {getGridSizeAndLines} from "../utill/grid"
import field from "../constants/field";
import UseStateRow from '../hooks/useStateRow'
import {UseStackState} from './useStackState'
import stackDataRow from '../utill/stackDataRow'
export const useStageState = (windowSizeArrayProp:number[],scrollPosition:number):number[]=> {
  const [stackState,handleStackState,handleStackObjectDelete] = UseStackState();
  const [gridsize,col,row] = getGridSizeAndLines(windowSizeArrayProp);
  const [stateRow,setStateRow] = UseStateRow(stackState,handleStackState,handleStackObjectDelete);

  if(!(Number.isNaN(scrollPosition/gridsize)) && 0 <= scrollPosition){
    let sclTrgStateRow = Number((scrollPosition/gridsize).toFixed());
    if(sclTrgStateRow !== stateRow){
      setStateRow(Number((scrollPosition/gridsize).toFixed()));
    }
  }
//stateRowとは別のフィールドステータスを追加する。
//スタック配列を確認し分岐処理
  const fieldAry = [...field].map((i) => i).slice(0+(col*(stateRow - stackDataRow(stateRow))),(col*row)+(col*(stateRow - stackDataRow(stateRow))));
  return fieldAry;
}