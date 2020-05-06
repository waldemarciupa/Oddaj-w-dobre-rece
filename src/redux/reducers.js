import { combineReducers } from 'redux';
import actorsReducers from './actors/duck'
import foundationsReducer from './foundations/duck'

const rootReducer = combineReducers({
    actors: actorsReducers,
    foundations: foundationsReducer
})

export default rootReducer;