import { combineReducers } from 'redux';
import createOrder from './createOrder';

const appReducer = combineReducers({
    createOrder: createOrder
});

const rootReducer = (state, action) => {
    return appReducer(state, action)
}

export default rootReducer;

