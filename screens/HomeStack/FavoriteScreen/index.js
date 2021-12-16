import React, { useState } from "react";
import {
    View,
    Text
} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign';


import styles from "./styles";
import Strings from '../../../locales/en.json'
import Header from '../../../components/Header'
import { NotificationIcon } from '../../../assets/icons'
import colors from '../../../utils/colors'

const FavoriteScreen = (props) => {

    const { navigation } = props

    return (
        <SafeAreaView style={styles.safeStyle}>
            <Header
                hearderText={Strings.secondTab.headerText}
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
            <Text style={styles.headingStyle}>{Strings.secondTab.headingText}</Text>
            </View>
        </SafeAreaView>
    );
};
export default FavoriteScreen;
