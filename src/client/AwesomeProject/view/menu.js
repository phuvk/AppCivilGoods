import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class Menu extends Component {
    render() {
        return (
            <View  style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Side Menu</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2980b9'
    },
    header: {
        height: 70,
        backgroundColor: '#20618c'
    },
    titleContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    iconContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    icon: {
        width: 30,
        height: 30,
        marginTop: 25,
        marginLeft: 10
    }
});