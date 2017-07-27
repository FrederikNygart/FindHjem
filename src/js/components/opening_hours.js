import { appStyle } from '../lib/styles';
import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';

const DAYS = [
    'Søndag',
    'Mandag',
    'Tirsdag',
    'Onsdag',
    'Torsdag',
    'Fredag',
    'Lørdag',
]

const DayElement = ({ day, opening, closing }) => {
    return (
        <View
            style={appStyle.openingHoursElement}
        >
            <View style={appStyle.row}>
                <Text>{DAYS[day]}</Text>
                <Text syle={appStyle.resultText}>{opening} - {closing}</Text>
            </View>
        </View>

    )
}

export const OpeningHours = ({ openingHours }) => {
    if (openingHours === null) {
        return null;
    } else {
        return (
            <View style={appStyle.container}>
                <View style={appStyle.openingHours}>
                    {
                        openingHours.map((val, i) => {
                            if (val !== null) {
                                return (
                                    <DayElement
                                        key={i}
                                        day={i}
                                        opening={val[0]}
                                        closing={val[1]}
                                    />
                                )
                            } else {
                                return null
                            }

                        })
                    }
                </View>
            </View>
        )
    }
}
