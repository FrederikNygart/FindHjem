import React, { Component } from 'react';
import { HeaderBackButton } from 'react-navigation';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appStyle } from '../lib/styles';
import { InfoBox } from '../components/info_element';
import { OpeningHours } from '../components/opening_hours'
import * as types from '../lib/types';
import {
    Text,
    View,
    ScrollView
} from 'react-native';
import {
    goTo,
    getCatagories,
} from '../actions';

const BackButton = ({ navigation }) => {
    let deselectCatagory = navigation.state.params.catagorySelected
    if (deselectCatagory) {
        return <HeaderBackButton onPress={() => navigation.dispatch({ type: types.POP_CATAGORY })} />
    } else {
        return <HeaderBackButton onPress={() => navigation.dispatch({ type: types.GO_BACK })} />
    }
}

class CenterScreen extends Component {

    constructor(state) {
        super(state)
    }

    static navigationOptions = ({ navigation }) => ({
        title: ``,
        headerLeft: <BackButton navigation={navigation}/>,
    });

    render() {
        return (
            <View style={appStyle.container}>
                <ScrollView>
                    <InfoBox
                        adress={this.props.center.adress}
                        email={this.props.center.email}
                        phone={this.props.center.phoneNumbers}
                    />

                    <View style={appStyle.container}>
                        <Text style={appStyle.centerDescription}>{this.props.center.description}</Text>
                    </View>

                    <OpeningHours
                        openingHours={this.props.center.centerOpening}
                    />
                </ScrollView>
            </View>
        );
    }

    /**
     * ensures an updated choice_list_screen when going back -- a bit hacky and should be 
     * replaced with a more elegant solution such as onBackPressed(). 
     * Though documentation for react native navigation is still scarce
     */
    componentWillUnmount() {
    }
}

function mapStateToProps(state) {
    return {
        center: state.catagories.center,
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        goTo,
        getCatagories
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterScreen);