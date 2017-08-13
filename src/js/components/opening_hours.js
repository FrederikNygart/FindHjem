import { appStyle, style } from '../lib/styles';
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
            style={style.openingHours.element}
        >
            <View style={style.openingHours.row}>
                <View style={style.openingHours.dayContainer}>
                    <Text style={style.openingHours.textDay}>{DAYS[day]}</Text>
                </View>
                <View style={style.openingHours.hoursContainer}>
                    <Text style={style.openingHours.textHours}>{opening} - {closing}</Text>
                </View>
            </View>
        </View>

    )
}

const ClosedDayElment = ({ day }) => (
    <View
        style={style.openingHours.element}
    >
        <View style={style.openingHours.row}>
            <View style={style.openingHours.dayContainer}>
                <Text style={style.openingHours.textDay}>{DAYS[day]}</Text>
            </View>
            <View style={style.openingHours.hoursContainer}>
                <Text style={style.openingHours.textHours}>Lukket</Text>
            </View>
        </View>
    </View>
)

export const OpeningHours = ({ openingHours }) => {
    if (openingHours === null) {
        return null;
    } else {
        return (
            <View style={appStyle.container}>
                <View style={style.openingHours.container}>
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
                                return (
                                    <ClosedDayElment
                                        key={i}
                                        day={i}
                                    />
                                )
                            }

                        })
                    }
                </View>
            </View>
        )
    }
}
