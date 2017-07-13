import React, { Component } from 'react';
import { appStyle } from '../styles';
import {
    View,
    Text
} from 'react-native';

export default class InfoBox extends Component {
    render() {
        let infoText = this.props.infoText;
        return (
            <View style={appStyle.flashyBackground}>
                <Text style={appStyle.resultText}> 
                {infoText}    
                </Text>
            </View>
        )
    }
}