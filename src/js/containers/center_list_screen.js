import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goTo } from '../actions';
import { appStyle } from '../styles';
import InfoBox from '../components/info_box';

class CenterListScreen extends Component {
  
  static navigationOptions = {
    title: 'Centers'
  };
  
  render() {
    console.log('centerss', this.props.centers);
    return (
      <View style={appStyle.container}>
        <InfoBox
          infoText={"welcome to the center list"}
        />
      </View>
    );
  }
}

function mapStateToProps(state){
  return{
    centers: state.centers,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({goTo: goTo}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterListScreen);
