import React, { Component } from 'react';
import { appStyle } from '../lib/styles';
import {
    View,
    Text
} from 'react-native';

const CenterListElement = ({ centerName }) => (
    <View style={appStyle.listElement}>
        <Text>
            {centerName}
        </Text>
    </View>
);

export const CenterList = ({ centers }) => (
    <View>
        {
            centers.map((center, i) => {
                return (
                    <CenterListElement
                        key={i}
                        centerName={center.name}
                    />
                )
            })
        }
    </View>
);

