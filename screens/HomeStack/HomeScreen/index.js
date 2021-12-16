import React, { useState } from "react";
import {
    View,
    Text,
    NativeModules
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign';


import styles from "./styles";
import Strings from '../../../locales/en.json'
import Header from '../../../components/Header'
import Button from '../../../components/Button'
import { NotificationIcon } from '../../../assets/icons'
import colors from '../../../utils/colors'

const { ToastNativeModule } = NativeModules;

const HomeScreen = (props) => {

    const { navigation } = props

    return (
        <SafeAreaView style={styles.safeStyle}>
            <Header
                hearderText={Strings.firstTab.headerText}
                leftIconChildren={
                    <AntDesign
                        name={"menu-fold"}
                        size={22}
                        color={colors.iconColor}
                    />
                }
                onLeftAction={() => {
                    navigation.toggleDrawer()
                }}
                rightIcon={NotificationIcon}
                onRightAction={() => {
                    navigation.navigate('NotificationsScreen')
                }}
            />
            <View style={styles.mainContainerStyle}>
                <Text style={styles.headingStyle}>{Strings.firstTab.headingText}</Text>
                <Button
                    text={'Show Android Native Toast'}
                    backgroundColorStyle={{ marginTop: 20 }}
                    clickAction={() => {
                        console.log("test", ToastNativeModule != null)
                        if (ToastNativeModule) {
                            ToastNativeModule.showNativeToast("Android native Toast Only....")
                        }
                    }}
                />
            </View>
        </SafeAreaView>
    );
};
export default HomeScreen;
