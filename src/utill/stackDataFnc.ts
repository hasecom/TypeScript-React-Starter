import {useState} from 'react';
import {
  player_default_work,
  player_work_init,
  field_moves_right_call

} from './fieldObjectFnc';
export const player_direction_left = ():void => {
  player_default_work(player_work_init.left)
}
export const player_direction_right = ():void => {
  player_default_work(player_work_init.right)
}
export const player_direction_front = ():void => {
  player_default_work(player_work_init.front)
}
export const player_direction_back = ():void => {
  player_default_work(player_work_init.back)
}
export const field_moves_right = ():void => {
  field_moves_right_call();
}
