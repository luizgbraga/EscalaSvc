import React from 'react';
import {
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import styles from '../styles';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

export default props => {
    
    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {
    
    return(
    <View style={{ width: 500, alignItems: 'center' }}>
        <TouchableOpacity onPress={() => props.handleInput(props.nome, props.efetivo, props.prioridade)}>
            <View style={styles.buttonAdicionar}>
                <Text style={{
                    fontFamily: 'Montserrat_600SemiBold',
                    fontSize: 20
                }}>Adicionar</Text>
            </View>
        </TouchableOpacity>
    </View>
    )
}}