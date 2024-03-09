import * as types from '../types';
import makeCard from '../generateCard';

export const startGame = () => dispatch => {
  console.log(makeCard());
  dispatch({ type: types.START_GAME, payload: makeCard() });
};
