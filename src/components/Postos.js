import React, { useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    Image
} from 'react-native';

import {
    Overlay
} from 'react-native-elements'

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import Posto from './Posto';
import styles from '../styles';
import FormsPostos from './FormsPostos';

import { connect } from 'react-redux';

const Postos = ({ postos }) => {

    const plus = require('../../assets/plus.png');

    const [visible, setVisible] = useState(false);

    let [fontsLoaded] = useFonts({
        Montserrat_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading />;
    } else {

    return(
        <View>
            <View style={styles.containerTitlePostos}>
                <Text style={my_styles.title}>Postos</Text>
                <TouchableOpacity onPress={() => setVisible(!visible)}>
                    <Image source={plus} style={styles.iconPlus}></Image>
                </TouchableOpacity>
            </View>
            <FlatList
                data={postos}
                renderItem={({ item }) => <Posto nome={item.nome} efetivo={item.efetivo} prioridade={item.prioridade} isArchived={item.archived}></Posto>}></FlatList>
            <Overlay 
                isVisible={visible}
                overlayStyle={styles.overlayStyle}
                onBackdropPress={() => setVisible(false)}>
                    <FormsPostos setVisible={setVisible}></FormsPostos>
            </Overlay>
        </View>
    )
}}

export default connect(state => ({ postos: state.postos.postos }))(Postos);

const my_styles = StyleSheet.create({
    title: {
        color: '#000000',
        fontSize: 34,
        fontFamily: 'Montserrat_700Bold'
    }
})