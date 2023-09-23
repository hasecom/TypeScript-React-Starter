import {
  player_direction_left,
  player_direction_right,
  field_moves_right
} from '../utill/stackDataFnc'
/*
stateRow:イベントを実行する高さ(初期画面トップを起点とする)
sign:上または下にスクロール(1が上、-1が下)
range:stateRowを起点にsign方向へ範囲を指定
fixedField:フィールドを固定するか(0しない,１固定)
eventType:実行するイベント(関数呼び出し)
eventId:実行するイベントのID
*/
export type useStackStateType = {
  stackId:number,
  stateRow:number,
  sign:number,
  fixedField:number,
  event:()=>void,
  eventId:number
}


export const sortStackDataRow = ():useStackStateType[] =>{
  const sortStack = stackData;
  sortStack.sort((i,j)=>i.stateRow - j.stateRow);
  return sortStack;
} 

export const stackData:useStackStateType[] = [
  //プレイヤー：右向き
  {"stackId":1,"stateRow":15,"sign":-1,"fixedField":1,"event":player_direction_right,"eventId":3},
  //プレイヤー：移動 x + 1
  {"stackId":2,"stateRow":13,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
]
