import Icon from 'react-native-vector-icons/FontAwesome'
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { appStyle, style } from '../lib/styles';
import {
    View,
    Text,
    TouchableHighlight,
    Linking,
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
            <TouchableHighlight
                onPress={() => mailTo(email)}
                activeOpacity={0.99}
                underlayColor={'steelblue'}
            >
                <View style={style.centerInfo.element}>
                    <InfoElement
                        icon='envelope'
                        infoText={email}
                    />
                </View>
            </TouchableHighlight>

        );
    } else {
        return null;
    }
}

const mailTo = (email) => {
    Communications.email([email], null,null,null,null)
}

const AdressInfo = ({ adress }) => {
    if (adress !== null) {
        let { street, postalCode, city } = adress
        return (
            <TouchableHighlight
                onPress={() => findOnMaps(street, postalCode)}
                activeOpacity={0.99}
                underlayColor={'steelblue'}
            >
                <View style={style.centerInfo.element}>
                    <InfoElement
                        icon='map-marker'
                        infoText={'' + street + ', ' + postalCode + ' ' + city}
                    />
                </View>
            </TouchableHighlight>
        )
    } else {
        return null;
    }
}

const findOnMaps = (street, postalCode) => {
    let cleanStreet = street.replace(/\s+/g, '');
    Linking.openURL(
        'https://www.google.com/maps/search/?api=1&query=' + cleanStreet + '+' + postalCode
    )
}

const PhoneInfo = ({ phoneNumbers }) => {
    return (
        <View>
            {
                phoneNumbers.map((number, i) => {
                    return (
                        <TouchableHighlight
                            onPress={() => callUp(number)}
                            activeOpacity={0.99}
                            underlayColor={'steelblue'}
                            key={i}
                        >
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
                        </TouchableHighlight>
                    )
                })
            }
        </View>
    )
};

const callUp = (phoneNumber) => {
    Communications.phonecall(phoneNumber, true)
}

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

