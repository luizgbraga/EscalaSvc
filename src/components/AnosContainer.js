import React from 'react';
import {
    View
} from 'react-native';

import styles from '../styles';

import Anos from './Anos';

export default props => {
    return(
        <View style={styles.anosContainer}>
            <Anos year={1}></Anos>
            <Anos year={2}></Anos>
            <Anos year={3}></Anos>
            <Anos year={4}></Anos>
        </View>
    )
}