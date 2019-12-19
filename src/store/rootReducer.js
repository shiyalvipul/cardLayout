import { combineReducers } from 'redux'; 
import cardReducer  from '../modules/homePage/components/redux/reducer';

const rootReducer = combineReducers({
  card: cardReducer,
});
export default rootReducer;