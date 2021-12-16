import React from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar
} from 'react-native';
import _ from 'lodash'

import colors from '../utils/colors';
import fonts from '../assets/fonts';

export default Header = (props) => {

    return (
        <SafeAreaView>
            <View style={[styles.container, props.containerStyle]} >
                <TouchableOpacity
                    disabled={_.isNil(props.onLeftAction)}
                    onPress={() => {
                        if (props.onLeftAction && typeof props.onLeftAction) {
                            props.onLeftAction()
                        }
                    }}
                    style={[styles.buttonLeftContainer, props.leftButtonContainerStyle]}>
                    {props.leftIconChildren ?
                        props.leftIconChildren
                        :
                        props.leftIcon &&
                        <Image
                            style={[styles.buttonIcon, props.leftButtonIconStyle]}
                            source={props.leftIcon}
                        />
                    }
                    {props.leftText &&
                        <Text style={[styles.buttonText, props.leftButtonTextStyle]}>
                            {props.leftText}
                        </Text>
                    }
                </TouchableOpacity>
                <View style={[styles.centerComponentStyle, props.centerComponentExtraStyle]}>
                    {props.hearderText &&
                        <Text style={[styles.hearderText, props.hearderTextStyle]}>
                            {props.hearderText}
                        </Text>
                    }
                </View>
                <TouchableOpacity
                    disabled={_.isNil(props.onRightAction)}
                    onPress={() => {
                        if (props.onRightAction && typeof props.onRightAction) {
                            props.onRightAction()
                        }
                    }}
                    style={[styles.buttonRightContainer, props.rightButtonContainerStyle]}>
                    {props.rightIcon &&
                        <Image
                            style={[styles.rightIconStyle, props.rightButtonIconStyle]}
                            source={props.rightIcon}
                        />
                    }
                    {props.rightText &&
                        <Text style={[styles.buttonText, props.rightButtonTextStyle]}>
                            {props.rightText}
                        </Text>
                    }
                </TouchableOpacity>
            </ View>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 65,
        width: '100%',
        backgroundColor: '#00000000',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 15,
    },
    buttonLeftContainer: {
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    buttonRightContainer: {
        width: 65,
        height: 65,
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexDirection: 'row',
    },
    centerComponentStyle: {
        height: '100%',
        justifyContent: 'center',
        textAlign: 'center',
        width: '57%',
    },
    buttonIcon: {
        width: 30, height: 30,
        resizeMode: 'contain',
    },
    rightIconStyle: {
        width: 26,
        height: 26,
        borderRadius: 10,
        resizeMode: 'contain',
    },
    buttonText: {
    },
    hearderText: {
        fontSize: 16,
        fontFamily: fonts.Bold,
        color: colors.black,
        textAlign: 'center'
    }
})
