import React from "react";
import {
    View
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Stack from './Stack';

import { Provider } from 'react-redux';
import store from '../store/index';

export default () => (
    <Provider store={store}>
        <View style={{ flex: 1 }}>
            <NavigationContainer>
                <Stack></Stack>
            </NavigationContainer>
        </View>
    </Provider>
)