// import React from 'react'

import { useState } from 'react';

// un custom hooks es un asimple función
export const useCounter = ( initialState = 10 ) => {

    const [counter, setState] = useState(initialState)

    const increment = (  ) => {

        setState( c => c + 1);
    }

    const decrement = (  ) => {

        setState( c => c - 1 );
    }
    const reset = (  ) => {

        setState( initialState );
    }



    return {
        counter,
        increment,
        decrement,
        reset
    }
}