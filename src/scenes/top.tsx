import React,{ useEffect, useState } from 'react';
import styled from "styled-components";
import useWindowSize from "../hooks/useWindowSize";
import { useStageState } from "../hooks/useStageState"
import {GridComponent} from '../components/gridComponent'
import { SkeletonComponent } from '../utill/skeleton'
import { StageStacks } from '../utill/stageStack'
import UseScrollTop from '../hooks/useScrollTop'
const Top: React.FC = () => {
const [scrollPosition, setScrollPosition] = UseScrollTop();
const useWindowSizeArray:number[] = useWindowSize();
const fieldAry:number[] = useStageState(useWindowSizeArray,scrollPosition)
const [width,height]:number[] = useWindowSizeArray;
  return (
<div className="top">
<SkeletonComponent setScrollPosition={setScrollPosition} windowSizeArrayProp={useWindowSizeArray} />
<NoScrollElement screenwidth={width} screenheight={height}>
  <GridComponent fieldAry={fieldAry} windowSizeArrayProp={useWindowSizeArray} />
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