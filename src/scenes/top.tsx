import React,{ useState } from 'react';
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import { useStageState } from "../hooks/useStageState"
import {GridComponent} from '../components/gridComponent'
import {SkeletonComponent} from '../utill/skeleton'


const Top: React.FC = () => {

const [scrollPosition, setScrollPosition] = useState(0)
console.log(scrollPosition);
const useWindowSizeArray:number[] = useWindowSize();
useStageState(useWindowSizeArray)
const [width,height]:number[] = useWindowSizeArray;
 
  return (
<div className="top">
<SkeletonComponent setScrollPosition={setScrollPosition} windowSizeArrayProp={useWindowSizeArray} />
<NoScrollElement screenwidth={width} screenheight={height}>
  <GridComponent windowSizeArrayProp={useWindowSizeArray} />
</NoScrollElement>
</div>
  )
}

type noScrollElement ={
  screenwidth?:number
  screenheight?:number
}
const NoScrollElement = styled.div<noScrollElement>`
overflow:hidden;
width:${p=>p.screenwidth}px;
height:${p=>p.screenheight}px;
`

export default Top;