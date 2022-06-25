const increment = "INCREMENT"
const decrement = "DECREMENT"
const adduser = "adduser"
const { createStore } = require("redux");

//----------------------state-----------------
const initialCounterState = {
    count: 0
}

//-----------------action (type/payload)-----------------
const incrementCounter = () => {
    return {
        type: increment
    };
}
const decrementCounter = () => {
    return {
        type: decrement
    };
}
const addUser = () => {
    return {
        type: adduser,
        payload: { name: "shamim" }
    };
}


// ----------------------Reducer-----------------------
const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case increment:
            return {
                ...state,
                count: state.count + 1
            };
        case decrement:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            state;
    }
}

// ------------------------store (getState(), dispatch(), subscribe())-------------------------
const store = createStore(counterReducer);

store.subscribe(() => {
    console.log(store.getState());
})

// dispatch 
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())
store.dispatch(incrementCounter())