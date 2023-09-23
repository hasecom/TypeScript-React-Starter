import react,{useEffect, useState} from 'react';
import fieldObject from "../constants/fieldObject";
import usePlayerDirectionState from '../hooks/usePlayerDirectionState'
import {
  player_default_work,
  playerIndex,
  player_work_init,
} from '../utill/fieldObjectFnc'

export const UsePlayerState = ():[
  number,()=>void
] =>{
  const [usePlayerState,SetUsePlayerState] = useState<number>(player_work_init.front);
  const [playerDirectionState,handlePlayerDirection] = usePlayerDirectionState();

  const handlePlayerState = (arg?:number):void => {
  const plr = fieldObject[playerIndex];
    if(boolPlayerInitPosition(plr)){
      handlePlayerDirection(plr)
    }
    playerDirectionState.map((i)=>{
        if(i.val === usePlayerState){
          SetUsePlayerState(i.nextVal);
        }else{
          if(boolPlayerInitPosition(i.val)){
            SetUsePlayerState(i.nextVal);
          }
        }
  });      
}
  useEffect(()=>{
    player_default_work(usePlayerState);
  },[usePlayerState]);
  return [usePlayerState,handlePlayerState];
}
const boolPlayerInitPosition = (arg:number):boolean => {
  return arg === player_work_init.left || arg === player_work_init.back || 
  arg === player_work_init.front || arg === player_work_init.right
  ? true : false;
}