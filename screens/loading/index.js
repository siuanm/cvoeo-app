// @flow;

import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {AppLoading, Asset, Font} from 'expo';
import {Ionicons} from '@expo/vector-icons';
import * as actions from './actions';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import Login from '../login';
import MainTabNavigator from '../../navigation/MainTabNavigator'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    statusBarUnderlay: {
        height: 24,
        backgroundColor: 'rgba(0,0,0,0.2)'
    }
});


type Props = {
    initialized: boolean,
    actions: Object,
    user: Object,
    userIsLoggedIn: boolean
};

class LoadingScreen extends Component<Props> {


    constructor(props) {
        super(props);
        this._handleFinishLoading = this._handleFinishLoading.bind(this);
        this._handleLoadingError = this._handleLoadingError.bind(this);
    }

    _loadResourcesAsync = async () => Promise.all([
        this.props.actions.initialize(),
        Asset.loadAsync([
            require('../../assets/images/cvoeo-logo.png')
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free
            // to remove this if you are not using it in your app
            'space-mono': require('../../assets/fonts/SpaceMono-Regular.ttf')
        })
    ]);

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        // console.warn(error);
        // this.props.actions.loadingCompleted(false, error);
    };

    _handleFinishLoading = () => {
        // this.props.actions.loadingCompleted();
    };

    render() {
        switch (true) {
            case (!this.props.initialized):
                return (
                    <AppLoading
                        startAsync={this._loadResourcesAsync}
                        onError={this._handleLoadingError}
                        onFinish={this._handleFinishLoading}
                    />
                );
              case (!this.props.userIsLoggedIn) :
                return (
                    <Login/>
                );

            default :
                return (
                    <View style={[styles.container, {padding: 0, margin: 0}]}>
                        <MainTabNavigator/>
                    </View>
                );
        }
    }

}

function mapStateToProps(state) {
    return {
        initialized: state.loading.initialized,
        userIsLoggedIn: state.login.userIsLoggedIn,
        user: state.login.user || {}
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoadingScreen);
