import React, { useState, useEffect } from 'react';
import {
    View,
    Text
} from 'react-native';

import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Montserrat_600SemiBold
} from '@expo-google-fonts/montserrat';

import styles from '../styles';

export default () => {

  let [fontsLoaded] = useFonts({
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return(
        <View style={styles.containerTitle}>
            <Text style={{
                color: '#FFFFFF',
                fontSize: 56,
                fontFamily: 'Montserrat_600SemiBold'
            }}>Alunos</Text>
        </View>
    )
  }
}
