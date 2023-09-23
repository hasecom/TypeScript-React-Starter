import react,{useState} from 'react';
import {
  player_work_type,
  player_work_init,
  player_work_front,
  player_work_back,
  player_work_left,
  player_work_right
} from '../utill/fieldObjectFnc'
const UsePlayerDirectionState = ():[
  player_work_type[],
  (arg:number)=>void
] => {
  const [playerDirectionState,setPlayerDirectionState] = useState<player_work_type[]>(player_work_front);
  const handlePlayerDirection = (arg:number):void => {
    
    switch(arg){
      case player_work_init.front:
        setPlayerDirectionState(player_work_front);
      break;
      case player_work_init.back:
        setPlayerDirectionState(player_work_back);
      break;
      case player_work_init.left:   
        setPlayerDirectionState(player_work_left);
      break;
      case player_work_init.right:
        setPlayerDirectionState(player_work_right);
      break;
    }
  }
  return [playerDirectionState,handlePlayerDirection];
}
export default UsePlayerDirectionState;