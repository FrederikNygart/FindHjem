import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { HeaderBackButton } from 'react-navigation';
import { appStyle } from '../lib/styles';
import * as types from '../lib/types';
import { CenterList } from '../components/center_list'
import {
  goTo,
  selectCenter
} from '../actions';

class CenterListScreen extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'Centre',
    headerLeft: <HeaderBackButton onPress={() => navigation.dispatch({ type: types.POP_CATAGORY })} />,
  });

  render() {
    return (
      <ScrollView style={appStyle.container}>
        <CenterList
          selectCenter={this.props.selectCenter}
          onClick={this.props.goTo}
          centerNames={this.props.centers}
        />
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    centers: state.catagories.centers,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goTo,
      selectCenter
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterListScreen);
