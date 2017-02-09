import * as actionTypes from '../actions/actionTypes'

export const cartReducer = (state = [], action) => {
  switch (action.type) {      
    case actionTypes.ADD_TO_CART_SUCCESS:
      return action.item
    case actionTypes.FETCH_CART_SUCCESS:
      return action.items
    default:
      return state
  }
}