import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigation/app_navigator';
import * as types from '../lib/types';

const initialNavState = {
  index: 0,
  routes: [
    { key: 'Home', routeName: 'Home' }
  ]
}

export default function navigationReducer(
  state = initialNavState,
  action
) {
  let nextState;
  switch (action.type) {
    case types.GO_TO:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions
          .navigate({ routeName: action.route, params: action.params }),
        state
      );
      break;
    case types.GO_BACK:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break;
    case types.POP_CATAGORY:
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back(),
        state
      )
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
