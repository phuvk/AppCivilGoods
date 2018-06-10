import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Utils from './utils';

export default class Splash extends Component {
    componentWillMount() {
        setTimeout(()=>{
            Utils.navigate(this, 'Login_Screen', false);
        }, 2000)
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Mad App</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Powered by React Native</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2980b9', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold'
    },
    subtitleContainer: {
        flex: 0,
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 20
    },
    subtitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold'
    }
});