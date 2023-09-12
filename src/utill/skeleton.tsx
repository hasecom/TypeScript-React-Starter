import react,{useState,Dispatch,SetStateAction } from 'react'
import styled from "styled-components";
import {getGridSizeAndLines} from "../utill/grid"
import {ScrollListenerComponent} from "../components/scrollListenerComponent";

export const SkeletonComponent:React.FC<{
  setScrollPosition:Dispatch<SetStateAction<number>>,
  windowSizeArrayProp:number[]
}>= (props) => {
  const [gridsize,col,row] = getGridSizeAndLines(props.windowSizeArrayProp);
  const [width,height]= props.windowSizeArrayProp;
  return (
    <>
    <SkeletonElement screenwidth={width} screenheight={height}>
      <ScrollListenerComponent setScrollPosition={props.setScrollPosition} />
    </SkeletonElement>
    </>
  )
}

type skeletonElement = {
  screenwidth?:number,
  screenheight?:number
}
const SkeletonElement = styled.div<skeletonElement>`
  width:${p=>p.screenwidth}px;
  height:${p=>p.screenheight}px;
  position:fixed;
  overflow:hidden;
  z-index:1;
`
