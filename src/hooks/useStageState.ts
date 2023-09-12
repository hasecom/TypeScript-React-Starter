import {getGridSizeAndLines} from "../utill/grid"


export const useStageState = (windowSizeArrayProp:number[]):void => {
  const [gridsize,col,row] = getGridSizeAndLines(windowSizeArrayProp);
  
}