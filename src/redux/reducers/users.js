/* eslint-disable default-param-last */
import { type as usersTypes } from '../actions/users';

const initialState = [];

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case usersTypes.add:
      return [...state, payload];

    case usersTypes.remove:
      return state.filter((user) => user.id !== payload);
    default:
      return state;
  }
};
