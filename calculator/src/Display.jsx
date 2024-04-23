import React, {useState} from 'react';
import store from './store';

const Display = () => {

    const [state, setState] = useState( store.getState() )

    store.subscribe( function() {
        setState(store.getState() )
    })

    return (
        <div>
            <h1>{state}</h1>
        </div>
    );
}

export default Display;