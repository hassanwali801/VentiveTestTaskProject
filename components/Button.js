import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    Image,
    ActivityIndicator
} from 'react-native'
import colors from '../utils/colors'
import fonts from '../assets/fonts'

const Button = (props) => {
    const { loading, color, size } = props
    return (
        <TouchableOpacity
            onPress={props.clickAction}
            activeOpacity={props.opacity}
            style={[style.innerContainer, props.backgroundColorStyle]}
        >
            {loading &&
                <ActivityIndicator
                    animating={loading}
                    size={size ? size : 'small'}
                    color={color ? color : colors.white}
                    style={[{ marginRight: 15 }]}
                />
            }
            <Image style={props.imageStyle} resizeMode={'contain'} source={props.img} />
            <Text style={[style.txt, props.textStyle]}>{props.text}</Text>
            <Image style={props.imageStyleRight} resizeMode={'contain'} source={props.imgRight} />
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    innerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        backgroundColor: colors.lightOrange,
        borderRadius: 10,
        shadowColor: colors.lightOrange,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    },
    txt: {
        color: colors.white,
        fontFamily: fonts.Bold,
        fontSize: 12,
        textAlign: 'center'
    }
});

export default Button