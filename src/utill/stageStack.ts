import react,{useState,useEffect,memo} from 'react'
const fieldAry:number[] = [
  0,0,0,1,2,3,4,5,
  0,0,0,1,2,3,4,5,
  0,0,0,1,2,3,4,5,
  0,0,0,1,2,3,4,5,
  0,0,0,1,2,3,4,5
];
const leftfieldAry:number[] = [
    0,0,0,1,2,3,4,5,
    0,0,0,1,2,3,4,5,
    0,0,0,1,2,3,4,5,
    0,0,0,1,2,3,4,5,
    0,0,0,1,2,3,4,5,
]
const fieldAryLength = fieldAry.length;

const taskAry:(number)[][] = [];
const AddStageStack = (addAry:number[]):void => {
    taskAry.push(addAry); 
}

export const StageStacks =():void => {
    AddStageStack(fieldAry);
    console.log(taskAry)
 // console.log(taskAry)
  const stageStack = ():void => {
  let gridsize = "25px";
  let row = 5;
  let col = 5;
  let stateRow = 0;


  //const fieldAryOutput = [...fieldAry].map((i) => i).slice(0+(col*stateRow),col*(row+(col*stateRow)));
  //console.log(fieldAryOutput)
  }
};
//memo
/* 
以下をスタックの対象とする。
①標準スクロール(ステージが上から下に移動する)
②イベント（ステージの左右移動や会話など）

・スタック内の処理
gridsize:グリッドのwidthとheight(正方形)px
row：縦のグリッド数
col:横のグリッド数
height:全体のheight(scroll分)
scrollgridCount:スクロール分のグリッド数(scrollHeight/gridSizeで計算し高さ分のgrid換算)
①field配列のslice範囲 aからbを表示する。
初期値
a=0 ,b= row*col
-y方向
a=col*scrollgridCount,b=(col*scrollgridCount)+row*col

②横のイベント

*/