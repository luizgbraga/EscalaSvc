import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

import { connect } from 'react-redux';
import styles from '../styles';

import * as actions_postos from '../store/actions/setPostos';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

import Adicionar from './Adicionar';
import TextInputPostos from './TextInputPostos';

const FormsPostos = ({ setVisible, dispatch }) => {

    const [nome, setNome] = useState('');
    const [efetivo, setEfetivo] = useState('');
    const [prioridade, setPrioridade] = useState('');

    function handleInput(nome, efetivo, prioridade) {
        if(Number(efetivo) && Number(prioridade)) {
            dispatch(actions_postos.add_posto(nome, efetivo, prioridade));
            setVisible(false);
    }}

    function isNumberValid(value) {
        if(Number(value)) {
            return true;
        }
    }

    function isPostoValid(value) {
        if(value.length !== 0) {
            return true;
        }
    }

    const soldier = require('../../assets/soldier.png');
    const group = require('../../assets/group.png');
    const prioritize = require('../../assets/prioritize.png');

    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

    return(
        <View style={{ width: 500, height: (!Number(efetivo) && efetivo.length !== 0 && !Number(prioridade) && prioridade.length !== 0) ? 534 : ((!Number(efetivo) && efetivo.length !== 0 || !Number(prioridade) && prioridade.length !== 0)) ? 512 : 490}}>
            <View style={styles.containerTitleForms}>
                <Text style={{ color: '#FFFFFF', fontSize: 36, fontFamily: 'Montserrat_600SemiBold' }}>Novo posto</Text>
            </View>
            <View style={styles.containerAllInputs}>  
                <TextInputPostos img={soldier} upperText='Nome do posto' placeholder='Nome' d={34} value={nome} setValue={setNome} valid={isPostoValid(nome)}></TextInputPostos>
                <TextInputPostos img={group} upperText='Efetivo do posto' placeholder='Efetivo' d={34} value={efetivo} setValue={setEfetivo} ef valid={isNumberValid(efetivo)}></TextInputPostos>
                <TextInputPostos img={prioritize} upperText='Prioridade do posto' placeholder='Prioridade' d={28} value={prioridade} setValue={setPrioridade} pr valid={isNumberValid(prioridade)}></TextInputPostos>
            </View>
            <Adicionar handleInput={handleInput} nome={nome} efetivo={efetivo} prioridade={prioridade}></Adicionar>
        </View>
    )
}}

export default connect(state => ({ postos: state.postos.postos }))(FormsPostos);