import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import styles from '../styles';

import Baixados from './Baixados';

export default props => {
    return(
        <View style={styles.boxBaixados}>
            <ScrollView contentContainerStyle={styles.scrollBaixados} showsVerticalScrollIndicator={false}>
                <Baixados></Baixados>
            </ScrollView>
        </View>
    )
}