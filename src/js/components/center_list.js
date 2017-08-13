import React, { Component } from 'react';
import { appStyle } from '../lib/styles';
import {
    View,
    Text,
    TouchableHighlight,
} from 'react-native';

const goToCenter = (selectCenter, onClick, centerName) => {
    selectCenter(centerName);
    onClick('Center', { centerName: centerName });
}

const CenterListElement = ({ selectCenter, onClick, centerName, }) => (
    <TouchableHighlight
        onPress={() => goToCenter(selectCenter, onClick, centerName)}
        activeOpacity={0.99}
        underlayColor={'steelblue'}
    >
        <View style={appStyle.listElement}>
            <Text>
                {centerName}
            </Text>
        </View>
    </TouchableHighlight>
);

export const CenterList = ({ selectCenter, onClick, centerNames, }) => (
    <View>
        {
            centerNames.map((centerName, i) => {
                return (
                    <CenterListElement
                        key={i}
                        selectCenter={selectCenter}
                        onClick={onClick}
                        centerName={centerName}
                    />
                )
            })
        }
    </View>
);

