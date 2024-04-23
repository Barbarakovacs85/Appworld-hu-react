import React from 'react';
import store from './store';

const Buttons = () => {
    return (
        <div>
            <button onClick={ ()=> store.dispatch( {
                type: 'decrement'
            })}>-</button>
            <button onClick={ ()=> store.dispatch( {
                type: 'increment'
            })}>+</button>
     

        </div>
    );
}

export default Buttons;