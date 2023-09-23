import styled from "styled-components";
import { getGridSizeAndLines } from "../utill/grid";
import fieldObject from '../constants/fieldObject';

export const GridComponent: React.FC<{fieldAry:number[],windowSizeArrayProp:number[]}> = (props) => {
  const [gridSize,col,row] = getGridSizeAndLines(props.windowSizeArrayProp);
  return (
    <>
    <div>
      <FieldWrapElement className="grid grid-cols-12">
      {(props.fieldAry).map((t,index) => 
        <FieldElement key={index} className="square" size={gridSize} bgimage={"img/map/field/"+t+".png"} />
      )}
      </FieldWrapElement>
      <FieldWearElement className="grid grid-cols-12">
      {[...fieldObject.slice(0,col*row), ...(new Array(col*row).fill(0))].map((u,index) => 
        <FieldElement key={index}  className="square" size={gridSize} bgimage={"img/map/fieldObject/"+u+".png"} />
      )}
      </FieldWearElement>
      </div>
    </>
  )
}

type fieldElement = {
size:number,
bgimage?:string,
}

const FieldWearElement = styled.div`
position:fixed;
`
const FieldWrapElement = styled.div`
position:absolute;
`

const FieldElement = styled.div<fieldElement>`
width:${p=>p.size}px;
height:${p=>p.size}px;
background-repeat: no-repeat;
background-size: cover;
${({ bgimage }) => bgimage && `background-image: url(${bgimage});`}
`

