import React from 'react';
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native';

import * as actions_ano from '../store/actions/setAno'
import { connect } from 'react-redux';

import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';

const Ano = ({ ano, dispatch, year }) => {
  let [fontsLoaded] = useFonts({
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
        <TouchableOpacity onPress={() => dispatch(actions_ano.set_ano(year))}>
            <View>
                <Text style={ano === year ? { color: '#FFFFFF', fontSize: 20, fontFamily: 'Montserrat_700Bold' } : 
                                            { color: 'rgba(239, 239, 239, 0.4)', fontSize: 20, fontFamily: 'Montserrat_700Bold' }}>{year}º ANO</Text>
            </View>
        </TouchableOpacity>
    )
  }
}

export default connect(state => ({ ano: state.ano.selectedAno }))(Ano);
