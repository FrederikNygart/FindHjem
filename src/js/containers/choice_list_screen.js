import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { goTo, getSubCatagories } from '../actions';
import { appStyle } from '../lib/styles';
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
    this.props.getSubCatagories(catagory);
  }

  renderListElements() {
    return (
      <ScrollView>
        {Object.entries(this.props.catagories).map(([key, value], i) => {
          return (
            <TouchableHighlight
              key={i}
              onPress={() => this.onPressCatagory(key)}
              activeOpacity={0.99}
              underlayColor={'steelblue'}
            >
              <View>
                <ChoiceListElement
                  elementText={value.description}
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
    catagories: state.catagories.current,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goTo: goTo,
      getSubCatagories: getSubCatagories,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceListScreen);
