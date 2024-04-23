import { createStore } from 'redux'

const reducer = (state, action) => {
    //action.type
    switch( action.type) {
        case 'increment':
            state++
            break;
            case 'decrement': 
            state--
            break;
    }
    return state;
}

export default createStore( reducer, 0 ) 