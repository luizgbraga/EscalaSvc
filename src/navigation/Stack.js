import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Main from '../views/Main';
import Alunos from '../views/Alunos';
import PassoStack from '../components/PassoStack';

const Stack = createNativeStackNavigator();

export default props => {
    return(
        <Stack.Navigator
            initialRouteName='Main'
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name='Main'>
                {props => (
                    <PassoStack {...props}>
                        <Main {...props}></Main>
                    </PassoStack>
                )}
            </Stack.Screen>

            <Stack.Screen name='Alunos'>
                {props => (
                    <PassoStack {...props}>
                        <Alunos {...props}></Alunos>
                    </PassoStack>
                )}
            </Stack.Screen>
        </Stack.Navigator>
    )
}