import { 
    ORDER_CREATE_SUCCESS,
    ORDER_CREATE_FAILURE
} from '../actions/createOrder';

const defaultState = { orderCreateDetails: {} };

export default function createOrder(state = defaultState, action) {
    let { type, payload } = action;

    switch (type) {
    
        case ORDER_CREATE_SUCCESS:
            if(payload){
                return { payload }
            }
            break;
    
        case ORDER_CREATE_FAILURE:
            if(payload){
                return { payload }
            }
            break;
    
        default:
            return state
    }
}

