import field from "../constants/field";
import styled from "styled-components";
import { getGridSizeAndLines } from "../utill/grid";
export const GridComponent: React.FC<{windowSizeArrayProp:number[]}> = (props) => {
  const [gridSize,col,row] = getGridSizeAndLines(props.windowSizeArrayProp);
  const arr = [...field].map((i) => i).slice(0,col*row);
  return (
    <>
    <div>
      <div className="grid grid-cols-12">
      {arr.map((t,index) => 
        <FieldElement key={index} className="square" size={gridSize} bgimage={"img/map/field/"+t+".png"} />
      )}
      </div>
      </div>
    </>
  )
}

type fieldElement = {
size:number,
bgimage:string
}
const FieldElement = styled.div<fieldElement>`
width:${p=>p.size}px;
height:${p=>p.size}px;
background-image: url(${p => p.bgimage});
background-repeat: no-repeat;
background-size: cover;
`

