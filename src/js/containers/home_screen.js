import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goTo, setAge, setGender } from '../actions';
import { appStyle } from '../styles';

import {
  Text,
  TextInput,
  Picker,
  View,
  Button
} from 'react-native';

import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel
} from 'react-native-simple-radio-button';

const radioProps = [
  { label: 'Mand', value: 1 },
  { label: 'Kvinde', value: 2 },
]

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {
      age: '',
      gender: 1,
      welcomeHeader: 'Velkommen til Find Hjem!',
      welcomeSubText: 'Indtast din alder og dit køn for at finde hjælp.'
    }
  }

  static navigationOptions = {
    title: 'Find Hjem!'
  };

  render() {
    return (
      <View style={appStyle.container}>
        <View style={appStyle.containerCentered}>
          <View style={appStyle.containerCentered}>
            <Text>{this.state.welcomeHeader}</Text>
            <Text>{this.state.welcomeSubText}</Text>
          </View>
          <View style={appStyle.row}>
            <View style={appStyle.containerBox}>
              <Text>Alder:</Text>
            </View>
            <View style={appStyle.containerBox}>
              <TextInput
                style={appStyle.textInput}
                keyboardType={'numeric'}
                selectionColor={'steelblue'}
                onChangeText={(text) => {
                  this.setState({ age: text })
                }
                }
                value={this.state.age}
              ></TextInput>
            </View>
          </View>
          <View style={appStyle.row}>
            <View style={appStyle.containerBox}>
              <Text>Køn:</Text>
            </View>
            <View style={appStyle.containerBox}>
              <RadioForm
                radio_props={radioProps}
                initial={1}
                animation={true}
                onPress={(value) => {
                  this.setState({ gender: value })
                }
                }
              >
              </RadioForm>
            </View >
          </View>
        </View>
        <View style={appStyle.containerCentered}>
          <Button
            title='Find hjælp!'
            onPress={
              () => {
                this.props.goTo('CenterList');
                this.props.setAge(this.state.age);
                this.props.setGender(this.state.gender);
              }
            }
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goTo,
      setAge,
      setGender,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
