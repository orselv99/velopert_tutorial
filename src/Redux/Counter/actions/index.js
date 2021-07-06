// 파일명이 index.js 인 이유는, 
// actions 폴더만 불러왔을때 자동으로 index 가 불리게 하기 위함

// import { INCREMENT, DECREMENT, SET_COLOR } from "./ActionTypes";
import * as types from './ActionTypes';

export function increment() {
    return {
        type: types.INCREMENT
    };
} 
export function decrement() {
    return {
        type: types.DECREMENT
    };
} 
export function setColor(color) {
    return {
        type: types.SET_COLOR,
        color: color,
    };
} 