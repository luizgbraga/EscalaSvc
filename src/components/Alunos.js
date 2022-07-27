import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import Aluno from './Aluno';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_400Regular
} from '@expo-google-fonts/montserrat';

import styles from '../styles';
import { connect } from 'react-redux';

import SearchBar from './SearchBar';

const Alunos = ({ alunos }) => {

    const [search, setSearch] = useState('');

    let [fontsLoaded] = useFonts({
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_400Regular
    });

    function searching(arr, el) {
        if(el !== '') {
            let filtered = arr.filter(item => item.nome.toLowerCase().includes(el));
            return filtered;
        } else {
            return arr;
        }
    }

    let alunosFiltered = searching(alunos, search);

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

    return(
        <View>
            <SearchBar export={setSearch}></SearchBar>
            <View style={styles.row}>
                <View style={styles.nomeCompletoTitle}>
                    <Text style={my_styles.txt}>Nome completo</Text>
                </View>
                <View style={styles.nomeDeGuerraTitle}>
                    <Text style={my_styles.txt}>Nome de guerra</Text>
                </View>
                <View style={styles.ultimoSvcTitle}>
                    <Text style={my_styles.littletxt}>Último serviço</Text>
                    <Text style={my_styles.littletxt}>(Escala Preta)</Text>
                </View>
                <View style={styles.ultimoSvcTitle}>
                <Text style={my_styles.littletxt}>Último serviço</Text>
                    <Text style={my_styles.littletxt}>(Escala Vermelha)</Text>
                </View>
                <View style={styles.isBaixadoTitle}>
                    <Text style={my_styles.txt}>Baixado</Text>
                </View>
            </View>
            <FlatList
                    data={alunosFiltered}
                    renderItem={({ item }) => <Aluno nomeCompleto={item.nome} nomeGuerra={item.guerra} last={item.nome === alunosFiltered[alunosFiltered.length - 1].nome} shadow={alunosFiltered.indexOf(item) % 2 !== 0}></Aluno>}>
            </FlatList>
        </View>
    )
}}

export default connect(state => ({ alunos: state.alunos.alunos }))(Alunos);

const my_styles = StyleSheet.create({
    txt: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Montserrat_500Medium'
    },

    littletxt: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Montserrat_500Medium'
    }
})