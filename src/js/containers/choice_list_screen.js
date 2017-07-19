import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goTo } from '../actions';
import { appStyle } from '../lib/styles';
import { FIRST_LEVEL } from '../data/mocks/center_classification';
import ChoiceListElement from '../components/choice_list_element';

import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

class ChoiceListScreen extends Component {

  constructor(state) {
    super(state);
  }

  static navigationOptions = {
    title: 'Vælg tilstand'
  };

  onPressCatagory(catagory) {
    alert('hello! ' + catagory);
  }

  renderListElements() {
    return (
      <ScrollView>
        {Object.entries(this.props.catagories).map(([key, value], i) => {
          return (
            <TouchableHighlight
              key={i}
              onPress={this.onPressCatagory(key)}
            >
              <View>
                <ChoiceListElement
                  elementText={value}
                  key={i}
                />
              </View>
            </TouchableHighlight>
          )
        })}
      </ScrollView>
    )
  }

  render() {
    return (
      <View style={appStyle.container}>
        {this.renderListElements()}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    catagories: FIRST_LEVEL,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goTo: goTo
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceListScreen);
