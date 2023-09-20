import {sortStackDataRow,useStackStateType} from "../constants/stackData"

const stackDataRow = (
  stateRow:number|undefined = undefined
):number => {
  let stackRowGridCount = 0;
  let stateNextRow = 0;
  let stackDataObj:useStackStateType[] = [];
  if(stateRow !== undefined){
    stackDataObj = (sortStackDataRow()).filter(k => k.stateRow < stateRow);
  }else{
    stackDataObj = sortStackDataRow()
  }

  (stackDataObj).map((i)=>{
    if(i.fixedField === 1 ){
      if(i.stateRow < stateNextRow){
        let diff = i.range - (stateNextRow - i.stateRow);
        if(0 < diff){
          stackRowGridCount += diff;
          stateNextRow = i.stateRow + i.range;
        }
      }else{
        stackRowGridCount += i.range;
        stateNextRow = i.stateRow + i.range;
      }
    }
  });
  return stackRowGridCount;
}
export default stackDataRow;