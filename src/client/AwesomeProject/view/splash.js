import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
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
                    <Image style={styles.logo} source={require('./images/logo.png')}/>
                    <Text style={styles.title}>Mad App</Text>
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Powered by Mad Team</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff', 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 70,
        height: 70,
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: '#2980b9',
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
        color: '#2980b9',
        fontSize: 15,
        fontWeight: 'bold'
    }
});