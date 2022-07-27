import React from 'react';
import {
    View,
    ScrollView,
    Text
} from 'react-native';

import styles from '../styles';
import TuCmdo from './TuCmdo';


export default props => {
    return(
        <View style={styles.boxTuCmdo}>
            <ScrollView contentContainerStyle={styles.scrollTuCmdo} showsVerticalScrollIndicator={false}>
                <TuCmdo></TuCmdo>
            </ScrollView>
        </View>
    )
}