import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image
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

import Salvar from './Salvar';
import TextInputPostos from './TextInputPostos';
import alunos from '../store/reducers/alunos';
import * as actions_tucmdo from '../store/actions/setTuCmdo'

const FormsTuCmdo = ({ setVisible, alunos, ano, dispatch }) => {

    let unTuCmdo = alunos.filter(el => el.tuCmdo.state);
    let tuCmdo = [];
    for(let el of unTuCmdo) {
        if(el.tuCmdo.funcao === 'Auxiliar de Comando') {
            tuCmdo[0] = el;
        } else if(el.tuCmdo.funcao === 'Encarregado de Materiais') {
            tuCmdo[1] = el;
        } else if(el.tuCmdo.funcao === 'Auxiliar de Sargenteante') {
            tuCmdo[2] = el;
        } else if(el.tuCmdo.funcao === 'Furriel') {
            tuCmdo[3] = el;
        }
    }

    const [auxCom, setAuxCom] = useState(tuCmdo[0].guerra);
    const [encMat, setEncMat] = useState(tuCmdo[1].guerra);
    const [auxSgtte, setAuxSgtte] = useState(tuCmdo[2].guerra);
    const [furriel, setFurriel] = useState(tuCmdo[3].guerra);

    function handleFuncInput(value) {
        let nomes = alunos.map(el => el.guerra);
        return nomes.includes(value);
    }

    function allDiferent(a, b, c, d) {
        if(a !== b && a !== c && a !== d && b !== c && b !== d && c !== d) {
            return true;
        } else {
            return false;
        }
    }

    function handleInput(novoAuxCom, novoEncMat, novoAuxSgtte, novoFurriel) {
        if(handleFuncInput(novoAuxCom) && handleFuncInput(novoEncMat) && handleFuncInput(novoAuxSgtte) && handleFuncInput(novoFurriel) && allDiferent(novoAuxCom, novoEncMat, novoAuxSgtte, novoFurriel)) {
            dispatch(actions_tucmdo.edit_tucmdo(novoAuxCom, novoEncMat, novoAuxSgtte, novoFurriel));
            setVisible(false);
    }}

    const eating = require('../../assets/eating.png');
    const box = require('../../assets/box.png');
    const boss = require('../../assets/boss.png');
    const planejamento = require('../../assets/planeamento.png');

    const correct = require('../../assets/check-mark.png');
    const wrong = require('../../assets/close.png');

    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
    });

    let pauxCom = `Aux. Com. do ${ano}º Ano`;
    let pencMat = `Enc. Mat. do ${ano}º Ano`;
    let paxuSgtte = `Aux. Sgtte. do ${ano}º Ano`;
    let pfurriel = `Furriel do ${ano}º Ano`;

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

    return(
        <View style={{ width: 500, height: 600 }}>
            <View style={styles.containerTitleForms}>
                <Text style={{ color: '#FFFFFF', fontSize: 36, fontFamily: 'Montserrat_600SemiBold' }}>Turma de Comando</Text>
            </View>
            <View style={styles.containerAllInputs}>
                    <TextInputPostos tu img={boss} upperText={pauxCom} placeholder='Auxiliar de Comando' d={30} value={auxCom} setValue={setAuxCom} valid={handleFuncInput(auxCom)}></TextInputPostos>
                    <TextInputPostos tu img={box} upperText={pencMat} placeholder='Encarregado de Materiais' d={30} value={encMat} setValue={setEncMat} valid={handleFuncInput(encMat)}></TextInputPostos>
                    <TextInputPostos tu img={planejamento} upperText={paxuSgtte} placeholder='Auxiliar de Sargenteante' d={28} value={auxSgtte} setValue={setAuxSgtte} valid={handleFuncInput(auxSgtte)}></TextInputPostos>
                    <TextInputPostos tu img={eating} upperText={pfurriel} placeholder='Furriel' d={28} value={furriel} setValue={setFurriel} valid={handleFuncInput(furriel)}></TextInputPostos>
                 
            </View>
            <Salvar handleInput={handleInput} novoAuxCom={auxCom} novoEncMat={encMat} novoAuxSgtte={auxSgtte} novoFurriel={furriel}></Salvar>
        </View>
    )
}}

export default connect(state => ({ alunos: state.alunos.alunos, ano: state.ano.selectedAno }))(FormsTuCmdo);