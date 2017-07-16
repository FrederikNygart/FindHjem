import { NavigationActions } from 'react-navigation';
import { AppNavigator } from '../navigation/app_navigator';
import * as types from '../actions/types'

const initialNavState = {
  index: 0,
  routes: [
    { key: 'Home', routeName: 'Home' }
  ]
}

export default function nav(
  state = initialNavState,
  action
) {
  let nextState;
  switch (action.type) {
    case types.GO_TO:
      console.log('action goto', action.route);
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions
          .navigate({ routeName: action.route }),
        state
      );
      break;
    default:
      nextState = AppNavigator.router.getStateForAction(action, state);
      break;
  }
  console.log('state', state);
  console.log('nextstate', nextState);
  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}
