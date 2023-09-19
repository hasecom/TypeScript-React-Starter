/*
stateRow:イベントを実行する高さ(初期画面トップを起点とする)
sign:上または下にスクロール(1が上、-1が下)
range:stateRowを起点にsign方向へ範囲を指定
fixedField:フィールドを固定するか(0しない,１固定)
eventType:実行するイベント(関数呼び出し)
eventId:実行するイベントのID
*/
type useStackStateType = {
  stackId:number,
  stateRow:number,
  sign:number,
  range:number,
  fixedField:number,
  eventType:()=>void,
  eventId:number
}
const test = ()=>{}

export const sortStackDataRow = ():useStackStateType[] =>{
  const sortStack = stackData;
  sortStack.sort((i,j)=>i.stateRow - j.stateRow);
  return sortStack;
} 

export const stackData:useStackStateType[] = [
  {
  "stackId":1,
  "stateRow":15,
  "sign":-1,
  "range":5,
  "fixedField":1,
  "eventType":test,
  "eventId":3
},{
  "stackId":2,
  "stateRow":13,
  "sign":-1,
  "range":5,
  "fixedField":1,
  "eventType":test,
  "eventId":4
},{
  "stackId":3,
  "stateRow":14,
  "sign":-1,
  "range":5,
  "fixedField":1,
  "eventType":test,
  "eventId":3
},
]
