// this reducer will set the redux state: `weather`
// since we will be adding many cities, initial state is empty array.

import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // only care about the .data part of the returned promise
      // need to just add this object to the state array
      // BUT NEVER MANIPULATE STATE DIRECTLY! (like via state.push(array))
      // concat does not mutate state, it returns a NEW instance of state.
      // return state.concat([action.payload.data]);  -> SAME THING AS ->
      return [action.payload.data, ...state]; //es6
  }
  return state;
}