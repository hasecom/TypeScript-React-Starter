import {sortStackDataRow} from "../constants/stackData"

const stackDataRow = (
  stateRow:number|undefined = undefined
):number => {
  let stackRowGridCount = 0;
  if(stateRow !== undefined){
    stackRowGridCount = (sortStackDataRow()).filter(k => k.stateRow < stateRow && k.fixedField === 1).length;
  }else{
    stackRowGridCount = ((sortStackDataRow()).filter(k => k.fixedField  === 1)).length;
  }
  return stackRowGridCount;
}
export default stackDataRow;