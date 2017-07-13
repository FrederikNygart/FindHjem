import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../actions';
import { appStyle } from '../styles';
import InfoBox from '../components/infoBox';

class AppContainer extends Component {
  render() {
    return (
      <View style={appStyle.container}>
        <InfoBox infoText={
          "this is some hardcoded info text"
          }/>
        <Text> Hello World! </Text>
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(() => { return {} }, mapDispatchToProps)(AppContainer);
