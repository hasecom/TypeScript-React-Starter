/*
stateRow:イベントを実行する高さ(初期画面トップを起点とする)
sign:上または下にスクロール(1が上、-1が下)
range:stateRowを起点にsign方向へ範囲を指定
eventType:実行するイベント(関数呼び出し)
eventId:実行するイベントのID
*/
type useStackStateType = {
  stackId:number,
  stateRow:number,
  sign:number,
  range:number,
  eventType:()=>void,
  eventId:number
}
const test = ()=>{}

export const stackData:useStackStateType[] = [
  {
  "stackId":1,
  "stateRow":15,
  "sign":-1,
  "range":5,
  "eventType":test,
  "eventId":3
}
]
