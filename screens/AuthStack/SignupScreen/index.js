import React, { useState, useEffect } from "react";
import {
    View,
    Text,
} from "react-native";
import { styles } from "./Styles";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch, useSelector } from "react-redux";
import { showErrorMsg } from "../../../utils/flashMessage";

import Strings from '../../../locales/en.json'
import colors from "../../../utils/colors";
import InputField from '../../../components/InputField'
import Button from '../../../components/Button'
import { createUser } from "../../../actions/userSession";

const SignupScreen = (props) => {

    const { navigation } = props

    const dispatch = useDispatch()

    const { users = [] } = useSelector(state => state.userSession)

    const [firstName, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const onSignupPress = async () => {
        if (firstName === "") {
            showErrorMsg("Name is required");
        } else if (lastName === "") {
            showErrorMsg("Last Name is required");
        } else if (email === "") {
            showErrorMsg("Email is required");
        } else if ((/^\w+([\.+-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/).test(email.trim()) == false) {
            showErrorMsg('Email format is invalid')
        } else if (password === "") {
            showErrorMsg("Password is required");
        } else if (password.length < 6) {
            showErrorMsg("Password must be atleast 6 character");
        }  else if (password!=confirmPassword) {
            showErrorMsg("Password not match with confirm password");
        } else {
            createNewUser()
        }
    };

    const createNewUser = () => {
        const user = null
        for (const iterator of users) {
            if (iterator.email == email) {
                user = iterator
            }
        }
        if (user) showErrorMsg("Email already exist!");
        else dispatch(createUser({
            firstName, lastName, email, password
        }))
    }

    const loginBtn = () => {
        navigation.navigate('LoginScreen')
    }

    return (
        <SafeAreaView style={styles.safeStyle}>
            <Text style={styles.headerText}>{Strings.signUp.signUp}</Text>
            <KeyboardAwareScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ flexGrow: 1 }}>
                <InputField
                    customStyle={{ marginTop: 30 }}
                    placeholder={Strings.global.placeholderFirstName}
                    value={firstName}
                    onChangeText={(text) => {
                        setName(text)
                    }}
                />
                <InputField
                    placeholder={Strings.global.placeholderLastName}
                    value={lastName}
                    onChangeText={(text) => {
                        setLastName(text)
                    }}
                />
                <InputField
                    placeholder={Strings.global.placeholderEmail}
                    value={email}
                    autoCapitalize={'none'}
                    keyboardType={'email-address'}
                    autoComplete={'email'}
                    textContentType={'emailAddress'}
                    onChangeText={(text) => {
                        setEmail(text.toLocaleLowerCase())
                    }}
                />
                <InputField
                    placeholder={Strings.global.placeholderPassword}
                    value={password}
                    onChangeText={(text) => {
                        setPassword(text)
                    }}
                    secureType={true}
                />
                <InputField
                    placeholder={Strings.global.placeholderConfirmPassword}
                    value={confirmPassword}
                    onChangeText={(text) => {
                        setConfirmPassword(text)
                    }}
                    secureType={true}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        text={Strings.signUp.loginBtn}
                        textStyle={{ color: colors.lightGreen }}
                        backgroundColorStyle={styles.loginBtnStyle}
                        clickAction={loginBtn}
                    />
                    <Button
                        text={Strings.signUp.signUpBtn}
                        // textStyle={{ }}
                        backgroundColorStyle={{ width: '62%' }}
                        clickAction={onSignupPress}
                    />
                </View>
            </KeyboardAwareScrollView>
        </SafeAreaView>
    );
};

export default SignupScreen;
