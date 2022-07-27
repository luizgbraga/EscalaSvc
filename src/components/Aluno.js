import React, { useState } from 'react';
import {
    View, 
    Text,
    StyleSheet
} from 'react-native';
import styles from '../styles';

import Checkbox from 'expo-checkbox';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_400Regular
} from '@expo-google-fonts/montserrat';

import { connect } from 'react-redux';

import * as alunos_actions from '../store/actions/setBaixado';

const Aluno = ({ last, shadow, nomeCompleto, nomeGuerra, alunos, dispatch }) => {

    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_400Regular
    });

    function setStyleNome(last, shadow) {
        if(last && shadow) {
            return styles.nomeCompletoBottomShadow;
        } else if(last && !shadow) {
            return styles.nomeCompletoBottom;
        } else if(!last && shadow) {
            return styles.nomeCompletoShadow;
        } else {
            return styles.nomeCompleto;
        }
    }

    function setStyleBaixado(last, shadow) {
        if(last && shadow) {
            return styles.isBaixadoBottomShadow;
        } else if(last && !shadow) {
            return styles.isBaixadoBottom;
        } else if(!last && shadow) {
            return styles.isBaixadoShadow;
        } else {
            return styles.isBaixado;
        }
    }

    function handlePress() {;
        dispatch(alunos_actions.set_baixado(nomeCompleto));
    }

    let index = alunos.map(el => el.nome).indexOf(String(nomeCompleto));
    let baixado = alunos[index].baixado.state;

    console.log(baixado)

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

    return(
        <View style={styles.row}>
            <View style={setStyleNome(last, shadow)}>
                <Text style={my_styles.txt}>{nomeCompleto}</Text>
            </View>
            <View style={shadow ? styles.nomeDeGuerraShadow : styles.nomeDeGuerra}>
                <Text style={my_styles.txt}>{nomeGuerra}</Text>
            </View>
            <View style={shadow ? styles.ultimoSvcShadow : styles.ultimoSvc}>
                <Text style={my_styles.txt}>08/04/2021</Text>
            </View>
            <View style={shadow ? styles.ultimoSvcShadow : styles.ultimoSvc}>
                <Text style={my_styles.txt}>04/04/2021</Text>
            </View>
            <View style={setStyleBaixado(last, shadow)}>
                <Checkbox value={baixado} onValueChange={() => handlePress()} color={baixado ? '#0B3914' : undefined} style={styles.checkbox}></Checkbox>
            </View>
        </View>
    )
}}

export default connect(state => ({ alunos: state.alunos.alunos }))(Aluno);

const my_styles = StyleSheet.create({
    txt: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Montserrat_400Regular'
    }
})