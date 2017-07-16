import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addNavigationHelpers,
  StackNavigator
} from 'react-navigation';

import HomeScreen from '../containers/home_screen';
import CenterListScreen from '../containers/center_list_screen';

export const AppNavigator = StackNavigator({
  Home: { screen: HomeScreen },
  CenterList: { screen: CenterListScreen },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

AppWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);