//jshint esversion:9
import * as actions from '../actionsTypes';

export const depositMoney = (amount) => ({
  type: actions.DEPOSIT_MONEY,
  payload: amount,
});

export const withdrawMoney = (amount) => ({
  type: actions.WITHDRAW_MONEY,
  payload: amount,
});

/* export const depositMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: actions.DEPOSIT_MONEY,
      payload: amount,
    });
  };
}; */

/* export const withdrawMoney = (amount) => {
  return (dispatch) => {
    dispatch({
      type: actions.WITHDRAW_MONEY,
      payload: amount,
    });
  };
}; */
