import {useState} from 'react';


const UseScrollTop = ():[number,(e: React.UIEvent<HTMLDivElement>)=>void]=> {
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const currentPosition = element.scrollTop;
    if (currentPosition !== scrollPosition) {
      setScrollPosition(currentPosition)
    }
  };
  return [scrollPosition, handleScroll];
}

export default UseScrollTop;