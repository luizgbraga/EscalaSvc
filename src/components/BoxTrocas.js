import React from 'react';
import {
    View,
    ScrollView
} from 'react-native';

import styles from '../styles';

export default props => {
    return(
        <View style={styles.boxTrocas}>
            <ScrollView contentContainerStyle={styles.scrollPostos} showsVerticalScrollIndicator={false}>

            </ScrollView>
        </View>
    )
}