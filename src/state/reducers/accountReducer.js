//jshint esversion:9
import * as actions from '../actionsTypes';

const reducer = (state = 0, action) => {
  switch (action.type) {
    case actions.DEPOSIT_MONEY:
      return state + action.payload;
    case actions.WITHDRAW_MONEY:
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
