import React from 'react';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import Splash from './splash';
import Login from './login';
import Home from './home';
import Menu from './menu';

export const HomeStack = createStackNavigator ({
    Splash_Screen: {
        screen: Splash,
        navigationOptions: {
            header: null
        }
    },
    Login_Screen: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
    Home_Screen: {
        screen: Home,
        navigationOptions: {
            header: null
        }
    }
});

export const SideMenu = createDrawerNavigator(
    {
        HomeStack: {
            screen: HomeStack
        }
    },
    {
        drawerWidth: 300,
        contentComponent: props => <Menu {...props}/>
    }
);