import react,{useState,Dispatch,SetStateAction } from 'react'
import styled from "styled-components";
import {getGridSizeAndLines} from "../utill/grid"
import field from "../constants/field";
import {sortStackDataRow} from "../constants/stackData"

const stackDataRow = ():number => {
  let stackRowGridCount = 0;
  let stateNextRow = 0;
  (sortStackDataRow()).map((i)=>{
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

export const ScrollListenerComponent:React.FC<{
  setScrollPosition:(e:React.UIEvent<HTMLDivElement>)=>void,
  windowSizeArrayProp:number[]
}> = (props)=> {
    const [gridsize,col,row] = getGridSizeAndLines(props.windowSizeArrayProp);
    const skeltonHeight = ((field.length/col)+stackDataRow())*gridsize
  return (
      <SkeletonElement onScroll={props.setScrollPosition} skeltonheight={skeltonHeight}>
        <div></div>
      </SkeletonElement>
  );
}
type skeletonElement = {
  skeltonheight?:number
}
const SkeletonElement = styled.div<skeletonElement>`
  position:relative;
  width:inherit;
  height:inherit;
  overflow:auto;
& div {
  position:relative;
  height:${p=>p.skeltonheight}px;
  overflow:scroll;
}
`