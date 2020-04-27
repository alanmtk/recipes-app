import actions from './actions';
import thunks from './thunks';
import state from './state';

export default {
  ...state,
  ...thunks,
  ...actions,
};
