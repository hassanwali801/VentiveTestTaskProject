import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

//Screens
import HomeScreen from './HomeScreen'
import FavoriteScreen from './FavoriteScreen'
import EventScreen from './EventScreen'
import SettingScreen from './SettingScreen'
import NotificationsScreen from './NotificationsScreen'

//Utils
import colors from '../../utils/colors';
import { isIPhoneX } from '../../utils/dimensions'

//Components
import DrawerComponent from '../../components/DrawerComponent';

//Assets
import {
    HomeTabIcon,
    EventTabIcon,
    FavoriteTabIcon,
    SettingTabIcon
} from '../../assets/icons'

const TabButton = (props) => {
    const { focused, icon, label } = props
    useEffect(() => {

    }, [])
    return (
        <View style={[styles.iconContainer, focused ? {} : { backgroundColor: colors.backgroundTab }]}>
            <Image
                source={icon}
                style={[styles.tabIconStyle, { tintColor: focused ? colors.yellow : colors.textTab }]} />
            <Text
                style={focused ? styles.activeText : styles.unActiveText}>
                {label}
            </Text>
        </View>
    )
}

const MyTabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                showLabel: false,
                keyboardHidesTabBar: true,
                style: styles.tabBarStyle
            }}
            initialRouteName={'HotSignalsScreen'}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name === 'HomeScreen') {
                        return (
                            <TabButton
                                icon={HomeTabIcon}
                                label={'First Tab'}
                                focused={focused}
                            />
                        )
                    }
                    else if (route.name === 'FavoriteScreen') {
                        return (
                            <TabButton
                                icon={FavoriteTabIcon}
                                label={'Second Tab'}
                                focused={focused}
                            />
                        )
                    }
                    else if (route.name === 'EventScreen') {
                        return (
                            <TabButton
                                icon={EventTabIcon}
                                label={'Third Tab'}
                                focused={focused}
                            />
                        )
                    }
                    else if (route.name === 'SettingScreen') {
                        return (
                            <TabButton
                                icon={SettingTabIcon}
                                label={'Fourth Tab'}
                                focused={focused}
                            />
                        )
                    }
                },
            })}>
            <Tab.Screen name="HomeScreen" component={HomeScreen} />
            <Tab.Screen name="FavoriteScreen" component={FavoriteScreen} />
            <Tab.Screen name="EventScreen" component={EventScreen} />
            <Tab.Screen name="SettingScreen" component={SettingScreen} />
        </Tab.Navigator >
    );
}

/** Home Drawer */
const HomeDrawerStack = (props) => (
    <Drawer.Navigator
        drawerStyle={styles.drawerStyle}
        headerMode="none"
        initialRouteName='HomeScreen'
        drawerContent={(props) => <DrawerComponent {...props} />}>
        <Drawer.Screen name="HomeScreen" component={MyTabs} />
        <Stack.Screen name="NotificationsScreen" component={NotificationsScreen} />
    </Drawer.Navigator>
);

/** Home Stack */
const HomeStack = () => (
    <Stack.Navigator
        headerMode="none"
        initialRouteName='HomeDrawerStack'>
        <Stack.Screen name="HomeDrawerStack" component={HomeDrawerStack} />
    </Stack.Navigator>
);

export const styles = StyleSheet.create({
    tabBarStyle: {
        height: 60,
        width: '100%',
        backgroundColor: colors.backgroundTab,
        marginBottom: isIPhoneX() ? 25 : 0,
        overflow: 'hidden',
        borderTopWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,
        elevation: 9,
    },
    activeText: {
        fontSize: 11,
        color: colors.textTab,
        marginTop: 5,
        width: '100%',
        textAlign: 'center'
    },
    unActiveText: {
        fontSize: 11,
        color: colors.textTab,
        marginTop: 5,
        width: '100%',
        textAlign: 'center'
    },
    iconContainer: {
        padding: 5,
        height: 60,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: isIPhoneX() ? 29 : 0
    },
    tabIconStyle: {
        width: 15,
        height: 15,
        resizeMode: 'contain',
    },
    drawerStyle: {
        backgroundColor: colors.white,
        width: '75%'
    }
});

export default HomeStack