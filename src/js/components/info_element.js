import Icon from 'react-native-vector-icons/FontAwesome'
import React, { Component } from 'react';
import { appStyle } from '../lib/styles';
import {
    View,
    Text
} from 'react-native';


const InfoElement = ({ icon, infoText }) => {
    return (
        <View style={appStyle.row}>
            <Icon name={icon} ></Icon>
            <Text style={appStyle.resultText}>
                {infoText}
            </Text>
        </View>
    )
};

const EmailInfo = ({ email }) => {
    if (email !== null) {
        return (
            <View style={appStyle.containerBox}>
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

const AdressInfo = ({ city, postalCode, street }) => (
    <View style={appStyle.containerBox}>
        <InfoElement
            icon='map-marker'
            infoText={'' + street + ', ' + postalCode + ' ' + city}
        />
    </View>
)

const PhoneInfo = ({ phoneNumbers }) => {
    return (
        <View>
            {
                phoneNumbers.map((number, i) => {
                    return (
                        <View 
                            style={appStyle.containerBox}
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
        <View>
            <AdressInfo
                {...adress}
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

