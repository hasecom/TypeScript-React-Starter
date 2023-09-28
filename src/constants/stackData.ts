import {
  player_direction_left,
  player_direction_right,
  player_direction_front,
  field_moves_right,
  field_moves_left
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
  // //プレイヤー：右向き
  // {"stackId":1,"stateRow":12,"sign":-1,"fixedField":1,"event":player_direction_right,"eventId":3},
  // //プレイヤー：移動 x + 1
  // {"stackId":2,"stateRow":13,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  // {"stackId":3,"stateRow":14,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  // {"stackId":4,"stateRow":15,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  // {"stackId":5,"stateRow":16,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  // {"stackId":6,"stateRow":17,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  // {"stackId":7,"stateRow":18,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  // {"stackId":8,"stateRow":19,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  // {"stackId":9,"stateRow":20,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  // //プレイヤー：下向き
  // {"stackId":10,"stateRow":21,"sign":-1,"fixedField":1,"event":player_direction_front,"eventId":3},
  // //プレイヤー：左向き
  // {"stackId":11,"stateRow":23,"sign":-1,"fixedField":1,"event":player_direction_left,"eventId":3},
   //プレイヤー：移動 x -1 1
  {"stackId":12,"stateRow":1,"sign":-1,"fixedField":1,"event":field_moves_left,"eventId":4},
  {"stackId":13,"stateRow":2,"sign":-1,"fixedField":1,"event":field_moves_left,"eventId":4},
  {"stackId":14,"stateRow":3,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":15,"stateRow":4,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":16,"stateRow":5,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":17,"stateRow":6,"sign":-1,"fixedField":1,"event":field_moves_left,"eventId":4},
  {"stackId":18,"stateRow":7,"sign":-1,"fixedField":1,"event":field_moves_left,"eventId":4},
  {"stackId":19,"stateRow":8,"sign":-1,"fixedField":1,"event":field_moves_left,"eventId":4},
  {"stackId":20,"stateRow":9,"sign":-1,"fixedField":1,"event":field_moves_left,"eventId":4},
  {"stackId":21,"stateRow":10,"sign":-1,"fixedField":1,"event":field_moves_left,"eventId":4},
  {"stackId":22,"stateRow":11,"sign":-1,"fixedField":1,"event":field_moves_left,"eventId":4},
  {"stackId":23,"stateRow":12,"sign":-1,"fixedField":1,"event":field_moves_left,"eventId":4},

  {"stackId":24,"stateRow":13,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":25,"stateRow":14,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":26,"stateRow":15,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":27,"stateRow":16,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":28,"stateRow":17,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":29,"stateRow":18,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":30,"stateRow":19,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":31,"stateRow":20,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":32,"stateRow":21,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":33,"stateRow":22,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":34,"stateRow":23,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":35,"stateRow":24,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},
  {"stackId":36,"stateRow":25,"sign":-1,"fixedField":1,"event":field_moves_right,"eventId":4},

  //プレイヤー：下向き
  {"stackId":17,"stateRow":28,"sign":-1,"fixedField":1,"event":player_direction_front,"eventId":3},
]
