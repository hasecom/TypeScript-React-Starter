import react,{useState,Dispatch,SetStateAction } from 'react'
import styled from "styled-components";
import {getGridSizeAndLines} from "../utill/grid"
import field from "../constants/field";
import stackDataRow from "../utill/stackDataRow"

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