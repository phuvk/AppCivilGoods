import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class Home extends Component {
    openSideMenu() {
        this.props.navigation.openDrawer();
    }
    render() {
        return (
            <View  style={styles.container}>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.sideMenuContainer} onPress={() => this.openSideMenu()}>
                        <Image style={styles.slideMenuIcon} source={require('./images/menu.png')}/>
                    </TouchableOpacity>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Mad App</Text>
                    </View>
                    <TouchableOpacity style={styles.cartContainer}>
                        <Image style={styles.cartIcon} source={require('./images/cart.png')}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentContainer}>
                     <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.itemIconContainer}>
                            <Image style={styles.itemIcon} source={require('./images/shopping.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.itemText}>
                            Mua Hàng
                        </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.itemIconContainer}>
                                <Image style={styles.itemIcon} source={require('./images/repair.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.itemText}>
                            Sửa Chữa
                        </Text>
                    </View>
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.itemIconContainer}>
                            <Image style={styles.itemIcon} source={require('./images/contact.png')}/>
                        </TouchableOpacity>
                        <Text style={styles.itemText}>
                            Liên Hệ
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerContainer: {
        height: 120,
        flexDirection: 'row'
    },
    sideMenuContainer: {
        flex: 1
    },
    slideMenuIcon: {
        width: 25,
        height: 20,
        marginTop: 50,
        marginLeft: 15
    },
    titleContainer: {
        flex: 1
    },
    title: {
        flex: 1,
        color: '#2980b9',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        textAlignVertical: 'center'
    },
    cartContainer: {
        flex: 1,
        alignItems: 'flex-end'
    },
    cartIcon: {
        width: 35,
        height: 35,
        marginTop: 45,
        marginRight: 15
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    itemContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 40
    },
    itemIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    itemIcon: {
        width: 80,
        height: 80
    },
    itemText: {
        flex: 1,
        color: '#2980b9',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'left'
    }
});