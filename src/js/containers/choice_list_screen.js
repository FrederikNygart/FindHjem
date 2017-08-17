import React, { Component } from 'react';
import { HeaderBackButton } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appStyle } from '../lib/styles';
import ChoiceListElement from '../components/choice_list_element';
import * as types from '../lib/types';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight,
  Button,
} from 'react-native';
import {
  goTo,
  getCatagories,
  filterCentersByCatagory,
  selectCenter,
  resetCatagories,
} from '../actions';

const getCatagoryDescriptions = (catagories) => {
  return Object.entries(catagories).reduce((acc, [key, catagory]) => {
    acc[key] = catagory.description
    return acc
  }, {})
}

class ChoiceListScreen extends Component {

  constructor(state) {
    super(state);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.centers !== nextProps.centers) {
      if (nextProps.catagoriesLevel > 1 && nextProps.centers.length > 1) {
        //go to center_list_screen
        this.props.goTo('CenterList');
      }
      if (nextProps.centers.length === 1) {
        //Go to center screen for the remaining center
        let center = nextProps.centers[0]
        this.props.selectCenter(center)
        this.props.goTo(
          'Center',
          {
            centerName: center,
            catagorySelected: true
          }
        );
      }
    }
  }

  static navigationOptions = ({navigation}) => ({
    title: 'Hvad søger du?',
    headerRight: <Button title='nulstil' onPress={() => navigation.dispatch({ type: types.RESET_CATAGORIES})}/>
  });

  render() {

    return (
      <View style={appStyle.container}>
        {this.renderListElements()}
      </View>
    );
  }

  renderListElements() {
    return (
      <ScrollView>
        {Object.entries(this.props.catagories || {}).map(([key, val], i) => {
          return (
            <TouchableHighlight
              key={i}
              onPress={() => this.props.filterCentersByCatagory(key)}
              activeOpacity={0.99}
              underlayColor={'steelblue'}
            >
              <View>
                <ChoiceListElement
                  elementText={val}
                  key={key}
                />
              </View>
            </TouchableHighlight>
          )
        })}
      </ScrollView>
    )
  }
}

function mapStateToProps(state) {
  return {
    //catagories: {catagoryKey: catagoryDescription}
    catagories: state.catagories.current,
    catagoriesLevel: state.catagories.selectedCatagories.length,
    //centers: Array<Center>
    centers: state.catagories.centers,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goTo,
      getCatagories,
      filterCentersByCatagory,
      selectCenter,
      resetCatagories,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceListScreen);
