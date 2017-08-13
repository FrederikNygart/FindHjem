import Icon from 'react-native-vector-icons/FontAwesome'
import React, { Component } from 'react';
import { appStyle, style } from '../lib/styles';
import {
    View,
    Text
} from 'react-native';


const InfoElement = ({ icon, infoText }) => {
    return (
        <View style={style.centerInfo.row}>
            <View
                style={style.centerInfo.iconContainer}
            >
                <Icon name={icon} ></Icon>
            </View>
            <View
                style={style.centerInfo.textContainer}
            >
                <Text style={style.centerInfo.text}>
                    {infoText}
                </Text>
            </View>
        </View>
    )
};

const EmailInfo = ({ email }) => {
    if (email !== null) {
        return (
            <View style={style.centerInfo.element}>
                <InfoElement
                    icon='envelope'
                    infoText={email}
                />
            </View>
        );
    } else {
        return null;
    }
}

const AdressInfo = ({adress}) => {
    if (adress !== null) {
        let {street, postalCode, city} = adress
        return (
            <View style={style.centerInfo.element}>
                <InfoElement
                    icon='map-marker'
                    infoText={'' + street + ', ' + postalCode + ' ' + city}
                />
            </View>
        )
    } else {
        return null;
    }
}

const PhoneInfo = ({ phoneNumbers }) => {
    return (
        <View>
            {
                phoneNumbers.map((number, i) => {
                    return (
                        <View
                            style={style.centerInfo.element}
                            key={i}
                        >
                            <InfoElement
                                key={number}
                                icon='phone'
                                infoText={number}
                            />
                        </View>
                    )
                })
            }
        </View>
    )
};

export const InfoBox = ({ adress, email, phone }) => {

    return (
        <View style={style.centerInfo.container}>
            <AdressInfo
                adress={adress}
            />
            <EmailInfo
                email={email}
            />
            <PhoneInfo
                phoneNumbers={phone}
            />
        </View>
    )
};

