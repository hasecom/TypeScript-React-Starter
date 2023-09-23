import {player_direction_left} from '../utill/stackDataFnc'
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
  eventType:()=>void,
  eventId:number
}
const test = ():void=>{
console.log("ff")
}

export const sortStackDataRow = ():useStackStateType[] =>{
  const sortStack = stackData;
  sortStack.sort((i,j)=>i.stateRow - j.stateRow);
  return sortStack;
} 

export const stackData:useStackStateType[] = [
  {"stackId":1,"stateRow":15,"sign":-1,"fixedField":1,"eventType":player_direction_left,"eventId":3},
  {"stackId":2,"stateRow":13,"sign":-1,"fixedField":1,"eventType":test,"eventId":4},
  {"stackId":3,"stateRow":12,"sign":-1,"fixedField":1,"eventType":test,"eventId":3},
  {"stackId":4,"stateRow":11,"sign":-1,"fixedField":1,"eventType":test,"eventId":3},
  {"stackId":5,"stateRow":10,"sign":-1,"fixedField":1,"eventType":test,"eventId":3},
  {"stackId":6,"stateRow":9,"sign":-1,"fixedField":1,"eventType":test,"eventId":3},
  {"stackId":7,"stateRow":8,"sign":-1,"fixedField":1,"eventType":test,"eventId":3},
  {"stackId":8,"stateRow":7,"sign":-1,"fixedField":1,"eventType":test,"eventId":3},
  {"stackId":9,"stateRow":14,"sign":-1,"fixedField":1,"eventType":test,"eventId":3},
  {"stackId":10,"stateRow":16,"sign":-1,"fixedField":1,"eventType":test,"eventId":3},
  {"stackId":11,"stateRow":17,"sign":-1,"fixedField":1,"eventType":test,"eventId":3},
  {"stackId":12,"stateRow":18,"sign":-1,"fixedField":1,"eventType":test,"eventId":3},
  {"stackId":13,"stateRow":19,"sign":-1,"fixedField":1,"eventType":test,"eventId":3},
]
