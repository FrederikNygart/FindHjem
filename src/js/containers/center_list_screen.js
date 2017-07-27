import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goTo } from '../actions';
import { appStyle } from '../lib/styles';
import {CenterList} from '../components/center_list'

class CenterListScreen extends Component {
  
  static navigationOptions = {
    title: 'Centres'
  };
  
  render() {
    return (
      <ScrollView style={appStyle.container}>
        <CenterList
          centers={this.props.centers}
        /> 
      </ScrollView>
    );
  }
}

function mapStateToProps(state){
  return{
    centers: state.centers.current,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({goTo: goTo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterListScreen);
