import * as actionTypes from './actionTypes';
// import axios from 'axios';
// import api from '../../../../utils/api';
import jsonData from "../../../data.json";

// export const getData = () => ({
//   type: actionTypes.GET_DATA,
//   payload: api.get('albums')
// });

export const getData = () => ({
  type: actionTypes.GET_DATA,
  payload: jsonData
});
