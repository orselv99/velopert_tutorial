import * as types from '../actions/ActionTypes';

const initialState = {
    number : 0,
    dummy : 'dumbdumb',
    dumbObject : {
        d: 0,
        u: 1,
        m: 2,
        b: 3,
    }
};

export default function counter(state = initialState, action) {
    // if (typeof state === 'undefined') {
    //     return initialState;
    // }
    console.log(action)
    // depend on action type
    switch(action.type) {
        case types.INCREMENT: 
            // 아래 문법에 대한 해석..
            // 1. 기존 state 값을 새 배열에 담고
            // 2. 그중 number 라는 요소의 값을 변경
            return { ...state, number: state.number + 1 };
            // state 내 dumbObject, u 값을 변경하는 방법.. holy..
            //return { ...state, number: state.number + 1, dumbObject: { ...state.dumbObject, u: 0 }}
        case types.DECREMENT: 
            return { ...state, number: state.number - 1 };
    }

    return state;
};