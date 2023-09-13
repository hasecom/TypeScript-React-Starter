import {getGridSizeAndLines} from "../utill/grid"
import field from "../constants/field";

export const useStageState = (windowSizeArrayProp:number[],scrollPosition:number):number[]=> {
  const [gridsize,col,row] = getGridSizeAndLines(windowSizeArrayProp);
  let stateRow = 0;
if(!(Number.isNaN(scrollPosition/gridsize)) && 0 < scrollPosition){
  stateRow = Number((scrollPosition/gridsize).toFixed());
}
const fieldAry = [...field].map((i) => i).slice(0+(col*stateRow),col*(row+(col*stateRow)));
return fieldAry;
}