import React, { Component } from 'react';
import { appStyle } from '../lib/styles';
import {
    View,
    Text,
} from 'react-native';

export default class ChoiceListElement extends Component {

    render() {
        let text = this.props.elementText;
        return (
            <View style={appStyle.listElement}>
                <Text>{text}</Text>
            </View>
        )
    }
}