import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, TextInput, TouchableOpacity, KeyboardAvoidingView} from 'react-native';
import LoginController from '../controller/logincontroller'
import Utils from './utils';

export default class Login extends Component {
    login() {
        if (LoginController.check(this.username, this.password)) {
            Utils.navigate(this, 'Home_Screen', false);
        }
    }
    render() {
        return(
            <View  style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image style={styles.logo} source={require('./images/logo.png')}/>
                    <Text style={styles.title}>An app made by Mad team using React Native</Text>
                </View>
                <KeyboardAvoidingView style={styles.formContainer} behavior='padding' enabled>
                    <TextInput
                        style={styles.input}
                        placeholder='Username or Email'
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        selectionColor={'#2980b9'}
                        underlineColorAndroid={'rgba(255, 255, 255, 0)'}
                        returnKeyType='next'
                        keyboardType='email-address'
                        onSubmitEditing={() => this.passwordInput.focus()}
                        onChangeText={(text) => this.username = text}>

                    </TextInput>
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry
                        placeholderTextColor='rgba(255, 255, 255, 0.5)'
                        selectionColor={'#2980b9'}
                        underlineColorAndroid={'rgba(255, 255, 255, 0)'}
                        returnKeyType='go'
                        ref={(input) => this.passwordInput = input}
                        onChangeText={(text) => this.password = text}>
                    </TextInput>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.login()}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2980b9'
    },
    logoContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonContainer: {
        backgroundColor: '#20618c',
        paddingVertical: 15,
        marginBottom: 10,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: '#FFF'
    },
    logo: {
        width: 70,
        height: 70,
    },
    title: {
        color: 'white',
        marginTop: 10,
        width: 180,
        textAlign: 'center',
        opacity: 0.5
    },
    formContainer: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#FFF',
        paddingLeft: 5,
    }
});