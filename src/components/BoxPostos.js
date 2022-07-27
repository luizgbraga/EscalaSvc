import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import Postos from '../components/Postos';

import styles from '../styles';

export default props => {
    return(
        <View style={styles.boxPostos}>
            <ScrollView contentContainerStyle={styles.scrollPostos} showsVerticalScrollIndicator={false}>
                <Postos></Postos>
            </ScrollView>
        </View>
    )
}