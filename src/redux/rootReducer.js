import { combineReducers } from 'redux';
import usersReducer from './users/reducers';
import foundationsReducer from './foundations/reducer';

const rootReducer = combineReducers({
    users: usersReducer,
    foundations: foundationsReducer
})

export default rootReducer; 