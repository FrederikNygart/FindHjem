import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { appStyle } from '../lib/styles';
import { InfoBox } from '../components/info_element';
import { OpeningHours } from '../components/opening_hours'
import { Text, View, ScrollView } from 'react-native';
import {
    goTo,
    getCatagories,
    filterCentersByAge,
    filterCentersByGender,
} from '../actions';

class CenterScreen extends Component {

    constructor(state) {
        super(state)
    }

    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.centerName}`,
    });

    render() {
        return (
            <View style={appStyle.container}>
                
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
                
            </View>
        );
    }

    /**
     * ensures an updated choice_list_screen when going back -- a bit hacky and should be 
     * replaced with a more elegant solution such as onBackPressed(). 
     * Though documentation for react navigation is still scarce
     */
    componentWillUnmount() {
        this.props.filterCentersByAge(this.props.user.age);
        this.props.filterCentersByGender(this.props.user.gender);
        this.props.getCatagories();
    }
}

function mapStateToProps(state) {
    return {
        center: state.centers.current[0],
        user: state.user,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        goTo,
        getCatagories,
        filterCentersByAge,
        filterCentersByGender,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CenterScreen);