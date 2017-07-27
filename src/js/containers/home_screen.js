import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appStyle } from '../lib/styles';
import {
  Text,
  TextInput,
  Picker,
  View,
  Button
} from 'react-native';
import {
  goTo,
  setAge,
  setGender,
  filterCentersByAge,
  filterCentersByGender,
  getCatagories,
  getCenters,
} from '../actions';
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

  static navigationOptions = ({ navigation }) => ({
    title: 'Find Hjem',
  })

  viewAllCenters() {
    this.props.getCenters()
    this.props.goTo('CenterList')
  }

  goToNextPage() {
    if (this.state.age === '' || this.state.gender === 0) {
      alert('Udfyld venligst alder og køn for at finde hjælp')
    } else {
      this.props.setAge(this.state.age);
      this.props.setGender(this.state.gender);
      this.props.filterCentersByAge(this.state.age);
      this.props.filterCentersByGender(this.state.gender);
      this.props.getCatagories();
      this.props.goTo('ChoiceList');
    }
  }

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
                initial={0}
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
        <View style={appStyle.buttonContainer}>
          <Button
            style={appStyle.button}
            title='Find tilbud'
            onPress={
              () => {
                this.goToNextPage();
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
      filterCentersByAge,
      filterCentersByGender,
      getCatagories,
      getCenters,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
