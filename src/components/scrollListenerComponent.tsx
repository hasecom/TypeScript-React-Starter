import react,{useState,Dispatch,SetStateAction } from 'react'
import styled from "styled-components";


//ScrollableElement
export const ScrollListenerComponent:React.FC<{
  setScrollPosition:Dispatch<SetStateAction<number>>
}> = (props)=> {
    const [scrollPosition, setScrollPosition] = useState(0);
  
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
      <SkeletonElement onScroll={handleScroll}>
        <div>{scrollPosition}</div>
      </SkeletonElement>
  );
}

const SkeletonElement = styled.div`
  position:relative;
  width:inherit;
  height:inherit;
  overflow:auto;
& div {
  position:relative;
  height:3000px;
  background:red;
  opacity:0.4;
  overflow:scroll;
}
`