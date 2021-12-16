import React from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native'
import colors from '../utils/colors';
import fonts from '../assets/fonts'
import icons from '../assets/icons';

const InputBox = (props) => {
    return (
        <View style={props.mainStyle}>
            {props.inputHeading &&
                <Text style={[style.inputHeading, props.customStylingHeading]}>{props.inputHeading}<Text style={style.secondHeadingTextStyle}>{props.inputHeadingSecond}</Text></Text>
            }
            <View style={[style.mainContainer, props.customStyle]}>
                {props.showLeftIcon &&
                    <TouchableOpacity
                        onPress={props.onLeftPress}
                    >
                        <Image
                            source={icons.searchIcon}
                            style={style.rightIcon} />
                    </TouchableOpacity>
                }
                <TextInput
                    // keyboardType={props.tholder}
                    style={[style.inputField, { width: (!props.showRightText && !props.showRightIcon && !props.showRightLoading) ? '97%' : '70%' }, props.customInputStyle]}
                    onFocus={() => {
                        if (typeof props.onFocus == 'function') {
                            props.onFocus()
                        }
                    }}
                    onChangeText={(text) => {
                        if (typeof props.onChangeText == 'function') {
                            props.onChangeText(text)
                        }
                    }}
                    placeholderTextColor={colors.inputTextColor}
                    secureTextEntry={props.secureType}
                    {...props}
                />
                {props.showRightText && <Text style={style.rightText}>Not Available</Text>}
                {props.showRightLoading &&
                    <ActivityIndicator
                        animating={true}
                        size={'small'}
                        color={colors.green}
                    />
                }
                {props.showRightIcon &&
                    <TouchableOpacity
                        onPress={props.onRightPress}
                    >
                        <Image
                            source={props.secureType ? icons.showPasswordIcon : icons.hidePasswordIcon}
                            style={style.rightIcon} />
                    </TouchableOpacity>
                }
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        height: 50,
        backgroundColor: colors.InputFieldBackground,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        // opacity:.3
    },
    inputField: {
        width: '70%',
        fontSize: 14,
        color: colors.inputTextColor,
        fontFamily: fonts.Regular,
    },
    rightText: {
        fontSize: 12,
        color: colors.lightRed,
        color: 'red'
    },
    rightIcon: {
        width: 18,
        height: 18,
        resizeMode: 'contain',
        tintColor: colors.black,
        marginRight:15
    },
    inputHeading: {
        fontSize: 12,
        color: colors.black,
        marginTop: 10,
        fontFamily: fonts.Medium
    },
    secondHeadingTextStyle: {
        fontSize: 11,
        fontFamily: fonts.Regular,
        color: colors.lightGrey

    }
});

export default InputBox