import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native';
import {
    Overlay
} from 'react-native-elements';

import styles from '../styles';

import { connect } from 'react-redux';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_700Bold,
  Montserrat_500Medium
} from '@expo-google-fonts/montserrat';

import AlunoTuCmdo from './AlunoTuCmdo';
import FormsTuCmdo from './FormsTuCmdo';

const TuCmdo = ({ alunos }) => {

    const change = require('../../assets/change.png');

    const [visible, setVisible] = useState(false);

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

    let [fontsLoaded] = useFonts({
        Montserrat_700Bold,
        Montserrat_500Medium
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

    return(
        <View> 
            <View style={styles.containerTitleTuCmdo}>
                <Text style={my_styles.title}>Turma de Comando</Text>
                <TouchableOpacity onPress={() => setVisible(!visible)}>
                    <Image source={change} style={styles.iconChange}></Image>
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.row}>
                    <View style={styles.containerNomeTuTitle}>
                        <Text style={my_styles.txt}>Nome</Text>
                    </View>
                    <View style={styles.containerFuncaoTitle}>
                        <Text style={my_styles.txt}>Função</Text>
                    </View>
                </View>
                <FlatList
                    data={tuCmdo}
                    renderItem={({ item }) => <AlunoTuCmdo nome={item.guerra} funcao={item.tuCmdo.funcao} last={item.guerra === tuCmdo[tuCmdo.length - 1].guerra}></AlunoTuCmdo>}>
                </FlatList>
                <Overlay 
                    isVisible={visible}
                    overlayStyle={styles.overlayStyle}
                    onBackdropPress={() => setVisible(false)}>
                        <FormsTuCmdo setVisible={setVisible}></FormsTuCmdo>
                </Overlay>
            </View>
        </View>
    )
}}

export default connect(state => ({ alunos: state.alunos.alunos }))(TuCmdo);

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