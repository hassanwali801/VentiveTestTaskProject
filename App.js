import React, { useEffect, useRef } from "react";
import { LogBox, StatusBar } from 'react-native'
import { store } from './store'
import { Provider } from 'react-redux';
import FlashMessage from 'react-native-flash-message';
import { useDispatch } from 'react-redux'

import AppNavigator from './navigation'
import * as Navigator from './navigation/RootNavigation';
import { userSessionChangeState } from "./actions/userSession";

LogBox.ignoreAllLogs(true)
StatusBar.setTranslucent(true)
StatusBar.setBackgroundColor('#00000000')
StatusBar.setBarStyle('dark-content')

const MainRouting = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {

  }, []);

  return (
    <>
      <AppNavigator />
      <FlashMessage position="bottom" floating={true} />
    </>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainRouting />
    </Provider>
  );
};

export default App