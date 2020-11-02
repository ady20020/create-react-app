
// import {
//     PLACE_ORDER
// } from '../Common/constants.js';

export const ORDER_CREATE_SUCCESS = 'ORDER_CREATE_SUCCESS';
export const ORDER_CREATE_FAILURE = 'ORDER_CREATE_FAILURE';

export const createOrderDispatch = (orderDetails) => (dispatch, getState) => {

  dispatch({
    type: ORDER_CREATE_FAILURE,  
    payload: {},
  });
}
