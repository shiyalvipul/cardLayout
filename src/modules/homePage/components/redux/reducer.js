import * as actionTypes from './actionTypes';

const INTIAL_STATE = {
  data: [],
};

export default (state = INTIAL_STATE, action) => {
  // console.log('action.type', actionTypes.GET_DATA)
  switch(action.type) {
    case actionTypes.GET_DATA: 
    // console.log('action.payload', action.payload);
      return {
        ...state,
        data: action.payload
      }
    default: 
      return state;
  }
};


