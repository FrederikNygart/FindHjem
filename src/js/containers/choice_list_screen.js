import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appStyle } from '../lib/styles';
import ChoiceListElement from '../components/choice_list_element';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';
import {
  goTo,
  getCatagories,
  filterCentersByCatagory,
} from '../actions';


class ChoiceListScreen extends Component {

  constructor(state) {
    super(state);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.centers !== nextProps.centers) {
      if (nextProps.catagoriesLevel > 1 && nextProps.centers.length > 1) {
        //go to center_list_screen
        alert('Go to center list screen');
      }
      if (nextProps.centers.length === 1) {
        //Go to center screen for the remaining center
        this.props.goTo('Center', { centerName: nextProps.centers[0].name });
      }
      if (nextProps.catagoriesLevel < 2 && nextProps.centers.length > 1) {
        this.props.getCatagories();
      }
    }
  }

  static navigationOptions = {
    title: 'Hvad søger du?'
  };

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
              onPress={() => this.onPressCatagory(key)}
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

  onPressCatagory(catagory) {
    this.props.filterCentersByCatagory(catagory);
  }
}

function mapStateToProps(state) {
  return {
    catagories: state.centers.catagories,
    catagoriesLevel: state.centers.catagoriesLevel,
    centers: state.centers.current,
    user: state.user,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goTo,
      getCatagories,
      filterCentersByCatagory,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ChoiceListScreen);
