import react,{useEffect, useState} from 'react';
import {
  player_default_work,
  player_work_front,
  player_work_back,
  player_work_left,
  player_work_right
} from '../utill/fieldObjectFnc'

export const UsePlayerState = (arg?:number):[
  usePlayerState:number,
  handlePlayerState:(arg?:number)=>void
] =>{
  const [usePlayerState,SetUsePlayerState] = useState<number>(1);
  const handlePlayerState = ():void => {
      const nextValAry = player_work_front;
      nextValAry.map((i)=>{
        if(i.val === usePlayerState){
          SetUsePlayerState(i.nextVal);
        }
      });               
  }
  useEffect(()=>{
    player_default_work(usePlayerState);
  },[usePlayerState]);

  return [usePlayerState,handlePlayerState];
}