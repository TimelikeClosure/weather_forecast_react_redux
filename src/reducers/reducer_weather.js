"use strict";
import {FETCH_WEATHER} from '../actions/index';

export default function(state = null, action){
            debugger;
    switch (action.type){
        case FETCH_WEATHER:
            return action.payload.data;
    }
    return state;
}
