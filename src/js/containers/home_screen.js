import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goTo } from '../actions';
import { appStyle } from '../styles';
import { 
  Text, 
  View, 
  Button 
} from 'react-native';

import InfoBox from '../components/info_box';

class HomeScreen extends Component {
  
  static navigationOptions = {
    title: 'Find hjem!'
  };
  
  render() {
    return (
      <View style={appStyle.container}>
        <InfoBox
          infoText={"this is some hardcoded info text"}
        />
        <Button
          title='Get Centers'
          onPress={
            () => { 
              this.props.goTo('CenterList'); 
            }
          }
        />

      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goTo: goTo,
    }, 
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(HomeScreen);
