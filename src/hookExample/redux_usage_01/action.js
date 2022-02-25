'use strict';

export const INCREMENT = 'INCREMENT';
export const RESET = 'RESET';

export const increment = () => {
    return {
        "type" : INCREMENT
    }
}

export const reset = () => {
    return {
        "type": RESET
    }
}