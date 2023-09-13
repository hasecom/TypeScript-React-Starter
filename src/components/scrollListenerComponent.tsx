import react,{useState,Dispatch,SetStateAction } from 'react'
import styled from "styled-components";
import {getGridSizeAndLines} from "../utill/grid"
import field from "../constants/field";
//ScrollableElement
export const ScrollListenerComponent:React.FC<{
  setScrollPosition:Dispatch<SetStateAction<number>>,
  windowSizeArrayProp:number[]
}> = (props)=> {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [gridsize,col,row] = getGridSizeAndLines(props.windowSizeArrayProp);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      const element = e.currentTarget;
      const currentPosition = element.scrollTop;
      // スクロール位置が変更された場合に何かを実行
      if (currentPosition !== scrollPosition) {
        props.setScrollPosition(currentPosition)
        setScrollPosition(currentPosition);
      }
    };
  
  return (
      <SkeletonElement onScroll={handleScroll} skeltonheight={(field.length/col)*gridsize}>
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