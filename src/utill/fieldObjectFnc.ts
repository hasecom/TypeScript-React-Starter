import fieldObject from "../constants/fieldObject";
const player_range = [1,2,3,4,5,6,7,8,9,10,11,12];
const playerIndex = fieldObject.findIndex((i) => player_range.includes(i));
export const player_work_init = {
  front:1,
  back:4,
  left:7,
  right:10
}
export const player_work_front = [
  {val:player_work_init.front,nextVal:player_work_init.front+1},
  {val:player_work_init.front+1,nextVal:player_work_init.front+2},
  {val:player_work_init.front+2,nextVal:player_work_init.front}
];
export const player_work_back = [
  {val:player_work_init.back,nextVal:player_work_init.back+1},
  {val:player_work_init.back+1,nextVal:player_work_init.back+2},
  {val:player_work_init.back+2,nextVal:player_work_init.back}
];
export const player_work_left = [
  {val:player_work_init.left,nextVal:player_work_init.left+1},
  {val:player_work_init.left+1,nextVal:player_work_init.left+2},
  {val:player_work_init.left+2,nextVal:player_work_init.left}
];
export const player_work_right = [
  {val:player_work_init.right,nextVal:player_work_init.right+1},
  {val:player_work_init.right+1,nextVal:player_work_init.right+2},
  {val:player_work_init.right+2,nextVal:player_work_init.right}
];

export const player_default_work = (arg:number):void =>{
  fieldObject[playerIndex] = arg;
  console.log(arg);
}