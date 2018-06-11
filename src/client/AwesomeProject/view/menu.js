import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Image} from 'react-native';

export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.userItemContainer}>
                    <TouchableOpacity style={styles.itemIconContainer}>
                        <Image style={styles.userItemIcon} source={require('./images/user.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.userItemText}>
                        Vương Khả Phú
                    </Text>
                </View>
                <View style={styles.itemContainer}>
                    <TouchableOpacity style={styles.itemIconContainer}>
                        <Image style={styles.itemIcon} source={require('./images/cart.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.itemText}>
                        Giỏ Hàng
                    </Text>
                </View>
                <View style={styles.itemContainer}>
                    <TouchableOpacity style={styles.itemIconContainer}>
                        <Image style={styles.itemIcon} source={require('./images/tag.png')}/>
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
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        marginTop: 24
    },
    itemContainer: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    userItemContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#2980b9',
    },
    itemIconContainer: {
        flex: 2,
        alignItems: 'center',
        paddingTop: 15,
        paddingBottom: 15
    },
    itemIcon: {
        width: 40,
        height: 40
    },
    userItemIcon: {
        width: 40,
        height: 40
    },
    itemText: {
        flex: 3,
        color: '#2980b9',
        fontSize: 16,
        textAlign: 'left'
    },
    userItemText: {
        flex: 3,
        color: '#fff',
        fontSize: 16,
        textAlign: 'left'
    }
});