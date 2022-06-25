const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
import { createStore } from "redux";

// state 
const initialCounterState = {
    count: 0
}

// action 
const incrementCounter = () => {
    return {
        type: INCREMENT
    }
}
const decrementCounter = () => {
    return {
        type: DECREMENT
    }
}

// reducer 
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                count: state.count + 1
            };
        case DECREMENT:
            return {
                count: state.count - 1
            };
        default:
            return state
    }
}

const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(decrementCounter())