import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class Home extends Component {
    openSideMenu() {
        this.props.navigation.openDrawer();
    }
    render() {
        return (
            <View  style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity style={styles.iconContainer} onPress={() => this.openSideMenu()}>
                        <Image style={styles.icon} source={require('./images/menu.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Welcome to Home Page</Text>
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