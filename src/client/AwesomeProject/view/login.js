import React, {Component} from 'react';
import {View, Image, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import LoginController from '../controller/logincontroller';
import Utils from './utils';

export default class Login extends Component {
    login() {
        //if (LoginController.check(this.username, this.password)) {
            Utils.navigate(this, 'Home_Screen', false);
        //}
    }
    render() {
        return(
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <KeyboardAwareScrollView
                        resetScrollToCoords={{ x: 0, y: 0 }}
                        contentContainerStyle={styles.container}
                        scrollEnabled
                        enableOnAndroid
                        keyboardShouldPersistTaps='always'>
                        <View style={styles.titleContainer}>
                            <Text style={styles.title}>Mad App</Text>
                            <Text style={styles.subtitle}>Phục vụ tận tình 24/7</Text>
                        </View>
                        <View styles={styles.headerContainer}>
                            <Text style={styles.headerText}>Nhập thông tin</Text>
                        </View>
                        <View style={styles.formContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder='Họ và Tên'
                                placeholderTextColor='#2980b9'
                                selectionColor={'#2980b9'}
                                underlineColorAndroid={'rgba(255, 255, 255, 0)'}
                                returnKeyType='next'
                                onSubmitEditing={() => this.phoneInput.focus()}
                                onChangeText={(text) => this.name = text}>
                            </TextInput>
                            <TextInput
                                style={styles.input}
                                placeholder='Số điện thoại'
                                placeholderTextColor='#2980b9'
                                selectionColor={'#2980b9'}
                                underlineColorAndroid={'rgba(255, 255, 255, 0)'}
                                returnKeyType='next'
                                keyboardType='numeric'
                                ref={(input) => this.phoneInput = input}
                                onSubmitEditing={() => this.emailInput.focus()}
                                onChangeText={(text) => this.phone = text}>
                            </TextInput>
                            <TextInput
                                style={styles.input}
                                placeholder='Email'
                                placeholderTextColor='#2980b9'
                                selectionColor={'#2980b9'}
                                underlineColorAndroid={'rgba(255, 255, 255, 0)'}
                                returnKeyType='next'
                                keyboardType='email-address'
                                ref={(input) => this.emailInput = input}
                                onSubmitEditing={() => this.addressInput.focus()}
                                onChangeText={(text) => this.email = text}>
                            </TextInput>
                            <TextInput
                                style={styles.addressInput}
                                placeholder='Địa chỉ'
                                placeholderTextColor='#2980b9'
                                selectionColor={'#2980b9'}
                                underlineColorAndroid={'rgba(255, 255, 255, 0)'}
                                returnKeyType='go'
                                multiline={true}
                                numberOfLines={6}
                                ref={(input) => this.addressInput = input}
                                onChangeText={(text) => this.address = text}>
                            </TextInput>
                        </View>
                </KeyboardAwareScrollView>
                <TouchableOpacity style={styles.buttonContainer} onPress={() => this.login()}>
                    <Text style={styles.buttonText}>XÁC NHẬN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexGrow: 1,
    },
    titleContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: '#2980b9',
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#2980b9',
        textAlign: 'center'
    },
    headerContainer: {
        flex: 1
    },
    headerText: {
        color: '#fff',
        backgroundColor: '#2980b9',
        height: 40,
        textAlignVertical: 'center',
        paddingLeft: 20,
        fontWeight: 'bold',
        fontSize: 16,
    },
    formContainer: {
        padding: 20,
        flex: 4,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#2980b9',
        paddingLeft: 5,
        borderRadius: 5,
        borderColor: '#2980b9',
        borderWidth: 1
    },
    addressInput: {
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        marginBottom: 10,
        color: '#2980b9',
        paddingLeft: 5,
        paddingTop: 10,
        borderRadius: 5,
        borderColor: '#2980b9',
        borderWidth: 1,
        textAlignVertical: 'top',
    },
    buttonContainer: {
        height: 40,
        backgroundColor: '#20618c',
        marginBottom: 10,
        marginLeft: 20,
        marginRight: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
    },
    buttonText: {
        color: '#FFF',
        textAlignVertical: 'center',
    },
});