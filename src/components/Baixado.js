import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import styles from '../styles';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_400Regular
} from '@expo-google-fonts/montserrat';

export default props => {

    let [fontsLoaded] = useFonts({
        Montserrat_400Regular
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

    return(
        <View style={styles.row}>
            <View style={props.last ? styles.containerNomeBaixadoBottom : styles.containerNomeBaixado}>
                <Text style={my_styles.txt}>{props.nome}</Text>
            </View>
            <View style={props.last ? styles.containerDiasBaixadoBottom : styles.containerDiasBaixado}>
                <Text style={my_styles.txt}>{props.dias}</Text>
            </View>
        </View>
    )
}}

const my_styles = StyleSheet.create({
    txt: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Montserrat_400Regular'
    }
})