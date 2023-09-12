export const getGridSizeAndLines = (argsArr:number[]):number[] =>{
  const col = 12;
  const [width,height] = argsArr;
  const gridSize = width !== 0 ? Math.ceil(width/col) : 0;
  const row  = gridSize !== 0 ? Math.ceil(height/gridSize)+1 : 0;
  return [gridSize,col,row]
}