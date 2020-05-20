import { combineReducers } from 'redux';
import userReducer from './users/reducer';
import foundationsReducer from './foundations/reducer';

const rootReducer = combineReducers({
    user: userReducer,
    foundations: foundationsReducer
})

export default rootReducer; 