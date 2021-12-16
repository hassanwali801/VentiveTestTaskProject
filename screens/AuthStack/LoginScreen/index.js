import React, { useState, useEffect } from "react";
import {
    View,
    Text
} from "react-native";
import { styles } from "./Styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from "react-redux";
import { showErrorMsg } from "../../../utils/flashMessage";

import Strings from '../../../locales/en.json'
import InputField from '../../../components/InputField'
import Button from '../../../components/Button'
import colors from "../../../utils/colors";
import { setUser, userSessionChangeState } from '../../../actions/userSession'

const LoginScreen = ({ navigation }) => {

    const dispatch = useDispatch()

    const { users = [] } = useSelector(state => state.userSession)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onSignupPress = async () => {
        if (email === "") {
            showErrorMsg("Email is required");
        } else if ((/^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/).test(email.trim()) == false) {
            showErrorMsg('Email format is invalid')
        } else if (password === "") {
            showErrorMsg("Password is required");
        } else if (password.length < 6) {
            showErrorMsg("Password must be atleast 6 character");
        } else {
            checkUser()
        }
    };

    const checkUser = () => {
        let user = null
        for (const iterator of users) {
            if (iterator.email == email) {
                user = iterator
                break
            }
        }
        console.log('user', user)
        if (!user || (user && user?.password !== password)) showErrorMsg("Invalid Credentials!");
        else dispatch(setUser(user))
    }

    const signUpBtn = () => {
        navigation.navigate('SignupScreen')
    }

    const loginBtn = () => {
        onSignupPress()
    }
    return (
        <SafeAreaView style={styles.safeStyle}>
            <Text style={styles.headerText}>{Strings.login.login}</Text>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <InputField
                    customStyle={{ marginTop: 30 }}
                    placeholder={Strings.global.placeholderEmail}
                    value={email}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    autoComplete={'email'}
                    textContentType={'emailAddress'}
                    onChangeText={(text) => {
                        setEmail(text)
                    }}
                />
                <InputField
                    placeholder={Strings.global.placeholderPassword}
                    value={password}
                    secureType={true}
                    onChangeText={(text) => {
                        setPassword(text)
                    }}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        text={Strings.login.signUpBtn}
                        textStyle={{ color: colors.lightGreen }}
                        backgroundColorStyle={styles.loginBtnStyle}
                        clickAction={signUpBtn.bind(this)}
                    />
                    <Button
                        text={Strings.login.loginBtn}
                        backgroundColorStyle={{ width: '62%' }}
                        clickAction={loginBtn.bind(this)}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default LoginScreen;
