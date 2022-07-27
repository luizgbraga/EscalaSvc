import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';

import styles from '../styles';
import { connect } from 'react-redux';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_500Medium
} from '@expo-google-fonts/montserrat';

import Baixado from './Baixado';
import BoxBaixados from './BoxBaixados';

const Baixados = ({ alunos }) => {

    let baixados = alunos.filter(el => el.baixado.state);
    console.log(baixados);

    let [fontsLoaded] = useFonts({
        Montserrat_700Bold,
        Montserrat_500Medium
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

    return(
        <View>
            <View style={styles.containerTitleBaixados}>
                <Text style={my_styles.title}>Baixados</Text>
            </View>
            <View>
                <View style={styles.row}>
                    <View style={styles.containerNomeBaixadoTitle}>
                        <Text style={my_styles.txt}>Nome</Text>
                    </View>
                    <View style={styles.containerDiasBaixadoTitle}>
                        <Text style={my_styles.txt}>Dias</Text>
                    </View>
                </View>
                <FlatList
                data={baixados}
                renderItem={({ item }) => <Baixado nome={item.guerra} dias={item.baixado.dias} last={item.guerra === baixados[baixados.length - 1].guerra}></Baixado>}></FlatList>
            </View>
        </View>
        
    )
}}

export default connect(state => ({ alunos: state.alunos.alunos }))(Baixados);

const my_styles = StyleSheet.create({
    title: {
        color: '#000000',
        fontSize: 34,
        fontFamily: 'Montserrat_700Bold'
    },

    txt: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium'
    }
})