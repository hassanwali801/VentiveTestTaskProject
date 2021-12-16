import React, { Component, useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableOpacity,
    Pressable,
} from 'react-native';
import { useSelector, useDispatch } from "react-redux";

import fonts from '../assets/fonts';
import colors from '../utils/colors';
import Strings from '../locales/en.json'

import { userSessionChangeState, logoutUser } from '../actions/userSession'

const DrawerItem = (props) => {

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={[styles.drawerItemContainer, props.containerStyle]}
            onPress={() => {
                if (props.onPress && typeof props.onPress == 'function') props.onPress()
            }}>
            {/* <Image style={styles.itemLeftImage} source={props.icon} /> */}
            <Text style={[styles.itemText, props.titleStyle]}>{props.title}</Text>
            {props.isNotification &&
                <View style={styles.notificationContainer}>
                    <Text style={[styles.notificationCounter, props.titleStyle]}>{'13'}</Text>
                </View>
            }
            {props.loading &&
                <ActivityIndicator
                    animating={props.loading}
                    size={'small'}
                    color={colors.lightBlack}
                    style={[{ marginLeft: 5 }]}
                />
            }
        </TouchableOpacity>
    )
}

const CompanyDrawerContent = (props) => {
    const { navigation } = props
    const dispatch = useDispatch()
    const { currentUser, users } = useSelector((state) => state.userSession)

    const navigateToNext = (nextRoute) => {
        navigation.closeDrawer()
        navigation.navigate(nextRoute)
    }
    
    return (
        <ScrollView
            bounces={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.drawerContainer}>
                <View style={styles.topContainer}>
                    <Pressable
                        onPress={() => {
                        }}
                        style={styles.profileContainer}>
                        <View>
                            <Text style={styles.profileName}>{`${currentUser?.firstName} ${currentUser?.lastName}`}</Text>
                            <Text style={styles.profileEmail}>{currentUser?.email}</Text>
                        </View>
                    </Pressable>
                </View>
                <DrawerItem
                    title={Strings.drawer.homeDrawerItemText}
                    onPress={() => {
                        navigateToNext('HomeScreen', true)
                    }}
                />
                <View style={styles.barStyle} />
                <DrawerItem
                    title={Strings.drawer.signoutDrawerItemText}
                    titleStyle={{ color: colors.lightRed }}
                    onPress={() => {
                        navigation.closeDrawer()
                        dispatch(logoutUser())
                    }}
                />

            </View>
        </ScrollView>
    )
}
export default CompanyDrawerContent
const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        // alignItems: 'center',
    },
    topContainer: {
        backgroundColor: '#F1F8F8',
        width: '100%',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 43,
        paddingBottom: 25,
    },
    profileContainer: {
    },
    imageContainer: {
        width: 73,
        height: 73,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    drawerItemContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        justifyContent: 'space-between'
    },
    itemLeftImage: {
        width: 12,
        height: 13,
        resizeMode: 'contain'
    },
    itemText: {
        color: '#0A0D31',
        fontSize: 14,
        width: '60%',
        fontFamily: fonts.Regular,
    },
    profileName: {
        color: '#0A0D31',
        fontSize: 18,
        fontFamily: fonts.Bold,
        marginTop: 10,
    },
    profileEmail: {
        color: colors.inputTextColor,
        fontSize: 14,
        fontFamily: fonts.Regular,
    },
    notificationCounter: {
        color: colors.white,
        fontSize: 12,
        fontFamily: fonts.Medium,
    },
    barStyle: {
        height: 1,
        width: '90%',
        backgroundColor: colors.inputTextColor,
        alignSelf: 'flex-end',
        marginTop: 20,
    },
    notificationContainer: {
        width: 18,
        height: 18,
        borderRadius: 9,
        backgroundColor: colors.lightGreen,
        alignItems: 'center',
        justifyContent: 'center'
    }
})