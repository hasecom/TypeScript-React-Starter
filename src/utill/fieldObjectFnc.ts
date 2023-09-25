import fieldObject from "../constants/fieldObject";
import field, { RightField, LeftField, TempField } from '../constants/field';
const player_range = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const field_col: number = 12;
let rightShift = 1;
let leftShift = 1;
export let playerIndex = fieldObject.findIndex((i) => player_range.includes(i));
export type player_work_type = {
  val: number,
  nextVal: number
}
export const player_work_init = {
  front: 1,
  back: 4,
  right: 7,
  left: 10
}
export const player_work_front = [
  { val: player_work_init.front, nextVal: player_work_init.front + 1 },
  { val: player_work_init.front + 1, nextVal: player_work_init.front + 2 },
  { val: player_work_init.front + 2, nextVal: player_work_init.front }
];
export const player_work_back = [
  { val: player_work_init.back, nextVal: player_work_init.back + 1 },
  { val: player_work_init.back + 1, nextVal: player_work_init.back + 2 },
  { val: player_work_init.back + 2, nextVal: player_work_init.back }
];
export const player_work_left = [
  { val: player_work_init.left, nextVal: player_work_init.left + 1 },
  { val: player_work_init.left + 1, nextVal: player_work_init.left + 2 },
  { val: player_work_init.left + 2, nextVal: player_work_init.left }
];
export const player_work_right = [
  { val: player_work_init.right, nextVal: player_work_init.right + 1 },
  { val: player_work_init.right + 1, nextVal: player_work_init.right + 2 },
  { val: player_work_init.right + 2, nextVal: player_work_init.right }
];

export const player_default_work = (arg: number): void => {
  fieldObject[playerIndex] = arg;
}
export const field_moves_right_call = (): void => {
  //一番左をtemp配列
  //配列1列から、12列を右にシフト(11回)
  //1<= n < 12の範囲で、行数t(0<= t length/12)とし nをt*(n-1)でt*12の和 これを11回繰り返す。（コピー上書き）
  for (let n = 0; n < field_col; n++) {
    for (let t = 0; t < ((field.length) / field_col); t++) {
     if (n !== 0) {
        //tempField配列を左にシフト
        TempField[(n - 1) + t * (field_col)] = TempField[(n) + t * (field_col)];
        //tempField配列の右端に、field配列の左端をシフト
        TempField[field_col * t + field_col - 1] = field[n + (t * field_col)];
        //field配列の特定の列を左にシフト
        field[(n - 1) + t * (field_col)] = field[(n) + t * (field_col)];
      }
    }
  }
  for (let t = 0; t < ((field.length) / field_col); t++) {
    field[(field_col - 1) + (t * field_col)] = RightField[(field_col * t) + rightShift];
  }
  rightShift++;
}
export const field_moves_left_call = (): void => {

for (let n = 0; n < field_col; n++) {
  for (let t = 0; t < ((field.length) / field_col); t++) {
    if(n !==0){
      //tempField配列を左にシフト
      TempField[(field_col - n) + t * (field_col)] = TempField[(field_col - n - 1) + t * (field_col)];
    }
  }}

  for (let n = 0; n < field_col; n++) {
    for (let t = 0; t < ((field.length) / field_col); t++) {
      if (n === 0) {  
        //tempField配列の左端に、field配列の右端をシフト
        TempField[field_col * t] = field[(field_col * t + field_col - 1)];
      }else{
        //field配列の特定の列を右にシフト
        field[(field_col - n) + t * (field_col)] = field[(field_col - n - 1) + t * (field_col)];
      }
    }
  }
  //メイン配列の左端に左配列のn列目のデータを代入
  for (let t = 0; t < ((field.length) / field_col); t++) {
    field[t*field_col]=LeftField[(field_col*t)+leftShift];
  }
  leftShift++;
}
